"use server";

import { google } from "googleapis";

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;
// 시트 이름을 지정하지 않으면 첫 번째 시트를 자동으로 사용
const RANGE = "A:B";

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

async function getRows(): Promise<string[][]> {
  try {
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });
    return (res.data.values as string[][]) ?? [];
  } catch {
    return [];
  }
}

export async function getWaitlistCount(): Promise<number> {
  const rows = await getRows();
  // 첫 번째 행이 헤더인 경우 제외
  const dataRows = rows.filter((r) => r[0] !== "email");
  return dataRows.length;
}

export async function joinWaitlist(
  email: string
): Promise<{ success: boolean; count: number; message: string }> {
  const trimmed = email?.trim();

  if (!trimmed) {
    return { success: false, count: 0, message: "이메일을 입력해주세요." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return {
      success: false,
      count: 0,
      message: "올바른 이메일 주소를 입력해주세요.",
    };
  }

  try {
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    // 기존 이메일 중복 확인
    const rows = await getRows();
    const dataRows = rows.filter((r) => r[0] !== "email");
    const normalized = trimmed.toLowerCase();

    if (dataRows.some((r) => r[0]?.toLowerCase() === normalized)) {
      return {
        success: true,
        count: dataRows.length,
        message: "이미 신청하셨어요! 출시 시 가장 먼저 알려드릴게요 🎉",
      };
    }

    // 헤더가 없으면 추가
    if (rows.length === 0) {
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: RANGE,
        valueInputOption: "RAW",
        requestBody: { values: [["email", "createdAt"]] },
      });
    }

    // 새 이메일 추가
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: "RAW",
      requestBody: {
        values: [[normalized, new Date().toISOString()]],
      },
    });

    return {
      success: true,
      count: dataRows.length + 1,
      message: "신청 완료! 출시 시 가장 먼저 초대해드릴게요 🎉",
    };
  } catch (err) {
    console.error("Waitlist error:", err);
    return {
      success: false,
      count: 0,
      message: "오류가 발생했습니다. 다시 시도해주세요.",
    };
  }
}

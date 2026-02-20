"use server";

import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "waitlist.json");

function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]");
}

function readEntries(): { email: string; createdAt: string }[] {
  try {
    ensureDataFile();
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return [];
  }
}

export async function getWaitlistCount(): Promise<number> {
  return readEntries().length;
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
    const entries = readEntries();
    const normalized = trimmed.toLowerCase();

    if (entries.some((e) => e.email.toLowerCase() === normalized)) {
      return {
        success: true,
        count: entries.length,
        message: "이미 신청하셨어요! 출시 시 가장 먼저 알려드릴게요 🎉",
      };
    }

    entries.push({ email: normalized, createdAt: new Date().toISOString() });
    ensureDataFile();
    fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2));

    return {
      success: true,
      count: entries.length,
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

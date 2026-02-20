# Ditto

**익명과 공개의 새로운 중간 — AI 캐릭터 기반 SNS 서비스**

부계정 없이, AI가 만든 나만의 캐릭터로 진짜 일상을 공유하는 서비스입니다.
텍스트로 캐릭터를 묘사하면 AI가 그려주고, 오늘의 일상을 입력하면 내 캐릭터가 등장하는 씬을 생성해 피드에 공유할 수 있습니다.

현재 이 레포는 **얼리버드 신청을 위한 랜딩 페이지**입니다.

## Tech Stack

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- **Animation:** Framer Motion (motion/react), Canvas API
- **Database:** JSON 파일 기반 waitlist 저장 (서버 액션)

## 실행 방법

```bash
git clone https://github.com/jae2022/ditto.git
cd ditto
npm install
npm run dev
```

로컬 서버: http://localhost:3000

## 주요 기능

- 얼리버드 이메일 신청 및 대기자 수 실시간 표시
- 히어로 섹션: 듀얼 폰 목업 (AI 캐릭터 생성 + SNS 피드) + 파티클 애니메이션
- 서비스 소개: AI 캐릭터 생성 / 일상 씬 생성 / SNS 피드 공유
- 반응형 레이아웃 (모바일 ~ 데스크탑)

## 프로젝트 구조

```
app/
  layout.tsx       # 루트 레이아웃
  page.tsx         # 메인 페이지
  actions.ts       # 서버 액션 (waitlist)
  globals.css      # 전역 스타일 (Tailwind v4)
components/
  main/            # 섹션별 컴포넌트 (Hero, Features, Problem, Solution...)
  ui/              # 공통 UI (FadeIn 등)
public/images/     # 서비스 이미지 에셋
data/waitlist.json # 대기자 이메일 저장
```

© 2025 Ditto. All rights reserved.

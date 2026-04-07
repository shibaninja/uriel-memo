// Action Log: 取消/調整歷史紀錄
const actionLog = [];

// type: "personal" | "company"
// status: undefined=待確認 | "cancelled" | "one-time" | "downgraded-free" | "downgraded" | "in-use"
const suggestions = [
  {
    name: "DocuSign",
    desc: "電子簽名",
    card: "Joey-2042",
    usd: 45.00,
    type: "company",
    history: [
      { date: "2025/10/08", usd: 45, twd: 1371 },
      { date: "2025/11/07", usd: 45, twd: 1394 },
      { date: "2025/12/07", usd: 45, twd: 1408 },
      { date: "2026/01/08", usd: 45, twd: 1416 },
      { date: "2026/02/07", usd: 45, twd: 1424 },
      { date: "2026/03/07", usd: 45, twd: 1433 }
    ]
  },
  {
    name: "Hanabi AI",
    desc: "AI 工具",
    card: "Joey-2042",
    usd: 14.99,
    type: "company",
    history: [
      { date: "2025/09/22", usd: 14.99, twd: 454 },
      { date: "2025/10/22", usd: 14.99, twd: 460 },
      { date: "2025/11/22", usd: 14.99, twd: 471 },
      { date: "2025/12/22", usd: 14.99, twd: 473 },
      { date: "2026/01/23", usd: 14.99, twd: 474 },
      { date: "2026/02/22", usd: 14.99, twd: 472 }
    ]
  },
  {
    name: "21st.dev",
    desc: "AI 開發工具",
    card: "Joey-2042",
    usd: 40.00,
    type: "company",
    statusNote: "⚠️ 待查 — Joey 說沒有付款紀錄",
    history: [
      { date: "2025/09/15", usd: 10, twd: 302 },
      { date: "2025/09/15", usd: 30, twd: 906 },
      { date: "2025/10/15", usd: 30, twd: 919 },
      { date: "2025/10/15", usd: 10, twd: 306 },
      { date: "2025/11/15", usd: 10, twd: 308 },
      { date: "2025/11/15", usd: 30, twd: 924 },
      { date: "2025/12/15", usd: 10, twd: 313 },
      { date: "2026/01/15", usd: 10, twd: 316 },
      { date: "2026/02/15", usd: 10, twd: 314 }
    ]
  },
  {
    name: "APITemplate",
    desc: "PDF/圖片生成 API",
    card: "Joey-2042",
    usd: 89.00,
    type: "company",
    history: [
      { date: "2025/10/06", usd: 35, twd: 1064 },
      { date: "2025/10/20", usd: 69.85, twd: 2143 },
      { date: "2025/11/20", usd: 89, twd: 2780 },
      { date: "2025/12/20", usd: 89, twd: 2807 },
      { date: "2026/01/20", usd: 89, twd: 2810 },
      { date: "2026/02/20", usd: 89, twd: 2814 }
    ]
  },
  {
    name: "ConvertAPI",
    desc: "文件轉換 API",
    card: "Joey-2042",
    usd: 34.07,
    type: "company",
    history: [
      { date: "2025/09/28", usd: 34.07, twd: 1022 },
      { date: "2025/10/28", usd: 34.07, twd: 1022 },
      { date: "2025/11/28", usd: 34.07, twd: 1022 },
      { date: "2025/12/28", usd: 34.07, twd: 1022 },
      { date: "2026/01/28", usd: 34.07, twd: 1022 },
      { date: "2026/02/28", usd: 34.07, twd: 1022 }
    ]
  },
  {
    name: "Docker",
    desc: "容器化平台",
    card: "Joey-2042",
    usd: 108.00,
    type: "company",
    history: [
      { date: "2025/10/30", usd: 108, twd: 3305 }
    ]
  },
  {
    name: "Firecrawl",
    desc: "AI 網頁爬蟲",
    card: "Joey-2042",
    usd: 19.00,
    type: "company",
    history: [
      { date: "2025/09/16", usd: 19, twd: 574 },
      { date: "2025/10/16", usd: 19, twd: 582 },
      { date: "2025/11/16", usd: 19, twd: 585 },
      { date: "2025/12/16", usd: 19, twd: 595 },
      { date: "2026/01/16", usd: 19, twd: 600 },
      { date: "2026/02/16", usd: 19, twd: 597 }
    ]
  },
  {
    name: "Fish Audio (Hanabi AI)",
    desc: "語音生成平台",
    card: "Joey-2042",
    usd: 14.99,
    type: "company",
    history: [
      { date: "2025/09/22", usd: 14.99, twd: 454 },
      { date: "2025/10/22", usd: 14.99, twd: 460 },
      { date: "2025/11/22", usd: 14.99, twd: 471 },
      { date: "2025/12/22", usd: 14.99, twd: 473 },
      { date: "2026/01/23", usd: 14.99, twd: 474 },
      { date: "2026/02/22", usd: 14.99, twd: 472 }
    ]
  },

  {
    name: "用 AI 發電 社群 (PathUnfold)",
    desc: "社群訂閱費",
    card: "Joey-2042",
    usd: 15.58,
    type: "company",
    history: [
      { date: "2025/10/10", usd: 15.58, twd: 477 },
      { date: "2025/11/10", usd: 15.58, twd: 483 },
      { date: "2025/12/10", usd: 15.58, twd: 486 },
      { date: "2026/01/15", usd: 15.58, twd: 492 },
      { date: "2026/02/10", usd: 15.58, twd: 492 },
      { date: "2026/03/10", usd: 15.58, twd: 497 }
    ]
  },
  {
    name: "Replit",
    desc: "AI 開發平台",
    card: "Joey-2042",
    usd: 25.00,
    type: "company",
    history: [
      { date: "2025/09/23", usd: 25, twd: 757 },
      { date: "2025/10/23", usd: 25, twd: 769 },
      { date: "2025/11/23", usd: 25, twd: 786 },
      { date: "2025/12/23", usd: 25, twd: 788 },
      { date: "2026/01/24", usd: 25, twd: 789 },
      { date: "2026/02/23", usd: 25, twd: 788 }
    ]
  },
  {
    name: "Vizard",
    desc: "AI 影片剪輯",
    card: "Joey-2042",
    usd: 29.00,
    type: "company",
    history: [
      { date: "2025/09/29", usd: 29, twd: 884 },
      { date: "2025/11/01", usd: 29, twd: 893 },
      { date: "2025/11/29", usd: 29, twd: 911 },
      { date: "2025/12/29", usd: 29, twd: 912 },
      { date: "2026/01/29", usd: 29, twd: 911 }
    ]
  }
];

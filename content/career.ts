export type CareerItem = {
  id: string;
  period: string;
  title: string;
  detail?: string;
};

export const career: CareerItem[] = [
  { id: "hs-grad", 
    period: "2022.03", 
    title: "東京都立西高等学校 卒業", 
    //detail: "（高校名・部活など追記）" 
  },
  {
    id: "uni-enter",
    period: "2023.04",
    title: "早稲田大学 創造理工学部 総合機械工学科 入学",
    //detail: "機械・ソフトの両方に関心。ものづくりとアルゴリズムに取り組む。",
  },
  {
    id: "mechatro-award",
    period: "2024.01",
    title: "メカトロニクスラボA 自由製作課題 最優秀賞（履修者約180名中）",
    detail: "（詳細は Other project に掲載）",
  },
  {
    id: "laboratory",
    period: "2025.03",
    title: "総合機械工学科 岩田研究室 配属",
    detail: "リハビリ・医療・スポーツ習熟を支援するロボット技術の開発に取り組む研究室。",
  },
  {
    id: "internship",
    period: "2025.09.08 ～ 2025.09.12",
    title: "日本製鉄株式会社 短期インターンシップ 参加",
    detail: "実習テーマ「ROSを用いたKR除滓模擬環境開発」に取り組む。",
  },
  {
    id: "research-echo",
    period: "2025.10 ～",
    title: "所属研究班にて研究活動に参加",
    detail: "（詳細は Research project に掲載）",
  },
];
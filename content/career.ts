export type CareerItem = {
  id: string;
  period: string;
  title: string;
  detail?: string;
};

// データを { ja: [], en: [] } の形にまとめます
export const careerData = {
  ja: [
    { 
      id: "hs-grad", 
      period: "2022.03", 
      title: "東京都立西高等学校 卒業", 
    },
    {
      id: "uni-enter",
      period: "2023.04",
      title: "早稲田大学 創造理工学部 総合機械工学科 入学",
      detail: "4大力学や制御工学を含む専門科目に加え、C言語によるプログラミング演習などを履修。",
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
      detail: "実習テーマ「ROSを用いたKR除滓模擬環境開発」に取り組む。\nUbuntu環境下でROS 2・Pythonを用いたKR除滓模擬ロボットアームの制御を実装。\n動作検証を完了後、取鍋の傾動機構を模した小型ロボット制御に取り組むメンバーの開発支援に携わる。",
    },
    {
      id: "research-echo",
      period: "2025.10 ～",
      title: "所属研究班にて研究活動に参加",
      detail: "（詳細は Research project に掲載）",
    },
  ],
  en: [
    { 
      id: "hs-grad", 
      period: "2022.03", 
      title: "Graduated from Tokyo Metropolitan Nishi High School", 
    },
    {
      id: "uni-enter",
      period: "2023.04",
      title: "Enrolled in Waseda University",
      detail: "Studied specialized subjects including the four major mechanics (Dynamics, Material, Fluid, Thermodynamics) and Control Engineering, along with C programming exercises.",
    },
    {
      id: "mechatro-award",
      period: "2024.01",
      title: "Best Award in Mechatronics Lab A (Free Project)",
      detail: "Chosen from approx. 180 students. (See 'Other project' for details)",
    },
    {
      id: "laboratory",
      period: "2025.03",
      title: "Assigned to Iwata Laboratory",
      detail: "Researching robot technology for rehabilitation, medical support, and sports skill acquisition.",
    },
    {
      id: "internship",
      period: "2025.09.08 ～ 2025.09.12",
      title: "Internship at Nippon Steel Corporation",
      detail: "Worked on the practicum project “Development of a simulated KR deslagging environment using ROS.”\nImplemented control of a KR deslagging–simulated robotic arm using ROS 2 and Python on Ubuntu.\nAfter completing the motion verification, I supported another intern’s development work on controlling a small robot that simulates a ladle tilting mechanism.",
    },
    {
      id: "research-echo",
      period: "2025.10 ～",
      title: "Joined the Research Group",
      detail: "Participating in research activities. (See 'Research project' for details)",
    },
  ]
};
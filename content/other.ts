import type { MediaItem } from "@/components/MediaGallery";

// プロジェクトの型定義
export type OtherProjectItem = {
  id: string;
  title: string;
  // subtitle は削除済み
  tags: string[];
  // ここが重要：文字列 または オブジェクト{title, body} の配列
  description: (string | { title: string; body: string })[];
  media: MediaItem[];
  mediaGap?: string;
  githubUrl?: string;
};

export const otherProjects: OtherProjectItem[] = [
  // === 1つ目: メカトロニクスラボ ===
  {
    id: "mechatro-labA",
    title: "メカトロニクスラボA 自由製作課題：最優秀賞",
    tags: ["Arduino言語", "Mechatronics"], 
    description: [
      "大学1年次に履修したメカトロニクスラボAにて、「Arduino」と呼ばれるマイコンを用いた自由製作課題に取り組み、履修者約180名の中で最優秀賞を受賞しました。",
      "「食事中の飛沫感染を自動で防ぐ」ことをコンセプトとした帽子型ウェアラブルデバイスを製作しました。\nArduinoに加え、サーボモータおよび超音波センサを用いて食事中の手の動作を検知し、マスクが開閉する機構を実装しました。",
      "以下に、受賞時の様子と制作物の外観を掲載します。",
    ],
    mediaGap: "20px",
    githubUrl: "https://github.com/michihara213",
    media: [
      { 
        kind: "image", 
        src: "/other/award.jpg", 
        alt: "最優秀賞受賞時の写真",
        caption: "最優秀賞 受賞時の様子" 
      },
      { 
        kind: "image", 
        src: "/other/overview1.jpg", 
        alt: "作品全体図（正面）",
        caption: "作品全体図①" 
      },
      { 
        kind: "image", 
        src: "/other/overview2.jpg", 
        alt: "作品全体図（背面）",
        caption: "作品全体図②" 
      },
    ],
  },

  // === 2つ目: 夏課題ゲーム ===
  {
    id: "summer-game",
    title: "2Dエンドレスランナーゲーム開発",
    tags: ["Unity", "C#"],
    description: [
      "研究室の夏課題の一環として提示された「Google Chromeの恐竜ゲームを模したゲームの開発』に取り組みました。",
      "独自のゲーム性を高めるため、西部劇をテーマにドット絵素材を選定しました。\nまた、必須要件（ジャンプ／障害物／スコア管理）の実装に加え、BGMの追加やゲームオーバー画面へのシーン遷移などを実装しました。",
      "以下に実際のプレイ動画を掲載します。",
    ],
    mediaGap: "0px", 
    githubUrl: "https://github.com/michihara213",
    media: [
      {
        kind: "video",
        src: "/other/western-game.mp4",
        caption: "プレイ動画（Unityにて開発）",
      },
    ],
  },

  // === 3つ目: 研究室ロボコン ===
  {
    id: "lab-robocon",
    title: "玉入れロボットの開発",
    tags: ["Arduino言語", "Mechatronics", "Inventor Professional", "3D printing"],
    description: [
      "所属する研究室の学部3年生（11名）が4チームに分かれ、オリジナルのロボットを製作して競い合うロボコンに取り組んでいます。",
      "競技は、攻撃側と防御側で各1機のロボットを製作し、制限時間内にピンポン玉をフィールド上のゴールへ投げ入れて得点を競う形式です。",
      "私はチーム内で攻撃用ロボットの設計・製作を担当しました。\nAutodesk Inventor Professionalを用いて3Dモデルを作成し、干渉チェックやサイズ制限に注意しながらカタパルト機構の実装を行いました。",
      "以下に、設計時のCADモデルと、実際に動作しているロボットの様子を掲載します。",
    ],
    mediaGap: "20px",
    githubUrl: "https://github.com/michihara213",
    media: [
      {
        kind: "image",
        src: "/other/robocon_cad.png",
        alt: "Inventor Professionalによる設計画面",
        caption: "Inventor Professionalでの設計画面"
      },
      {
        kind: "video",
        src: "/other/robocon_demo.mp4",
        caption: "実機の動作テスト"
      },
    ],
  },
];
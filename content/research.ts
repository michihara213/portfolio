import type { MediaItem } from "../components/MediaGallery";

export const researchIntro: string[] = [
  // 1段落目：社会背景とORIZURU
  "超高齢社会に伴う進行性の心疾患の増加に対して、地方では医師・検査技師不足が深刻であり、心疾患の早期発見と人手不足の解消を同時に実現する仕組みが求められています。\n私の所属する研究班では、この課題に対して遠隔医療システムに基づいた自動探査型心エコー検査ロボット「ORIZURU」の開発を進めています。",

  // 2段落目：技術的課題（人手による評価がボトルネック）
  "一方で、ロボットが取得した断面が診断に適した品質かどうかの判断は、依然として熟練者の目視確認や採点に依存しており、完全自動化や社会実装に向けたボトルネックになっています。\n心疾患の診断に重要な基本3断面（傍胸骨左室長軸断面／傍胸骨左室長軸断面／心尖部四腔断面）を安定して取得するためには、画像品質を自動で評価できる仕組みが不可欠です。",

  // 3段落目：本研究の目的（PLAXの自動評価）
  "そこで、先輩の修士論文研究に協力し、基本断面の一つである傍胸骨左室長軸断面（PLAX）を対象とした、画像品質を自動かつ定量的に評価するアルゴリズムの設計・構築に取り組みました。\n解剖学的な特徴に基づくベンチマークを定義し、それに基づいて画像品質を定量的に評価しました。",
];

export const researchIntroMedia = {
  orizuru: {
    src: "/research/orizuru.png",
    alt: "自動探査型心エコー検査ロボット ORIZURU",
    caption: "自動探査型心エコー検査ロボット「ORIZURU」",
  },
  threeViews: [
    {
      src: "/research/view_plax.png",
      alt: "傍胸骨左室長軸断面（PLAX）",
      caption: "傍胸骨左室長軸断面（PLAX）",
    },
    {
      src: "/research/view_psax.png",
      alt: "傍胸骨左室短軸断面（PSAX）",
      caption: "傍胸骨左室短軸断面（PSAX）",
    },
    {
      src: "/research/view_a4c.png",
      alt: "心尖部四腔断面（A4C）",
      caption: "心尖部四腔断面（A4C）",
    },
  ],
};

export const benchmarkFigure = {
  src: "/research/benchmarks.png",
  alt: "左室長軸断面における画像品質の6つのベンチマーク図",
  caption: "左室長軸断面で用いる6つのベンチマーク図",
};

export const benchmarkItems: { id: string; title: string; note?: string }[] = [
  { id: "b1", title: "① 左心室が視認可能" },
  { id: "b2", title: "② 左心室が開ループ" },
  { id: "b3", title: "③ 僧帽弁の検出" },
  { id: "b4", title: "④ 大動脈弁の検出" },
  { id: "b5", title: "⑤ 大動脈前壁が心室中隔より高いか同じ" },
  { id: "b6", title: "⑥ 僧帽弁の先端が腱索や乳頭筋と繋がっていない" },
];

export type ResearchTopic = {
  id: string;
  title: string;
  subtitle?: string;
  benchmark?: string;
  tags?: string[];
  description: (string | { title: string; body: string })[];
  media?: MediaItem[];
  githubUrl?: string;
  // 表データ用
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  // ★追加: 画像と動画（または下の要素）との隙間を指定
  mediaGap?: string;
};

export const researchTopics: ResearchTopic[] = [
  {
    id: "lv-detect",
    title: "① 左心室検出",
    benchmark: "① 左心室が視認可能",
    tags: ["Python", "OpenCV", "echo-plax-segmentation"],
    description: [
      "左心室領域が存在するかを判断するためのベンチマークです。",
      "本ベンチマークに対しては、GitHubリポジトリ「echo-plax-segmentation」による解析と、OpenCVによる画像処理を組み合わせた自動判定の手法を検討しました。",
      "具体的な処理フローは以下の通りです。",
      {
        title: "1. AIによる左心室領域の検出：",
        body: "「echo-plax-segmentation」内の学習済みモデルを使用し、エコー動画から左心室のマスク領域を抽出。",
      },
      {
        title: "2. 内部領域の定義：",
        body: "解析対象を扇形領域に限定した上で、平滑化・二値化・輪郭抽出を順次適用。\n得られた点群に対し2次関数フィッティングを行うことで左心室後壁の曲線を特定し、その内部領域を動的に定義。",
      },
      {
        title: "3. 画素数比率による判定：",
        body: "「AI検出領域」と「幾何学的内部領域」それぞれの画素数を算出し、その比率が閾値を超えた場合に『検出』、それ以外の場合に『未検出』と判定。",
      },
      "なお、判定の閾値については、複数のサンプル動画における比率の変動を確認し、最適な値を実験的に決定しました。",
    ],
    mediaGap: "20px", // 2枚並びの標準的な隙間
    githubUrl: "https://github.com/michihara213",
    media: [
      {
        kind: "image",
        src: "/research/lv_ai_mask.jpg",
        alt: "AIモデルによる検出結果", // ← ここはOK
        caption: "AIモデルによる領域抽出（左心室：青色領域）",
      },
      {
        kind: "image",
        src: "/research/lv_geometric.jpg",
        alt: "幾何学的処理の結果",      // ★これ（alt）を追加してください！
        caption: "幾何学的処理による内部領域の定義",
      },
    ],
  },
  {
    id: "lv-loop",
    title: "② 左心室の開・閉ループ判定",
    benchmark: "② 左心室が開ループ（/ 閉ループ判定）",
    tags: ["Python", "OpenCV"],
    description: [
      "左心室の左側の領域が閉じていないかを判断するためのベンチマークです。",
      "本ベンチマークに対しては、OpenCVを用いた自動判定の手法を検討しました。",
      "具体的な処理フローは以下の通りです。",
      {
        title: "1. 解析領域の限定：",
        body: "扇形マスクを作成し、解析対象を扇形領域に限定することで、黒背景やUIなどの超音波プローブの走査領域以外を除去する。"
      },
      {
        title: "2. 前処理（ノイズ除去）：",
        body: "平滑化・二値化・クロージング処理を順次適用し、超音波画像特有の途切れやノイズを整形。"
      },
      {
        title: "3. 輪郭階層・画素数による判定：",
        body: "輪郭抽出の階層構造を利用し、「階層深さが1」かつ「画素数が閾値以上」の輪郭が存在する場合に『閉ループ』、それ以外の場合に『開ループ』と判定。"
      },
      "上記処理フローに基づき、ORIZURUで取得した6つの動画（各300フレーム、計1800枚）に対し、混同行列を用いた定量的な精度評価を行いました。",
      "その結果、Average F1-score 0.912、Accuracy 0.925を達成し、本手法の有効性を確認しました。"
      //"前処理（平滑化・二値化・クロージング等）→輪郭抽出→階層情報・面積閾値などを用いて開/閉ループを判定する手法を検討しました。",
      //"以下に、判定基準となる「開ループ」「閉ループ」の定義と、実際の判定動画、および精度評価の結果を示します。",
    ],
    // ★ここで隙間を調整 ("10px", "40px", "3rem" など)
    mediaGap: "20px",
    githubUrl: "https://github.com/michihara213/EchoAnalysisProject/tree/main/loop_analysis",
    media: [
      {
        kind: "image",
        src: "/research/loop_open.png",
        alt: "開ループの例",
        caption: "開ループ画像（壁が途切れている）",
      },
      {
        kind: "image",
        src: "/research/loop_close.png",
        alt: "閉ループの例",
        caption: "閉ループ画像（壁が繋がっている）",
      },
      {
        kind: "video",
        src: "/research/echo_loop.mp4",
        caption: "開・閉ループの判定結果（例）",
      },
    ],
    tableData: {
      headers: ["", "Precision", "Recall", "F1-score", "Accuracy"],
      rows: [
        ["Sample1", "0.577", "0.970", "0.723", "0.837"],
        ["Sample2", "0.814", "0.955", "0.879", "0.903"],
        ["Sample3", "0.872", "0.969", "0.918", "0.907"],
        ["Sample4", "1.000", "0.939", "0.969", "0.939"],
        ["Sample5", "1.000", "0.977", "0.988", "0.977"],
        ["Sample6", "1.000", "0.990", "0.995", "0.990"],
        ["Average", "0.877", "0.967", "0.912", "0.925"],
      ],
    },
  },
  {
    id: "aov-detect",
    title: "④ 大動脈弁検出",
    benchmark: "④ 大動脈弁の検出",
    tags: ["Python", "Docker", "CVAT", "YOLOv8"],
    description: [
      "大動脈弁が存在するかを判断するためのベンチマークです。",
      "本ベンチマークに対しては、CVATでアノテーションしたデータを用いて、YOLOv8により大動脈弁の検出・分類を行いました。",
      "3つのクラス（AV_upside、AV_downside、AV_closed）を定義し、合計約2万枚（うち私の担当分は2000枚）の画像をtrain / validation / test = 7 : 2 : 1 に分割して学習・評価しました。\n学習条件はエポック数100、バッチサイズ16です。",
      "以下に、学習データの作成に使用したCVAT画面の例と、テストデータに対する精度評価結果を示します。",
    ],
    // ★ここで隙間を調整
    mediaGap: "20px",
    media: [
      // 1. 大動脈弁なし
      {
        kind: "image",
        src: "/research/aov_none.jpg",
        alt: "大動脈弁なし元画像",
        caption: "① 大動脈弁なし（元画像）",
      },
      {
        kind: "image",
        src: "/research/aov_none_cvat.png",
        alt: "大動脈弁なしCVAT",
        caption: "CVAT作業画面",
      },

      // 2. 開いている
      {
        kind: "image",
        src: "/research/aov_open.jpg",
        alt: "大動脈弁開元画像",
        caption: "② 大動脈弁 開（元画像）",
      },
      {
        kind: "image",
        src: "/research/aov_open_cvat.png",
        alt: "大動脈弁開CVAT",
        caption: "CVAT作業画面（青：AV_upside、赤：AV_downside）",
      },

      // 3. 閉じている
      {
        kind: "image",
        src: "/research/aov_close.jpg",
        alt: "大動脈弁閉元画像",
        caption: "③ 大動脈弁 閉（元画像）",
      },
      {
        kind: "image",
        src: "/research/aov_close_cvat.png",
        alt: "大動脈弁閉CVAT",
        caption: "CVAT作業画面（緑：AV_closed）",
      },
      // ★動画（aov_detect.mp4）を削除しました
    ],
    // ★ここに追加：画像のログに基づいたテーブルデータ
    tableData: {
      headers: ["Class", "Images", "Precision", "Recall", "mAP50", "mAP50-95"],
      rows: [
        ["AV_upside", "773", "0.746", "0.688", "0.722", "0.340"],
        ["AV_downside", "727", "0.759", "0.717", "0.752", "0.352"],
        ["AV_closed", "850", "0.892", "0.887", "0.923", "0.623"],
        // "Average" という名前にしておくと、ProjectSectionの仕様で自動的に太字になります
        ["Average", "2318", "0.799", "0.764", "0.799", "0.438"],
      ],
    },
  },
  {
    id: "mv-chord",
    title: "⑥ 僧帽弁と腱索の繋がり検出",
    benchmark: "⑥ 僧帽弁の先端と腱索/乳頭筋の繋がり評価",
    tags: ["Python", "OpenCV", "YOLOv8"],
    description: [
      "僧帽弁の先端が、腱索や乳頭筋と繋がっていないかを評価するためのベンチマークです。",
      "本ベンチマークに対しては、腱索・乳頭筋のうち腱索に限定し、YOLOv8による物体検出と、OpenCVによる画像処理を組み合わせた自動判定の手法を検討しました。",
      "具体的な処理フローは以下の通りです。",
      {
        title: "1. 解析領域の動的定義：",
        body: "YOLOv8で検出した「僧帽弁」のバウンディングボックスを基準に、その左側の方向に探索範囲を拡張することで、腱索を評価するための解析領域を動的に定義。",
      },
      {
        title: "2. 前処理（ノイズ除去）：",
        body: "各解析領域に対し、ノイズ除去・平滑化・二値化を順次適用し、超音波画像特有の途切れやノイズを整形。",
      },
      {
        title: "3. 輝度比率による判定：",
        body: "「僧帽弁」と「腱索」それぞれの輝度の総和を算出し、その比率が閾値を超えた場合に『繋がりあり』、それ以外の場合に『繋がりなし』と判定。",
      },
      "上記処理フローに基づき、検証用データセットに対し、混同行列を用いた定量的な精度評価を行いました。",
      "その結果、F1-score 0.964、Accuracy 0.973を達成し、本手法の有効性を確認しました。"
    ],
    mediaGap: "20px",
    githubUrl: "https://github.com/michihara213/EchoAnalysisProject/tree/main/chord_analysis",
    media: [
      // 変更点: 動画を削除し、元画像を先頭に追加
      {
        kind: "image",
        src: "/research/chord_org.jpg", // ★元画像 (public/research/ に配置してください)
        alt: "判定前の元画像",
        caption: "判定前の元画像",
      },
      // 既存の2枚
      {
        kind: "image",
        src: "/research/chord_none.jpg",
        alt: "判定結果: None",
        caption: "Chord: None (繋がりなし)",
      },
      {
        kind: "image",
        src: "/research/chord_connected.jpg",
        alt: "判定結果: Connected",
        caption: "Chord: Connected (繋がりあり)",
      },
    ],
    tableData: {
      headers: ["Target", "Precision", "Recall", "F1-score", "Accuracy"],
      rows: [["Validation Set", "0.985", "0.944", "0.964", "0.973"]],
    },
  },
];
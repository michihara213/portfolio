import type { MediaItem } from "../components/MediaGallery";

// 1. 各トピック（ProjectSectionに渡すデータ）の型
export type ResearchTopic = {
  id: string;
  title: string;
  subtitle?: string;
  benchmark?: string;
  tags?: string[];
  description: (string | { title: string; body: string })[];
  media?: MediaItem[];
  githubUrl?: string;
  tableData?: {
    headers: string[];
    rows: string[][];
    caption?: string; 
  };
  mediaGap?: string;
};

// 2. ページ全体のデータの型を定義
export type ResearchPageContent = {
  intro: string[];
  introMedia: {
    orizuru: { src: string; alt: string; caption: string };
    threeViews: { src: string; alt: string; caption: string }[];
  };
  benchmarkFigure: { src: string; alt: string; caption: string };
  benchmarkItems: { id: string; title: string; note?: string }[];
  topics: ResearchTopic[];
};

// 3. データ本体
export const researchData: Record<"ja" | "en", ResearchPageContent> = {
  ja: {
    intro: [
      "超高齢社会に伴う進行性の心疾患の増加に対して、地方では医師・検査技師不足が深刻であり、心疾患の早期発見と人手不足の解消を同時に実現する仕組みが求められています。\n私の所属する研究班では、この課題に対して遠隔医療システムに基づいた自動探査型心エコー検査ロボット「ORIZURU」の開発を進めています。",
      "一方で、ロボットが取得した断面が診断に適した品質かどうかの判断は、依然として熟練者の目視確認や採点に依存しており、完全自動化や社会実装に向けたボトルネックになっています。\n心疾患の診断に重要な基本3断面（傍胸骨左室長軸断面／傍胸骨左室長軸断面／心尖部四腔断面）を安定して取得するためには、画像品質を自動で評価できる仕組みが不可欠です。",
      "そこで、先輩の修士論文研究に協力し、基本断面の一つである傍胸骨左室長軸断面（PLAX）を対象とした、画像品質を自動かつ定量的に評価するアルゴリズムの設計・構築に取り組みました。\n解剖学的な特徴に基づくベンチマークを定義し、それに基づいて画像品質を定量的に評価しました。",
    ],
    introMedia: {
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
    },
    benchmarkFigure: {
      src: "/research/benchmarks.png",
      alt: "左室長軸断面における画像品質の6つのベンチマーク図",
      caption: "左室長軸断面で用いる6つのベンチマーク図",
    },
    benchmarkItems: [
      { id: "b1", title: "① 左心室が視認可能" },
      { id: "b2", title: "② 左心室が開ループ" },
      { id: "b3", title: "③ 僧帽弁の検出" },
      { id: "b4", title: "④ 大動脈弁の検出" },
      { id: "b5", title: "⑤ 大動脈前壁が心室中隔より高いか同じ" },
      { id: "b6", title: "⑥ 僧帽弁の先端が腱索や乳頭筋と繋がっていない" },
    ],
    topics: [
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
        mediaGap: "20px",
        githubUrl: "https://github.com/michihara213/EchoAnalysisProject/tree/main/lv_analysis",
        media: [
          {
            kind: "image",
            src: "/research/lv_ai_mask.jpg",
            alt: "AIモデルによる検出結果",
            caption: "AIモデルによる領域抽出（左心室：青色領域）",
          },
          {
            kind: "image",
            src: "/research/lv_geometric.jpg",
            alt: "幾何学的処理の結果",
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
            body: "扇形マスクを作成し、解析対象を扇形領域に限定することで、黒背景やUIなどの超音波プローブの走査領域以外を除去する。",
          },
          {
            title: "2. 前処理（ノイズ除去）：",
            body: "平滑化・二値化・クロージング処理を順次適用し、超音波画像特有の途切れやノイズを整形。",
          },
          {
            title: "3. 輪郭階層・画素数による判定：",
            body: "輪郭抽出の階層構造を利用し、「階層深さが1」かつ「画素数が閾値以上」の輪郭が存在する場合に『閉ループ』、それ以外の場合に『開ループ』と判定。",
          },
          "上記処理フローに基づき、ORIZURUで取得した6つの動画（各300フレーム、計1800枚）に対し、混同行列を用いた定量的な精度評価を行いました。",
          "その結果、Average F1-score 0.912、Accuracy 0.925を達成し、本手法の有効性を確認しました。",
        ],
        mediaGap: "20px",
        githubUrl:
          "https://github.com/michihara213/EchoAnalysisProject/tree/main/loop_analysis",
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
          caption: "混同行列に基づく精度評価結果"
        },
      },
      // ▼▼▼ ここを修正: aov-detect -> av-detect ▼▼▼
      {
        id: "av-detect", // ★ID変更
        title: "④ 大動脈弁検出",
        benchmark: "④ 大動脈弁の検出",
        tags: ["Python", "Docker", "CVAT", "YOLOv8"],
        description: [
          "大動脈弁が存在するかを判断するためのベンチマークです。",
          "本ベンチマークに対しては、CVATでアノテーションしたデータを用いて、YOLOv8により大動脈弁の検出・分類を行いました。",
          "3つのクラス（AV_upside、AV_downside、AV_closed）を定義し、合計約2万枚（うち私の担当分は2000枚）の画像をtrain / validation / test = 7 : 2 : 1 に分割して学習・評価しました。\n学習条件はエポック数100、バッチサイズ16です。",
          "以下に、学習データの作成に使用したCVAT画面の例と、テストデータに対する精度評価結果を示します。",
        ],
        mediaGap: "20px",
        media: [
          {
            kind: "image",
            // ★ファイル名変更
            src: "/research/av_none.jpg",
            alt: "大動脈弁なし元画像",
            caption: "① 大動脈弁なし（元画像）",
          },
          {
            kind: "image",
            // ★ファイル名変更
            src: "/research/av_none_cvat.png",
            alt: "大動脈弁なしCVAT",
            caption: "CVAT作業画面",
          },
          {
            kind: "image",
            // ★ファイル名変更
            src: "/research/av_open.jpg",
            alt: "大動脈弁開元画像",
            caption: "② 大動脈弁 開（元画像）",
          },
          {
            kind: "image",
            // ★ファイル名変更
            src: "/research/av_open_cvat.png",
            alt: "大動脈弁開CVAT",
            caption: "CVAT作業画面（青：AV_upside、赤：AV_downside）",
          },
          {
            kind: "image",
            // ★ファイル名変更
            src: "/research/av_close.jpg",
            alt: "大動脈弁閉元画像",
            caption: "③ 大動脈弁 閉（元画像）",
          },
          {
            kind: "image",
            // ★ファイル名変更
            src: "/research/av_close_cvat.png",
            alt: "大動脈弁閉CVAT",
            caption: "CVAT作業画面（緑：AV_closed）",
          },
        ],
        tableData: {
          headers: ["Class", "Images", "Precision", "Recall", "mAP50", "mAP50-95"],
          rows: [
            ["AV_upside", "773", "0.746", "0.688", "0.722", "0.340"],
            ["AV_downside", "727", "0.759", "0.717", "0.752", "0.352"],
            ["AV_closed", "850", "0.892", "0.887", "0.923", "0.623"],
            ["Average", "2318", "0.799", "0.764", "0.799", "0.438"],
          ],
          caption: "混同行列に基づく精度評価結果"
        },
      },
      // ▼▼▼ 前回の修正: mv-chord -> mv-chordae ▼▼▼
      {
        id: "mv-chordae",
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
          "その結果、F1-score 0.964、Accuracy 0.973を達成し、本手法の有効性を確認しました。",
        ],
        mediaGap: "20px",
        githubUrl:
          "https://github.com/michihara213/EchoAnalysisProject/tree/main/chordae_analysis",
        media: [
          {
            kind: "image",
            src: "/research/chordae_org.jpg",
            alt: "判定前の元画像",
            caption: "判定前の元画像",
          },
          {
            kind: "image",
            src: "/research/chordae_none.jpg",
            alt: "判定結果: None",
            caption: "Chordae: None (繋がりなし)",
          },
          {
            kind: "image",
            src: "/research/chordae_connected.jpg",
            alt: "判定結果: Connected",
            caption: "Chordae: Connected (繋がりあり)",
          },
        ],
        tableData: {
          headers: ["Target", "Precision", "Recall", "F1-score", "Accuracy"],
          rows: [["Validation Set", "0.985", "0.944", "0.964", "0.973"]],
          caption: "混同行列に基づく精度評価結果"
        },
      },
    ],
  },
  
  // ▼▼▼ 英語版データ ▼▼▼
  en: {
    intro: [
      "With the rapid aging of society and the increase in progressive heart diseases, there is a serious shortage of doctors and technicians in rural areas. A system is needed to achieve both early detection of heart disease and relief of manpower shortages.\nMy research group is developing an automated probing echocardiography robot, 'ORIZURU,' based on a tele-medicine system to address this issue.",
      "However, judging whether the cross-section obtained by the robot is of suitable quality for diagnosis still relies on visual confirmation and grading by experts, which is a bottleneck for full automation and social implementation.\nTo stably acquire the three basic views (PLAX, PSAX, A4C) important for diagnosis, a mechanism to automatically evaluate image quality is essential.",
      "Therefore, I collaborated on a senior's master's thesis research to design and construct an algorithm to automatically and quantitatively evaluate image quality targeting the Parasternal Long-Axis View (PLAX).\nWe defined benchmarks based on anatomical features and quantitatively evaluated image quality based on them.",
    ],
    introMedia: {
      orizuru: {
        src: "/research/orizuru.png",
        alt: "Automated Probing Echocardiography Robot ORIZURU",
        caption: "Automated Probing Echocardiography Robot 'ORIZURU'",
      },
      threeViews: [
        {
          src: "/research/view_plax.png",
          alt: "Parasternal Long-Axis View (PLAX)",
          caption: "Parasternal Long-Axis View (PLAX)",
        },
        {
          src: "/research/view_psax.png",
          alt: "Parasternal Short-Axis View (PSAX)",
          caption: "Parasternal Short-Axis View (PSAX)",
        },
        {
          src: "/research/view_a4c.png",
          alt: "Apical Four-Chamber View (A4C)",
          caption: "Apical Four-Chamber View (A4C)",
        },
      ],
    },
    benchmarkFigure: {
      src: "/research/benchmarks.png",
      alt: "6 Benchmarks for PLAX Image Quality",
      caption: "6 Benchmarks for PLAX Image Quality",
    },
    benchmarkItems: [
      { id: "b1", title: "1. Left Ventricle (LV) is visible" },
      { id: "b2", title: "2. LV is open loop" },
      { id: "b3", title: "3. Mitral Valve (MV) detection" },
      { id: "b4", title: "4. Aortic Valve (AV) detection" },
      { id: "b5", title: "5. AV anterior wall ≥ Septum height" },
      { id: "b6", title: "6. MV tip not connected to chordae/muscle" },
    ],
    topics: [
      {
        id: "lv-detect",
        title: "1. LV Detection",
        benchmark: "1. Left Ventricle (LV) is visible",
        tags: ["Python", "OpenCV", "echo-plax-segmentation"],
        description: [
          "Benchmark to determine if the LV region exists.",
          "I examined an automatic determination method combining analysis with the GitHub repository 'echo-plax-segmentation' and image processing using OpenCV.",
          "The processing flow is as follows:",
          {
            title: "1. AI Detection of LV Region:",
            body: "Used the pre-trained model in 'echo-plax-segmentation' to extract the mask area of the left ventricle from echo videos.",
          },
          {
            title: "2. Definition of Internal Region:",
            body: "Limited the analysis target to a fan-shaped area, then applied smoothing, binarization, and contour extraction sequentially.\nIdentified the curve of the LV posterior wall by performing quadratic function fitting on the obtained point cloud and dynamically defined its internal region.",
          },
          {
            title: "3. Judgment by Pixel Count Ratio:",
            body: "Calculated the pixel counts of the 'AI Detection Region' and the 'Geometric Internal Region', and judged as 'Detected' if the ratio exceeded the threshold, otherwise 'Not Detected'.",
          },
          "The threshold for judgment was determined experimentally by confirming the fluctuation of the ratio in multiple sample videos.",
        ],
        mediaGap: "20px",
        githubUrl: "https://github.com/michihara213/EchoAnalysisProject/tree/main/lv_analysis",
        media: [
          {
            kind: "image",
            src: "/research/lv_ai_mask.jpg",
            alt: "Detection Result by AI Model",
            caption: "Region Extraction by AI (LV: Blue Area)",
          },
          {
            kind: "image",
            src: "/research/lv_geometric.jpg",
            alt: "Result of Geometric Processing",
            caption: "Definition of Internal Region by Geometric Processing",
          },
        ],
      },
      {
        id: "lv-loop",
        title: "2. LV Open/Closed Loop Judgment",
        benchmark: "2. Left Ventricle is Open Loop",
        tags: ["Python", "OpenCV"],
        description: [
          "Benchmark to determine if the left side of the LV region is not closed.",
          "I examined an automatic determination method using OpenCV.",
          "The processing flow is as follows:",
          {
            title: "1. Limitation of Analysis Area:",
            body: "Created a fan-shaped mask to limit the analysis target, removing areas outside the ultrasound probe's scan area (such as black background and UI).",
          },
          {
            title: "2. Preprocessing (Noise Removal):",
            body: "Applied smoothing, binarization, and closing processing sequentially to shape the gaps and noise specific to ultrasound images.",
          },
          {
            title: "3. Judgment by Contour Hierarchy & Pixel Count:",
            body: "Utilized the hierarchical structure of contour extraction. If a contour with 'hierarchy depth 1' and 'pixel count ≥ threshold' exists, it is judged as 'Closed Loop', otherwise 'Open Loop'.",
          },
          "Based on the above flow, I performed a quantitative accuracy evaluation using a confusion matrix on 6 videos (300 frames each, 1800 frames total) acquired by ORIZURU.",
          "As a result, I achieved an Average F1-score of 0.912 and Accuracy of 0.925, confirming the effectiveness of this method.",
        ],
        mediaGap: "20px",
        githubUrl:
          "https://github.com/michihara213/EchoAnalysisProject/tree/main/loop_analysis",
        media: [
          {
            kind: "image",
            src: "/research/loop_open.png",
            alt: "Example of Open Loop",
            caption: "Open Loop (Wall is interrupted)",
          },
          {
            kind: "image",
            src: "/research/loop_close.png",
            alt: "Example of Closed Loop",
            caption: "Closed Loop (Wall is connected)",
          },
          {
            kind: "video",
            src: "/research/echo_loop.mp4",
            caption: "Judgment Results (Example)",
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
          caption: "Accuracy evaluation results based on the confusion matrix"
        },
      },
      // ▼▼▼ ここを修正: aov-detect -> av-detect ▼▼▼
      {
        id: "av-detect", // ★ID変更
        title: "4. Aortic Valve Detection",
        benchmark: "4. Aortic Valve (AV) Detection",
        tags: ["Python", "Docker", "CVAT", "YOLOv8"],
        description: [
          "Benchmark to determine if the Aortic Valve exists.",
          "For this benchmark, I used data annotated with CVAT to detect and classify the Aortic Valve using YOLOv8.",
          "I defined 3 classes (AV_upside, AV_downside, AV_closed) and trained/evaluated using a total of about 20,000 images (my charge was 2,000) split into train/validation/test = 7:2:1.\nThe training condition was 100 epochs and batch size 16.",
          "Below are examples of the CVAT screen used for training data creation and the accuracy evaluation results for the test data.",
        ],
        mediaGap: "20px",
        media: [
          {
            kind: "image",
            // ★ファイル名変更
            src: "/research/av_none.jpg",
            alt: "No AV (Original)",
            caption: "1. No AV (Original Image)",
          },
          {
            kind: "image",
            // ★ファイル名変更
            src: "/research/av_none_cvat.png",
            alt: "No AV (CVAT)",
            caption: "CVAT Workspace",
          },
          {
            kind: "image",
            // ★ファイル名変更
            src: "/research/av_open.jpg",
            alt: "AV Open (Original)",
            caption: "2. AV Open (Original Image)",
          },
          {
            kind: "image",
            // ★ファイル名変更
            src: "/research/av_open_cvat.png",
            alt: "AV Open (CVAT)",
            caption: "CVAT Workspace (Blue: AV_upside, Red: AV_downside)",
          },
          {
            kind: "image",
            // ★ファイル名変更
            src: "/research/av_close.jpg",
            alt: "AV Closed (Original)",
            caption: "3. AV Closed (Original Image)",
          },
          {
            kind: "image",
            // ★ファイル名変更
            src: "/research/av_close_cvat.png",
            alt: "AV Closed (CVAT)",
            caption: "CVAT Workspace (Green: AV_closed)",
          },
        ],
        tableData: {
          headers: ["Class", "Images", "Precision", "Recall", "mAP50", "mAP50-95"],
          rows: [
            ["AV_upside", "773", "0.746", "0.688", "0.722", "0.340"],
            ["AV_downside", "727", "0.759", "0.717", "0.752", "0.352"],
            ["AV_closed", "850", "0.892", "0.887", "0.923", "0.623"],
            ["Average", "2318", "0.799", "0.764", "0.799", "0.438"],
          ],
          caption: "Accuracy evaluation results based on the confusion matrix"
        },
      },
      // ▼▼▼ 前回の修正: mv-chord -> mv-chordae ▼▼▼
      {
        id: "mv-chordae",
        title: "6. MV & Chordae Connection Detection",
        benchmark: "6. Tip of MV is not connected to Chordae/Papillary Muscles",
        tags: ["Python", "OpenCV", "YOLOv8"],
        description: [
          "Benchmark to evaluate if the tip of the Mitral Valve (MV) is not connected to chordae tendineae or papillary muscles.",
          "I focused on chordae tendineae and examined an automatic determination method combining object detection by YOLOv8 and image processing by OpenCV.",
          "The processing flow is as follows:",
          {
            title: "1. Dynamic Definition of Analysis Area:",
            body: "Based on the bounding box of 'Mitral Valve' detected by YOLOv8, I dynamically defined the analysis area to evaluate the chordae by extending the search range to the left.",
          },
          {
            title: "2. Preprocessing (Noise Removal):",
            body: "Applied noise removal, smoothing, and binarization sequentially to each analysis area to shape gaps and noise specific to ultrasound images.",
          },
          {
            title: "3. Judgment by Brightness Ratio:",
            body: "Calculated the sum of brightness for 'Mitral Valve' and 'Chordae', and judged as 'Connected' if the ratio exceeded the threshold, otherwise 'Not Connected' (None).",
          },
          "Based on the above flow, I performed a quantitative accuracy evaluation using a confusion matrix on the validation dataset.",
          "As a result, I achieved an F1-score of 0.964 and Accuracy of 0.973, confirming the effectiveness of this method.",
        ],
        mediaGap: "20px",
        githubUrl:
          "https://github.com/michihara213/EchoAnalysisProject/tree/main/chordae_analysis",
        media: [
          {
            kind: "image",
            src: "/research/chordae_org.jpg",
            alt: "Original Image before Judgment",
            caption: "Original Image before Judgment",
          },
          {
            kind: "image",
            src: "/research/chordae_none.jpg",
            alt: "Result: None",
            caption: "Chordae: None (Not Connected)",
          },
          {
            kind: "image",
            src: "/research/chordae_connected.jpg",
            alt: "Result: Connected",
            caption: "Chordae: Connected",
          },
        ],
        tableData: {
          headers: ["Target", "Precision", "Recall", "F1-score", "Accuracy"],
          rows: [["Validation Set", "0.985", "0.944", "0.964", "0.973"]],
          caption: "Accuracy evaluation results based on the confusion matrix"
        },
      },
    ],
  },
};
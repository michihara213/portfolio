import type { MediaItem } from "@/components/MediaGallery";

export const otherProject = {
  id: "mechatro-labA",
  title: "メカトロニクスラボA 自由製作課題：最優秀賞（履修者約180名中 1位）",
  subtitle: "大学1年 / マイコンを用いた自由製作課題",
  tags: ["Arduino言語", "Mechatronics"],//"Embedded", "C", "Mechatronics", "Prototyping"
  description: [
    "大学1年次のメカトロニクス系授業にて、マイコンを用いた自由製作に取り組み、履修者約180名の中で最優秀賞（1位）を獲得しました。",
    "企画・設計・実装・デモまで一貫して行い、完成度とプレゼンテーションが評価されました。",
    "（制作物の内容、担当、工夫点、苦労した点などを追記すると強いです）",
  ],
  media: [
    { kind: "video", src: "/media/other/mechatro-labA/demo.mp4", caption: "デモ動画（任意）" },
    { kind: "image", src: "/media/other/mechatro-labA/img1.png", caption: "制作物写真（任意）" },
    { kind: "image", src: "/media/other/mechatro-labA/img2.png", caption: "回路/構造の説明画像（任意）" },
  ] as MediaItem[],
};
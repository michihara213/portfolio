import React from "react";

export type MediaItem =
  | { kind: "video"; src: string; caption?: string }
  | { kind: "image"; src: string; alt: string; caption?: string };

type MediaGalleryProps = {
  media: MediaItem[];
  customGap?: string; 
};

export function MediaGallery({ media, customGap }: MediaGalleryProps) {
  const renderItems = () => {
    const elements: React.ReactNode[] = [];
    let imageBuffer: Extract<MediaItem, { kind: "image" }>[] = [];

    const flushImages = () => {
      if (imageBuffer.length === 0) return;

      if (imageBuffer.length === 1) {
        // 1枚だけの時
        const img = imageBuffer[0];
        elements.push(
          <div className="single-image-wrap" key={`single-${elements.length}`}>
            <img src={img.src} alt={img.alt} />
            {img.caption ? (
              <div className="mediaCaption">{img.caption}</div>
            ) : null}
          </div>
        );
      } else {
        // 2枚以上の時（グリッド表示）
        elements.push(
          <div 
            className="image-grid" 
            key={`grid-${elements.length}`}
            // ▼▼▼ 【ここが重要！】ここに style を移動しました ▼▼▼
            // これで「横並びの画像の隙間」が制御されます
            style={customGap ? { columnGap: customGap } : undefined}
          >
            {imageBuffer.map((img, idx) => (
              <div key={`${img.src}-${idx}`}>
                <img src={img.src} alt={img.caption ?? "project image"} />
                {img.caption ? (
                  <div className="mediaCaption">{img.caption}</div>
                ) : null}
              </div>
            ))}
          </div>
        );
      }
      imageBuffer = [];
    };

    media.forEach((item, index) => {
      if (item.kind === "video") {
        flushImages();
        elements.push(
          <div className="video-wrap" key={`video-${index}`}>
            <video controls playsInline preload="metadata" src={item.src} />
            {item.caption ? (
              <div className="mediaCaption">{item.caption}</div>
            ) : null}
          </div>
        );
      } else {
        imageBuffer.push(item);
      }
    });

    flushImages();

    return elements;
  };

  return (
    <div
      className="media-block"
      // ▼▼▼ 【削除済み】ここにあった style={...} を消しました ▼▼▼
      // これにより、動画との隙間は CSS (globals.css) の row-gap: 40px が適用され、固定されます。
    >
      {renderItems()}
    </div>
  );
}
import { MediaGallery, type MediaItem } from "@/components/MediaGallery";

type ProjectSectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  benchmark?: string;
  tags?: string[];
  description: (string | { title: string; body: string })[];
  media?: MediaItem[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  mediaGap?: string;
};

export function ProjectSection({
  id,
  title,
  subtitle,
  tags,
  description,
  media,
  tableData,
  mediaGap,
}: ProjectSectionProps) {
  return (
    <section className="section" id={id}>
      <div className="card">
        <h3>{title}</h3>
        {subtitle ? <div className="meta">{subtitle}</div> : null}

        {tags && tags.length > 0 ? (
          <div className="tag-row">
            {tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <div style={{ marginTop: 16, marginBottom: 16 }}>
          {description.map((item, i) => {
            if (typeof item === "string") {
              return (
                <p
                  key={i}
                  style={{ margin: "10px 0", fontSize: 14, whiteSpace: "pre-wrap" }}
                >
                  {item}
                </p>
              );
            } else {
              const match = item.title.match(/^(\d+\.)\s*(.*)$/);
              
              if (!match) {
                return (
                  <div key={i} style={{ marginBottom: 12, marginLeft: "1.4em"}}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-main)" }}>
                      {item.title}
                    </div>
                    <div style={{ paddingLeft: "1.5em", marginTop: 4, fontSize: 14, color: "var(--text-muted)" }}>
                      {item.body}
                    </div>
                  </div>
                );
              }

              const numberPart = match[1];
              const textPart = match[2];

              return (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", marginBottom: 12, marginLeft: "1.4em"}}>
                  <div style={{ 
                    fontWeight: 700, 
                    fontSize: 14, 
                    color: "var(--text-main)",
                    flexShrink: 0,
                    width: "1.3em", 
                  }}>
                    {numberPart}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-main)" }}>
                      {textPart}
                    </div>
                    <div style={{ marginTop: 4, fontSize: 14, color: "var(--text-muted)" }}>
                      {item.body}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>

        {media && media.length > 0 ? (
          <MediaGallery media={media} customGap={mediaGap} />
        ) : null}

        {tableData ? (
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  {tableData.headers.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.rows.map((row, rIndex) => {
                  const isBold = row[0] === "Average";
                  return (
                    <tr key={rIndex} className={isBold ? "row-bold" : ""}>
                      {row.map((cell, cIndex) => (
                        <td key={cIndex}>{cell}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="mediaCaption">混合行列に基づく精度評価結果</div>
          </div>
        ) : null}

        {/* ★削除済み：ここに書いていた静的な「↑ 目次に戻る」リンクを消しました */}
      </div>
    </section>
  );
}
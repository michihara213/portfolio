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
  githubUrl?: string; // ★追加
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
  githubUrl, // ★追加
}: ProjectSectionProps) {
  return (
    <section className="section" id={id}>
      <div className="card">
        {/* タイトルとGitHubボタンを横並びにするレイアウトに変更 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
          <div>
            <h3>{title}</h3>
            {subtitle ? <div className="meta">{subtitle}</div> : null}
          </div>
          
          {/* GitHubリンクがある場合のみ表示 */}
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
              title="View Source Code"
            >
              {/* GitHubアイコン (SVG) */}
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.07-3.345.72-4.05-1.605-4.05-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.095-.75.075-.735.075-.735 1.215.09 1.845 1.245 1.845 1.245 1.08 1.845 2.835 1.305 3.525.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.545 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub Repository</span>
            </a>
          ) : null}
        </div>

        {tags && tags.length > 0 ? (
          <div className="tag-row">
            {tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        ) : null}
        
        {/* ...以下、既存のコードと同じ... */}
        <div style={{ marginTop: 16, marginBottom: 16 }}>
          {description.map((item, i) => {
            // ...省略（変更なし）...
            if (typeof item === "string") {
              return (
                <p key={i} style={{ margin: "10px 0", fontSize: 14, whiteSpace: "pre-wrap" }}>
                  {item}
                </p>
              );
            } else {
              // ...省略（変更なし）...
              const match = item.title.match(/^(\d+\.)\s*(.*)$/);
              if (!match) {
                 return (
                  <div key={i} style={{ marginBottom: 12, marginLeft: "1.4em"}}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-main)" }}>
                      {item.title}
                    </div>
                    <div style={{ paddingLeft: "1.5em", marginTop: 4, fontSize: 14, color: "var(--text-muted)", whiteSpace: "pre-wrap" }}>
                      {item.body}
                    </div>
                  </div>
                );
              }
              const numberPart = match[1];
              const textPart = match[2];
              return (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", marginBottom: 12, marginLeft: "1.4em"}}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-main)", flexShrink: 0, width: "1.3em" }}>
                    {numberPart}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-main)" }}>
                      {textPart}
                    </div>
                    <div style={{ marginTop: 4, fontSize: 14, color: "var(--text-muted)", whiteSpace: "pre-wrap" }}>
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
                  const isBold = row[0] === "Average" || row[0] === "Validation Set";
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
      </div>
    </section>
  );
}
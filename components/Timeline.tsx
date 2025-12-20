import type { CareerItem } from "../content/career";

export function Timeline({ items }: { items: CareerItem[] }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="timeline-item" key={item.id}>
          <div className="timeline-year">{item.period}</div>
          <div className="timeline-body">
            <div style={{ fontWeight: 600, color: "var(--text-main)" }}>{item.title}</div>
            {item.detail ? <div>{item.detail}</div> : null}
          </div>
        </div>
      ))}
    </div>
  );
}
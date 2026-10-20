import { marqueeItems } from "@/lib/data";

export function Band() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="band" aria-hidden="true">
      <div className="track">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}

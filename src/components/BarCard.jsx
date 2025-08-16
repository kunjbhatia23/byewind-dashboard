export default function BarCard() {
  const items = [
    { label: "Linux", v: 19 },
    { label: "Mac", v: 23 },
    { label: "iOS", v: 18 },
    { label: "Windows", v: 26 },
    { label: "Android", v: 10 },
    { label: "Other", v: 22 },
  ];
  const max = 30;

  return (
    <div className="bg-card rounded-xl2 border border-ring shadow-soft p-4">
      <h3 className="font-medium">Traffic by Device</h3>
      <div className="mt-2 text-xs text-muted">0–30M</div>
      <div className="mt-4 flex items-end justify-between gap-3 h-40">
        {items.map((it, idx) => (
          <div key={idx} className="flex flex-col items-center flex-1">
            <div
              className="w-7 rounded-t-md bg-gray-900"
              style={{ height: `${(it.v / max) * 100}%` }}
              title={`${it.label} ${it.v}M`}
            />
            <div className="mt-2 text-xs text-muted">{it.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
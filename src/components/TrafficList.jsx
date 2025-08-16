export default function TrafficList() {
  const items = [
    { label: "Google", a: 70, b: 55 },
    { label: "YouTube", a: 65, b: 50 },
    { label: "Instagram", a: 90, b: 90, bold: true },
    { label: "Pinterest", a: 55, b: 45 },
    { label: "Facebook", a: 40, b: 35 },
    { label: "Twitter", a: 50, b: 30 },
    { label: "Tumblr", a: 35, b: 25 },
  ];

  return (
    <div className="bg-card rounded-xl2 border border-ring shadow-soft p-4">
      <h3 className="font-medium">Traffic by Website</h3>
      <div className="mt-4 space-y-4">
        {items.map((it, idx)=>(
          <div key={idx}>
            <div className="text-sm">{it.label}</div>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full" style={{ width: `${it.a}%`, background: it.bold ? "#111827" : "#E5E7EB" }} />
              </div>
              <div className="w-16 h-2 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full" style={{ width: `${it.b}%`, background: "#E5E7EB" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
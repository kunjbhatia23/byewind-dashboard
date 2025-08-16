// src/components/TrafficList.jsx
export default function TrafficList() {
  const items = [
    { label: "Google", value: 70 },
    { label: "YouTube", value: 45 },
    { label: "Instagram", value: 90, bold: true },
    { label: "Pinterest", value: 35 },
    { label: "Facebook", value: 60 },
    { label: "Twitter", value: 40 },
    { label: "Tumblr", value: 30 },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="font-medium text-gray-800">Traffic by Website</h3>
      <ul className="mt-4 space-y-4">
        {items.map((it, idx) => (
          <li key={idx} className="flex items-center gap-4 text-sm">
            <span className="w-24 text-gray-600">{it.label}</span>
            <div className="flex-1 h-2 rounded-full bg-gray-100">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${it.value}%`,
                  backgroundColor: it.bold ? "#111827" : "#e5e7eb",
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
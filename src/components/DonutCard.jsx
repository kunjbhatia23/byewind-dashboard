export default function DonutCard() {
  const segments = [
    { label: "United States", value: 38.6 },
    { label: "Canada", value: 22.5 },
    { label: "Mexico", value: 30.8 },
    { label: "Other", value: 8.1 },
  ];
  const total = segments.reduce((a,b)=>a+b.value,0);

  // simple donut with SVG arcs
  const size = 180, stroke = 24, r = (size - stroke) / 2, c = 2 * Math.PI * r;

  let acc = 0;
  const arcs = segments.map((s, i) => {
    const frac = s.value / total;
    const dash = c * frac;
    const gap = c - dash;
    const rotate = (acc / total) * 360;
    acc += s.value;
    const color = ["#111827","#A7F3D0","#93C5FD","#E5E7EB"][i % 4];
    return { dash, gap, rotate, color, s };
  });

  return (
    <div className="bg-card rounded-xl2 border border-ring shadow-soft p-4">
      <h3 className="font-medium">Traffic by Location</h3>
      <div className="mt-4 flex items-center gap-6">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <g transform={`rotate(-90 ${size/2} ${size/2})`}>
            {arcs.map((a,i)=>(
              <circle
                key={i}
                cx={size/2} cy={size/2} r={r}
                fill="none" stroke={a.color} strokeWidth={stroke}
                strokeDasharray={`${a.dash} ${a.gap}`}
                transform={`rotate(${a.rotate} ${size/2} ${size/2})`}
                strokeLinecap="butt"
              />
            ))}
          </g>
        </svg>

        <ul className="text-sm space-y-2">
          {segments.map((s,i)=>(
            <li key={i} className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ background: ["#111827","#A7F3D0","#93C5FD","#E5E7EB"][i%4] }}
              />
              <span className="w-28">{s.label}</span>
              <span className="text-muted">{s.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
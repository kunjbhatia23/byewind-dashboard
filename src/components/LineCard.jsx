import { useMemo } from "react";

export default function LineCard() {
  const w = 800, h = 240, p = 24;
  // two smooth-ish lines with static points to mimic the screenshot
  const thisYear = useMemo(
    () => [10,12,14,16,18,22,26].map((v,i)=>[i, v]),
    []
  );
  const lastYear = useMemo(
    () => [22,18,16,14,15,17,21].map((v,i)=>[i, v]),
    []
  );

  const x = i => p + (i * (w - 2*p)) / 6;
  const y = v => h - p - (v-8) * ((h - 2*p) / 20);

  const path = (arr) =>
    "M " + arr.map(([i,v]) => `${x(i)},${y(v)}`).join(" L ");

  return (
    <div className="bg-card rounded-xl2 border border-ring shadow-soft p-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 text-sm">
          <span className="font-medium">Total Users</span>
          <span className="text-muted">Total Projects</span>
          <span className="text-muted">Operating Status</span>
        </div>
        <div className="text-xs text-muted">This year • Last year</div>
      </div>

      <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 w-full">
        {/* axes */}
        <line x1={p} y1={h-p} x2={w-p} y2={h-p} stroke="#E5E7EB"/>
        <line x1={p} y1={p} x2={p} y2={h-p} stroke="#E5E7EB"/>
        {/* last year (light) */}
        <path d={path(lastYear)} fill="none" stroke="#C7D2FE" strokeWidth="3" />
        {/* this year (black) */}
        <path d={path(thisYear)} fill="none" stroke="#111827" strokeWidth="3" />
      </svg>
    </div>
  );
}
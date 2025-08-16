import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from "@heroicons/react/24/solid";

export default function StatCard({ title, value, delta, up }) {
  const Positive = ArrowTrendingUpIcon;
  const Negative = ArrowTrendingDownIcon;
  const Icon = up ? Positive : Negative;

  return (
    <div className="bg-card rounded-xl2 border border-ring shadow-soft p-4">
      <div className="text-sm text-muted">{title}</div>
      <div className="mt-2 flex items-end justify-between">
        <div className="text-3xl font-semibold tracking-tight">{value}</div>
        <div
          className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full border ${
            up ? "text-emerald-600 border-emerald-200" : "text-rose-600 border-rose-200"
          }`}
        >
          <Icon className="w-4 h-4" />
          <span>{delta}</span>
        </div>
      </div>
    </div>
  );
}
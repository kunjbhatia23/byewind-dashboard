// src/components/StatCard.jsx
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from "@heroicons/react/24/solid";

export default function StatCard({ title, value, delta, up, className }) {
  const Positive = ArrowTrendingUpIcon;
  const Negative = ArrowTrendingDownIcon;
  const Icon = up ? Positive : Negative;

  return (
    <div className={`p-5 rounded-2xl ${className}`}>
      <div className="text-sm text-gray-600">{title}</div>
      <div className="mt-1 flex items-end justify-between">
        <div className="text-3xl font-semibold">{value}</div>
        <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
          <span>{delta}</span>
          <Icon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
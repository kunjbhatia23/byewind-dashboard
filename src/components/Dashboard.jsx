// src/components/Dashboard.jsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import StatCard from './StatCard';
import TrafficList from './TrafficList';
import DonutCard from './DonutCard';
import BarCard from './BarCard';
import LineCard from './LineCard';
import { ChevronDownIcon } from "@heroicons/react/24/solid";

// Register all the chart components you'll be using
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center gap-2 text-gray-700">
        <span className="font-medium">Today</span>
        <ChevronDownIcon className="w-4 h-4" />
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Views" value="721K" delta="+11.02%" up className="bg-sky-100" />
        <StatCard title="Visits" value="367K" delta="-0.03%" className="bg-slate-100" />
        <StatCard title="New Users" value="1,156" delta="+15.03%" up className="bg-sky-100" />
        <StatCard title="Active Users" value="239K" delta="+6.08%" up className="bg-slate-100" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <LineCard />
        <TrafficList />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarCard />
        <DonutCard />
      </div>
    </div>
  );
}
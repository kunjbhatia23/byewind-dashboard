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
import { Line } from "react-chartjs-2";
import StatCard from './StatCard';
import TrafficList from './TrafficList';
import DonutCard from './DonutCard';
import BarCard from './BarCard';
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
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          pointStyle: 'rectRounded',
          boxWidth: 8,
          padding: 20,
        },
      },
    },
    scales: {
      y: {
        min: 10,
        max: 28,
        ticks: {
          stepSize: 2,
          padding: 10,
          color: '#9ca3af',
        },
        grid: {
          color: '#e5e7eb',
        },
        border: {
          display: false,
        }
      },
      x: {
        ticks: {
          padding: 10,
          color: '#9ca3af',
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        }
      }
    },
    elements: {
      point: {
        radius: 4,
        backgroundColor: 'white',
        borderWidth: 2,
        hoverRadius: 6,
        hoverBorderWidth: 2,
      }
    },
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "This year",
        data: [10, 18, 15, 12, 20, 25, 28],
        borderColor: "black",
        tension: 0.4,
      },
      {
        label: "Last year",
        data: [12, 14, 18, 16, 22, 21, 24],
        borderColor: "#99d9f1",
        tension: 0.4,
        backgroundColor: "#eefaff",
        fill: true,
      }
    ],
  };

  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center gap-2 text-gray-700">
        <span className="font-medium">Today</span>
        <ChevronDownIcon className="w-4 h-4" />
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard title="Views" value="721K" delta="+11.02%" up className="bg-sky-100" />
        <StatCard title="Visits" value="367K" delta="-0.03%" className="bg-slate-100" />
        <StatCard title="New Users" value="1,156" delta="+15.03%" up className="bg-sky-100" />
        <StatCard title="Active Users" value="239K" delta="+6.08%" up className="bg-slate-100" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Total Users</h3>
          <div style={{ height: '300px' }}>
            <Line options={lineOptions} data={lineData} />
          </div>
        </div>
        <TrafficList />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <BarCard />
        <DonutCard />
      </div>
    </div>
  );
}
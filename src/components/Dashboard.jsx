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
} from 'chart.js';
import { Line, Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      { label: "This year", data: [10, 18, 15, 12, 20, 25, 28], borderColor: "black", tension: 0.4 },
      { label: "Last year", data: [12, 14, 18, 16, 22, 21, 24], borderColor: "lightblue", tension: 0.4 }
    ],
  };

  const barData = {
    labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
    datasets: [{ data: [18, 22, 20, 15, 10, 18], backgroundColor: ["#8BC34A", "#90CAF9", "#7986CB", "#4DD0E1", "#F48FB1", "#A1887F"] }]
  };

  const donutData = {
    labels: ["United States", "Canada", "Mexico", "Other"],
    datasets: [{ data: [38.6, 22.5, 30.8, 8.1], backgroundColor: ["#333", "#90CAF9", "#4DB6AC", "#E0E0E0"] }]
  };

  return (
    <div className="flex-1 space-y-6">
      {/* Metrics */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-sm text-gray-500">Views</p>
          <h2 className="text-2xl font-semibold">721K</h2>
          <p className="text-green-600 text-sm">+11.02%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-sm text-gray-500">Visits</p>
          <h2 className="text-2xl font-semibold">367K</h2>
          <p className="text-red-600 text-sm">-0.03%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-sm text-gray-500">New Users</p>
          <h2 className="text-2xl font-semibold">1,156</h2>
          <p className="text-green-600 text-sm">+15.03%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-sm text-gray-500">Active Users</p>
          <h2 className="text-2xl font-semibold">239K</h2>
          <p className="text-green-600 text-sm">+6.08%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-600 mb-2">Total Users</h3>
          <Line data={lineData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-600 mb-2">Traffic by Website</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between"><span>Google</span><span>---</span></li>
            <li className="flex justify-between"><span>YouTube</span><span>---</span></li>
            <li className="flex justify-between"><span>Instagram</span><span className="font-semibold">━━━</span></li>
            <li className="flex justify-between"><span>Pinterest</span><span>---</span></li>
            <li className="flex justify-between"><span>Facebook</span><span>---</span></li>
            <li className="flex justify-between"><span>Twitter</span><span>---</span></li>
            <li className="flex justify-between"><span>Tumblr</span><span>---</span></li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-600 mb-2">Traffic by Device</h3>
          <Bar data={barData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-600 mb-2">Traffic by Location</h3>
          <Doughnut data={donutData} />
        </div>
      </div>
    </div>
  );
}
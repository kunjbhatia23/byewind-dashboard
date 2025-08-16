import { Line, Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend);

export const Dashboard = () => {
  return (
    <main className="p-6 overflow-y-auto">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {[
          { title: "Views", value: "721K", change: "+11.02%" },
          { title: "Visits", value: "367K", change: "-0.03%" },
          { title: "New Users", value: "1,156", change: "+15.03%" },
          { title: "Active Users", value: "239K", change: "+6.08%" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl p-4 shadow">
            <h3 className="text-gray-500">{stat.title}</h3>
            <p className="text-2xl font-semibold">{stat.value}</p>
            <span className="text-sm text-green-600">{stat.change}</span>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-xl p-4 shadow">
          <h3 className="font-medium mb-2">Total Users</h3>
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              datasets: [
                { label: "This year", data: [10, 20, 15, 30, 25, 20, 28], borderColor: "black" },
                { label: "Last year", data: [15, 25, 20, 22, 28, 26, 30], borderColor: "lightblue" },
              ],
            }}
          />
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <h3 className="font-medium mb-2">Traffic by Website</h3>
          <ul className="space-y-1 text-gray-600">
            {["Google", "YouTube", "Instagram", "Pinterest", "Facebook", "Twitter", "Tumblr"].map((site, i) => (
              <li key={i} className="flex justify-between">
                <span>{site}</span> <span className="w-16 h-2 bg-gray-200 rounded"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl p-4 shadow">
          <h3 className="font-medium mb-2">Traffic by Device</h3>
          <Bar
            data={{
              labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
              datasets: [{ label: "Users", data: [15, 20, 18, 12, 22, 19], backgroundColor: "lightblue" }],
            }}
          />
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <h3 className="font-medium mb-2">Traffic by Location</h3>
          <Doughnut
            data={{
              labels: ["United States", "Canada", "Mexico", "Other"],
              datasets: [{ data: [38, 22, 30, 10], backgroundColor: ["black", "lightgreen", "lightblue", "gray"] }],
            }}
          />
        </div>
      </div>
    </main>
  );
};

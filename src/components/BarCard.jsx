// src/components/BarCard.jsx
import { Bar } from "react-chartjs-2";

export default function BarCard() {
  const data = {
    labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
    datasets: [
      {
        label: "Traffic by Device",
        data: [18, 22, 19, 24, 8, 22],
        backgroundColor: [
          "#a78bfa",
          "#bbf7d0",
          "#111827",
          "#7dd3fc",
          "#a5b4fc",
          "#bbf7d0",
        ],
        borderRadius: 4,
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 30,
        ticks: {
          stepSize: 10,
          callback: (value) => `${value}M`,
          color: "#9ca3af",
          padding: 10,
        },
        grid: {
          color: "#e5e7eb",
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9ca3af",
          padding: 10,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="font-medium text-gray-800">Traffic by Device</h3>
      <div className="mt-4" style={{ height: "220px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
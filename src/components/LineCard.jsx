// src/components/LineCard.jsx
import { Line } from "react-chartjs-2";

export default function LineCard() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "This year",
        data: [12, 8, 8.5, 10, 16, 18, 20],
        borderColor: "#111827",
        tension: 0.4,
        pointRadius: 0,
        pointBackgroundColor: 'white',
        pointBorderColor: '#a78bfa',
        pointBorderWidth: 2,
        // Corrected line with a check for ctx.p0
        borderDash: (ctx) => (ctx.p0?.x > 300 ? [5, 5] : []),
      },
      {
        label: "Last year",
        data: [7, 12, 16, 14, 10, 15, 22],
        borderColor: "#a78bfa",
        tension: 0.4,
        pointRadius: (ctx) => (ctx.dataIndex === 2 ? 5 : 0),
        pointBackgroundColor: 'white',
        pointBorderColor: '#a78bfa',
        pointBorderWidth: 2,
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
      tooltip: {
        enabled: false,
        external: ({ chart, tooltip }) => {
          let tooltipEl = chart.canvas.parentNode.querySelector("div");

          if (tooltip.opacity === 0) {
            if (tooltipEl) tooltipEl.style.opacity = 0;
            return;
          }

          const { offsetLeft: chartLeft, offsetTop: chartTop } = chart.canvas;

          if (tooltip.body) {
            const dataPoint = tooltip.dataPoints[0];
            // Format number with commas
            const value = Number(dataPoint.raw * 1000000).toLocaleString();

            if (!tooltipEl) {
              tooltipEl = document.createElement("div");
              tooltipEl.style.background = "rgba(0, 0, 0, 0.8)";
              tooltipEl.style.color = "white";
              tooltipEl.style.borderRadius = "8px";
              tooltipEl.style.padding = "8px 12px";
              tooltipEl.style.position = "absolute";
              tooltipEl.style.pointerEvents = "none";
              tooltipEl.style.transform = "translate(-50%, -100%)";
              chart.canvas.parentNode.appendChild(tooltipEl);
            }

            tooltipEl.innerHTML = value;
            tooltipEl.style.opacity = 1;
            tooltipEl.style.left = chartLeft + tooltip.caretX + "px";
            tooltipEl.style.top = chartTop + tooltip.caretY - 10 + "px";
          }
        },
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
    <div className="col-span-2 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm">
          <span className="font-semibold text-gray-800">Total Users</span>
          <span className="text-gray-500">Total Projects</span>
          <span className="text-gray-500">Operating Status</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span>This year</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-300"></span>
            <span>Last year</span>
          </div>
        </div>
      </div>
      <div className="mt-4" style={{ height: "300px", position: "relative" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
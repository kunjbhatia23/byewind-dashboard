import {
  BellIcon, MagnifyingGlassIcon, Cog6ToothIcon,
  ChevronDownIcon, QuestionMarkCircleIcon
} from "@heroicons/react/24/outline";
import Sidebar from "./components/Sidebar.jsx";
import StatCard from "./components/StatCard.jsx";
import LineCard from "./components/LineCard.jsx";
import BarCard from "./components/BarCard.jsx";
import DonutCard from "./components/DonutCard.jsx";
import TrafficList from "./components/TrafficList.jsx";
import RightRail from "./components/RightRail.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          {/* Topbar */}
          <header className="sticky top-0 z-20 bg-bg/60 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
            <div className="flex items-center justify-between px-6 h-16 border-b border-ring">
              <div className="flex items-center gap-2 text-sm text-muted">
                <span className="font-medium text-ink">Dashboards</span>
                <span>/</span>
                <span className="text-muted">Default</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 bg-card border border-ring rounded-xl2 px-3 h-10 w-72">
                  <MagnifyingGlassIcon className="w-5 h-5 text-muted" />
                  <input
                    placeholder="Search"
                    className="w-full outline-none text-sm bg-transparent"
                  />
                </div>
                <QuestionMarkCircleIcon className="w-6 h-6 text-muted" />
                <Cog6ToothIcon className="w-6 h-6 text-muted" />
                <BellIcon className="w-6 h-6 text-muted" />
                <div className="w-8 h-8 rounded-full bg-gray-300" />
              </div>
            </div>
          </header>

          <div className="px-6 py-6 grid grid-cols-12 gap-6">
            {/* Stat cards */}
            <div className="col-span-12 grid md:grid-cols-4 gap-6">
              <StatCard title="Views" value="721K" delta="+11.02%" up />
              <StatCard title="Visits" value="367K" delta="-0.03%" />
              <StatCard title="New Users" value="1,156" delta="+15.03%" up />
              <StatCard title="Active Users" value="239K" delta="+6.08%" up />
            </div>

            {/* Main content */}
            <div className="col-span-12 lg:col-span-8 grid gap-6">
              <LineCard />
              <div className="grid md:grid-cols-2 gap-6">
                <BarCard />
                <DonutCard />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Marketing & SEO placeholder to match bottom spacing in screenshot */}
                <div className="bg-card rounded-xl2 border border-ring shadow-soft h-64 p-4">
                  <h3 className="font-medium">Marketing & SEO</h3>
                  <p className="text-sm text-muted mt-2">
                    Add your content here (table, chart, or KPIs).
                  </p>
                </div>
                <div className="bg-card rounded-xl2 border border-ring shadow-soft h-64 p-4">
                  <h3 className="font-medium">Projects</h3>
                  <p className="text-sm text-muted mt-2">
                    Placeholder card for parity with the reference UI.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="col-span-12 lg:col-span-4 grid gap-6">
              <TrafficList />
              <RightRail />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
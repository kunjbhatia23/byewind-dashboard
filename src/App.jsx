import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import RightRail from "./components/RightRail";

export default function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen text-gray-800">
      <Sidebar />
      <div className="flex flex-1">
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-6">
            <Dashboard />
          </main>
        </div>
        <RightRail />
      </div>
    </div>
  );
}

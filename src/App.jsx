// src/App.jsx
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import RightRail from "./components/RightRail";

export default function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 flex gap-6">
          <Dashboard />
          <RightRail />
        </main>
      </div>
    </div>
  );
}
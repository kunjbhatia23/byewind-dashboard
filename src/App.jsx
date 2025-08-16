// src/App.jsx
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import RightRail from "./components/RightRail";

export default function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen text-gray-800">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex flex-1 p-6 gap-6">
          <Dashboard />
          <RightRail />
        </main>
      </div>
    </div>
  );
}
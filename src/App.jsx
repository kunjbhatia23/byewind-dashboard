import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Rightbar from "./components/Rightbar";

export default function App() {
  return (
    <div className="flex bg-gray-50 h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="p-6 flex gap-6">
          <Dashboard />
          <Rightbar />
        </main>
      </div>
    </div>
  );
}

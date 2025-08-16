import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { Rightbar } from "./components/Rightbar";

function App() {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Header />
        <Dashboard />
      </div>

      {/* Rightbar */}
      <Rightbar />
    </div>
  );
}

export default App;

import { HomeIcon, ChartPieIcon, UserIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r flex flex-col">
      <div className="px-6 py-4 font-bold text-xl">ByeWind</div>
      <nav className="flex-1 px-4 space-y-2 text-gray-700">
        <p className="text-xs uppercase text-gray-400 mt-4">Favorites</p>
        <div className="space-y-2">
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">Overview</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">Projects</a>
        </div>

        <p className="text-xs uppercase text-gray-400 mt-4">Dashboards</p>
        <div className="space-y-2">
          <a href="#" className="flex items-center gap-2 p-2 bg-gray-100 rounded font-medium"><ChartPieIcon className="h-5 w-5"/> Default</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">eCommerce</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">Projects</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">Online Courses</a>
        </div>

        <p className="text-xs uppercase text-gray-400 mt-4">Pages</p>
        <div className="space-y-2">
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"><UserIcon className="h-5 w-5"/> User Profile</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"><DocumentDuplicateIcon className="h-5 w-5"/> Account</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">Corporate</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">Blog</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">Social</a>
        </div>
      </nav>
      <div className="px-6 py-4 text-sm text-gray-400">snowui</div>
    </aside>
  );
}

// src/components/Header.jsx
import {
  StarIcon,
  MagnifyingGlassIcon,
  SunIcon,
  ClockIcon,
  BellIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex items-center h-16 bg-white border-b border-gray-200">
      {/* Sidebar Part */}
      <div className="w-64 px-6 font-bold text-xl flex-shrink-0">ByeWind</div>

      {/* Navbar Part */}
      <div className="flex-1 flex justify-between items-center px-6 border-l border-r border-gray-200">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <StarIcon className="h-5 w-5" />
          <span>/</span>
          <span>Dashboards</span>
          <span>/</span>
          <span className="text-gray-800 font-semibold">Default</span>
        </div>
        {/* Search & Icons */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-48 border-none rounded-lg text-sm bg-gray-100 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <SunIcon className="h-6 w-6 cursor-pointer" />
            <ClockIcon className="h-6 w-6 cursor-pointer" />
            <BellIcon className="h-6 w-6 cursor-pointer" />
            <Squares2X2Icon className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* RightRail Part */}
      <div className="w-80 px-6 font-medium text-gray-700 flex-shrink-0">
        Notifications
      </div>
    </header>
  );
}
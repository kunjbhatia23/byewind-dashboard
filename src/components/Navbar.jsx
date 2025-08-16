// src/components/Navbar.jsx
import {
  StarIcon,
  MagnifyingGlassIcon,
  SunIcon,
  ClockIcon,
  BellIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 h-16 border-b bg-white">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <StarIcon className="h-5 w-5" />
        <span>/</span>
        <span>Dashboards</span>
        <span>/</span>
        <span className="text-gray-800 font-semibold">Default</span>
      </div>

      {/* Search, Icons, and Notifications Button */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-48 border-none rounded-lg text-sm bg-gray-100 focus:outline-none"
          />
           <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs border border-gray-300 rounded-md px-1.5 py-0.5">⌘/</div>
        </div>
        <div className="flex items-center gap-4 text-gray-500">
          <SunIcon className="h-6 w-6 cursor-pointer" />
          <ClockIcon className="h-6 w-6 cursor-pointer" />
          <BellIcon className="h-6 w-6 cursor-pointer" />
          <Squares2X2Icon className="h-6 w-6 cursor-pointer" />
        </div>
        <button className="text-sm font-medium text-gray-700">Notifications</button>
      </div>
    </header>
  );
}
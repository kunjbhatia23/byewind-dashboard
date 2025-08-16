import { MagnifyingGlassIcon, BellIcon, Cog6ToothIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-white">
      <div className="text-gray-500">Dashboards / <span className="font-semibold text-gray-700">Default</span></div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-2 top-2 text-gray-400" />
          <input type="text" placeholder="Search" className="pl-8 pr-4 py-2 border rounded-md text-sm" />
        </div>
        <MoonIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
        <BellIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
        <Cog6ToothIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
        <img src="https://i.pravatar.cc/40" alt="profile" className="h-8 w-8 rounded-full" />
      </div>
    </header>
  );
}

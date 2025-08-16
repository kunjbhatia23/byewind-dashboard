import { FaSearch, FaBell, FaSun } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="text-sm text-gray-500">Dashboards / Default</div>
      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-500" />
        <FaSun className="text-gray-500" />
        <FaBell className="text-gray-500" />
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

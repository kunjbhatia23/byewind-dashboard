import { FaRegChartBar, FaUser, FaShoppingCart, FaBook, FaFileAlt, FaBlog, FaComments } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-4">
      <div className="text-2xl font-bold text-indigo-600 mb-6">ByeWind</div>

      <nav className="flex-1 space-y-2">
        <h2 className="text-xs uppercase text-gray-500">Dashboards</h2>
        <ul className="space-y-1">
          <li className="flex items-center p-2 rounded-md bg-indigo-100 text-indigo-600">
            <MdDashboard className="mr-2" /> Default
          </li>
          <li className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <FaShoppingCart className="mr-2" /> eCommerce
          </li>
          <li className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <FaBook className="mr-2" /> Online Courses
          </li>
        </ul>

        <h2 className="text-xs uppercase text-gray-500 mt-4">Pages</h2>
        <ul className="space-y-1">
          <li className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <FaUser className="mr-2" /> User Profile
          </li>
          <li className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <FaFileAlt className="mr-2" /> Documents
          </li>
          <li className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <FaBlog className="mr-2" /> Blog
          </li>
          <li className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <FaComments className="mr-2" /> Social
          </li>
        </ul>
      </nav>
    </aside>
  );
};

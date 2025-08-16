// src/components/Sidebar.jsx
import { useState } from "react";
import {
  ChartPieIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  FolderIcon,
  BookOpenIcon,
  UserIcon,
  IdentificationIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

// --- Navigation Data ---
const favorites = [
  { name: "Overview" },
  { name: "Projects" },
];

const dashboards = [
  { name: "Default", icon: ChartPieIcon, active: true },
  { name: "eCommerce", icon: EnvelopeIcon, hasSubmenu: true },
  { name: "Projects", icon: FolderIcon, hasSubmenu: true },
  { name: "Online Courses", icon: BookOpenIcon, hasSubmenu: true },
];

const pages = [
  {
    name: "User Profile",
    icon: UserIcon,
    submenu: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
  },
  { name: "Account", icon: IdentificationIcon, hasSubmenu: true },
  { name: "Corporate", icon: UsersIcon, hasSubmenu: true },
  { name: "Blog", icon: ClipboardDocumentListIcon, hasSubmenu: true },
  { name: "Social", icon: ChatBubbleLeftRightIcon, hasSubmenu: true },
];

// --- Helper Component for Nav Items ---
function NavItem({ item, children }) {
  const Icon = item.icon;
  const isActive = item.active;

  return (
    <div>
      <a
        href="#"
        className={clsx(
          "flex items-center gap-3 p-2 rounded-md font-semibold",
          isActive
            ? "bg-gray-100 text-gray-900"
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        )}
      >
        {Icon && (
           <span className={clsx(
               "w-6 h-6 rounded-md flex items-center justify-center",
               isActive && "bg-black"
            )}>
               <Icon className={clsx("h-4 w-4", isActive ? "text-white" : "text-gray-400")} />
           </span>
        )}
        <span className="flex-1">{item.name}</span>
        {item.hasSubmenu && <ChevronRightIcon className="h-4 w-4 text-gray-400" />}
      </a>
      {children}
    </div>
  );
}


// --- Main Sidebar Component ---
export default function Sidebar() {
    const [openMenus, setOpenMenus] = useState({ "User Profile": true });

    const toggleMenu = (name) => {
        setOpenMenus(prev => ({ ...prev, [name]: !prev[name] }));
    };

  return (
    <aside className="hidden md:flex w-64 bg-white border-r flex-col flex-shrink-0">
      {/* Sidebar Header */}
      <div className="px-6 h-16 flex items-center font-bold text-xl border-b border-gray-200">
        ByeWind
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-6 text-sm">
        {/* Favorites */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <a href="#" className="font-semibold text-gray-800">Favorites</a>
            <a href="#" className="text-gray-400 hover:text-gray-600">Recently</a>
          </div>
          <ul className="space-y-2 text-gray-600 font-medium">
            {favorites.map((item) => (
              <li key={item.name} className="flex items-center gap-3 pl-2">
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                <a href="#" className="hover:text-gray-900">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Dashboards */}
        <div>
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Dashboards</h3>
          <div className="space-y-1">
            {dashboards.map((item) => <NavItem key={item.name} item={item} />)}
          </div>
        </div>

        {/* Pages */}
        <div>
           <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Pages</h3>
           <div className="space-y-1">
            {pages.map((item) => (
                 <div key={item.name}>
                    <a href="#"
                       onClick={() => item.submenu && toggleMenu(item.name)}
                       className="flex items-center gap-3 p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium">
                       {item.icon && <item.icon className="h-6 w-6 text-gray-400" />}
                       <span className="flex-1">{item.name}</span>
                       {item.submenu &&
                           <ChevronRightIcon className={clsx("h-4 w-4 text-gray-400 transition-transform", openMenus[item.name] && "rotate-90")} />
                       }
                    </a>
                    {item.submenu && openMenus[item.name] && (
                        <div className="pl-9 space-y-1 text-gray-500 font-medium pt-1">
                            {item.submenu.map(sub => (
                                <a href="#" key={sub} className="block py-1 hover:text-gray-900">{sub}</a>
                            ))}
                        </div>
                    )}
                 </div>
            ))}
           </div>
        </div>
      </nav>
    </aside>
  );
}
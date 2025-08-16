import { useState } from "react";
import {
  Squares2X2Icon, ShoppingBagIcon, FolderIcon, PlayCircleIcon,
  UserCircleIcon, Cog6ToothIcon, BuildingOffice2Icon,
  PencilSquareIcon, ChatBubbleLeftRightIcon, ShareIcon
} from "@heroicons/react/24/outline";
import clsx from "clsx";

const NavItem = ({ icon: Icon, label, active }) => (
  <button
    className={clsx(
      "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm",
      active
        ? "bg-ink text-white"
        : "text-ink hover:bg-gray-100"
    )}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </button>
);

export default function Sidebar() {
  const [open] = useState(true);
  return (
    <aside
      className={clsx(
        "hidden md:flex flex-col shrink-0 border-r border-ring bg-card",
        open ? "w-64" : "w-16"
      )}
      style={{ minHeight: "100vh" }}
    >
      <div className="h-16 flex items-center gap-2 px-4 border-b border-ring">
        <div className="w-8 h-8 rounded-full bg-indigo-600" />
        <div className="font-semibold">ByeWind</div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-6">
        <div>
          <div className="px-3 text-xs uppercase tracking-wider text-muted mb-2">
            Dashboards
          </div>
          <NavItem icon={Squares2X2Icon} label="Default" active />
          <NavItem icon={ShoppingBagIcon} label="eCommerce" />
          <NavItem icon={FolderIcon} label="Projects" />
          <NavItem icon={PlayCircleIcon} label="Online Courses" />
        </div>

        <div>
          <div className="px-3 text-xs uppercase tracking-wider text-muted mb-2">
            Pages
          </div>
          <NavItem icon={UserCircleIcon} label="User Profile" />
          <NavItem icon={BuildingOffice2Icon} label="Account" />
          <NavItem icon={Cog6ToothIcon} label="Corporate" />
          <NavItem icon={PencilSquareIcon} label="Blog" />
          <NavItem icon={ShareIcon} label="Social" />
        </div>
      </div>

      <div className="p-4 mt-auto">
        <div className="text-xs text-muted">© snowui</div>
      </div>
    </aside>
  );
}
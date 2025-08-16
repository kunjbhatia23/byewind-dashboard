// src/components/RightRail.jsx
import {
  BugAntIcon,
  UserPlusIcon,
  RssIcon,
} from "@heroicons/react/24/solid";

export default function RightRail() {
  const notifications = [
    { text: "You fixed a bug.", time: "Just now", icon: BugAntIcon },
    { text: "New user registered.", time: "59 minutes ago", icon: UserPlusIcon },
    { text: "You fixed a bug.", time: "12 hours ago", icon: BugAntIcon },
    { text: "Andi Lane subscribed to you.", time: "Today, 11:59 AM", icon: RssIcon },
  ];

  const activities = [
    { text: "Changed the style.", time: "Just now", avatar: "https://i.pravatar.cc/40?img=1" },
    { text: "Released a new version.", time: "59 minutes ago", avatar: "https://i.pravatar.cc/40?img=2" },
    { text: "Submitted a bug.", time: "12 hours ago", avatar: "https://i.pravatar.cc/40?img=3" },
    { text: "Modified A data in Page X.", time: "Today, 11:59 AM", avatar: "https://i.pravatar.cc/40?img=4" },
    { text: "Deleted a page in Project X.", time: "Feb 2, 2025", avatar: "https://i.pravatar.cc/40?img=5" },
  ];

  const contacts = [
    { name: "Natali Craig", avatar: "https://i.pravatar.cc/40?img=11" },
    { name: "Drew Cano", avatar: "https://i.pravatar.cc/40?img=12" },
    { name: "Andi Lane", avatar: "https://i.pravatar.cc/40?img=13" },
    { name: "Koray Okumus", avatar: "https://i.pravatar.cc/40?img=14" },
    { name: "Kate Morrison", avatar: "https://i.pravatar.cc/40?img=15" },
    { name: "Melody Macy", avatar: "https://i.pravatar.cc/40?img=16" },
  ];

  return (
    <aside className="w-80 bg-white p-6 space-y-8 border-l border-gray-200">
      {/* Notifications List */}
      <ul className="space-y-4">
        {notifications.map((n, i) => {
          const Icon = n.icon;
          return (
            <li key={i} className="flex items-start gap-3">
              <div className="bg-blue-50 p-1.5 rounded-full">
                <Icon className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <div className="text-sm text-gray-700">{n.text}</div>
                <div className="text-xs text-gray-500">{n.time}</div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Activities */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Activities</h3>
        <ul className="mt-4 space-y-4">
          {activities.map((a, i) => (
            <li key={i} className="flex items-start gap-3">
              <img src={a.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
              <div>
                <div className="text-sm text-gray-700">{a.text}</div>
                <div className="text-xs text-gray-500">{a.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacts */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Contacts</h3>
        <ul className="mt-4 space-y-3">
          {contacts.map((c, i) => (
            <li key={i} className="flex items-center gap-3">
              <img src={c.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
              <div className="text-sm font-medium text-gray-700">{c.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
// src/components/RightRail.jsx
import {
  BugAntIcon,
  UserPlusIcon,
  RssIcon,
} from "@heroicons/react/24/outline";

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
    <aside className="w-80 bg-white p-6 border-l border-gray-200 flex-shrink-0 hidden lg:block">
      <div className="space-y-8">
        {/* Header */}
        <h2 className="text-base font-semibold text-gray-800">Notifications</h2>

        {/* Notifications List */}
        <div>
          <ul className="space-y-4">
            {notifications.map((n, i) => {
              const Icon = n.icon;
              return (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-800 font-medium">{n.text}</p>
                    <p className="text-xs text-gray-500">{n.time}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Activities */}
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Activities</h3>
          <ul className="mt-4">
            {activities.map((a, i) => (
              <li key={i} className="relative flex items-start gap-4 pb-6">
                {i < activities.length - 1 && (
                  <div className="absolute left-4 top-5 w-px h-full bg-gray-200"></div>
                )}
                <img src={a.avatar} alt="avatar" className="relative w-8 h-8 rounded-full border-2 border-white" />
                <div>
                  <p className="text-sm text-gray-800 font-medium">{a.text}</p>
                  <p className="text-xs text-gray-500">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contacts */}
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Contacts</h3>
          <ul className="mt-4 space-y-2">
            {contacts.map((c, i) => (
              <li key={i} className="flex items-center gap-3 p-1 rounded-lg hover:bg-gray-100 cursor-pointer">
                <img src={c.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                <span className="text-sm font-medium text-gray-800">{c.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
// src/components/RightRail.jsx
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Section = ({ title, children }) => (
  <section className="bg-white rounded-xl border border-gray-200 p-6">
    <h3 className="font-medium text-gray-800">{title}</h3>
    <div className="mt-4">{children}</div>
  </section>
);

export default function RightRail() {
  const notifications = [
    { text: "You fixed a bug.", time: "Just now" },
    { text: "New user registered.", time: "59 minutes ago" },
    { text: "You fixed a bug.", time: "12 hours ago" },
    { text: "Andi Lane subscribed to you.", time: "Today, 11:59 AM" },
  ];
  const activities = [
    { text: "Changed the style.", time: "Just now" },
    { text: "Released a new version.", time: "59 minutes ago" },
    { text: "Submitted a bug.", time: "12 hours ago" },
    { text: "Modified A data in Page X.", time: "Today, 11:59 AM" },
    { text: "Deleted a page in Project X.", time: "Feb 2, 2025" },
  ];
  const contacts = [
    "Natali Craig","Drew Cano","Andi Lane","Koray Okumus","Kate Morrison","Melody Macy"
  ];

  return (
    <aside className="w-80 space-y-6">
      <Section title="Notifications">
        <ul className="space-y-4">
          {notifications.map((n,i)=>(
            <li key={i} className="flex items-start gap-3">
              <CheckCircleIcon className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <div className="text-sm text-gray-700">{n.text}</div>
                <div className="text-xs text-gray-500">{n.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Activities">
        <ul className="space-y-4">
          {activities.map((a,i)=>(
            <li key={i} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100" />
              <div>
                <div className="text-sm text-gray-700">{a.text}</div>
                <div className="text-xs text-gray-500">{a.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Contacts">
        <ul className="space-y-3">
          {contacts.map((c,i)=>(
            <li key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100" />
              <div className="text-sm font-medium text-gray-700">{c}</div>
            </li>
          ))}
        </ul>
      </Section>
    </aside>
  );
}
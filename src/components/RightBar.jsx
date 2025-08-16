export default function Rightbar() {
  return (
    <aside className="w-72 space-y-6">
      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-medium mb-2">Notifications</h3>
        <ul className="text-sm space-y-2 text-gray-600">
          <li>You fixed a bug. <span className="text-gray-400">Just now</span></li>
          <li>New user registered. <span className="text-gray-400">59m ago</span></li>
          <li>You fixed a bug. <span className="text-gray-400">12h ago</span></li>
        </ul>
      </div>

      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-medium mb-2">Activities</h3>
        <ul className="text-sm space-y-2 text-gray-600">
          <li>Changed the style. <span className="text-gray-400">Just now</span></li>
          <li>Released a new version. <span className="text-gray-400">59m ago</span></li>
          <li>Submitted a bug. <span className="text-gray-400">12h ago</span></li>
        </ul>
      </div>

      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-medium mb-2">Contacts</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2"><img src="https://i.pravatar.cc/32?img=1" className="rounded-full"/> Natali Craig</li>
          <li className="flex items-center gap-2"><img src="https://i.pravatar.cc/32?img=2" className="rounded-full"/> Drew Cano</li>
          <li className="flex items-center gap-2"><img src="https://i.pravatar.cc/32?img=3" className="rounded-full"/> Andi Lane</li>
        </ul>
      </div>
    </aside>
  );
}

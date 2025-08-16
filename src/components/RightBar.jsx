export const Rightbar = () => {
  return (
    <aside className="w-80 bg-white border-l border-gray-200 p-4 overflow-y-auto">
      <h3 className="font-medium mb-4">Notifications</h3>
      <ul className="space-y-2 mb-6">
        <li>You fixed a bug. <span className="text-gray-400 text-sm">Just now</span></li>
        <li>New user registered. <span className="text-gray-400 text-sm">59m ago</span></li>
        <li>Andi Lane subscribed to you. <span className="text-gray-400 text-sm">Today</span></li>
      </ul>

      <h3 className="font-medium mb-4">Activities</h3>
      <ul className="space-y-2 mb-6">
        <li>Changed the style. <span className="text-gray-400 text-sm">Just now</span></li>
        <li>Released a new version. <span className="text-gray-400 text-sm">59m ago</span></li>
      </ul>

      <h3 className="font-medium mb-4">Contacts</h3>
      <ul className="space-y-2">
        {["Natali Craig", "Drew Cano", "Andi Lane", "Koray Okumus"].map((name, i) => (
          <li key={i} className="flex items-center space-x-2">
            <img src={`https://i.pravatar.cc/150?img=${i + 1}`} alt="" className="w-8 h-8 rounded-full" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

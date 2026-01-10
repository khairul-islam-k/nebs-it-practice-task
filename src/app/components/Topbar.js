import { Menu } from "lucide-react";

export default function Topbar({ toggle }) {
  return (
    <div className="h-14 bg-white shadow flex items-center px-4 md:hidden">
      <h1 className="text-lg font-bold flex-1">Dashboard</h1>
      <button onClick={toggle}>
        <Menu size={24} />
      </button>
    </div>
  );
}

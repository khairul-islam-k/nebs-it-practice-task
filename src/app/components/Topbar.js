import { Bell, Menu } from "lucide-react";
import Image from "next/image";

export default function Topbar({ toggle }) {
  return (
    <div className="bg-white shadow flex justify-between items-center py-2 px-4 md:hidden">
      <div>
        <h3 className="text-[16px] font-medium">Good Afternoon Asif</h3>
        <p className="text-[14px]">13 June, 2026</p>
      </div>

      <div className="flex items-center gap-2">
        <Bell />
        <h3>|</h3>
        <div>
          <h3 className="text-[16px] font-medium">Asif Riaj</h3>
          <p className="text-[14px]">Hr</p>
        </div>
        <Image src="/github-logo.jpeg" width={30} height={30} alt="profile" 
        className='rounded-full' />
        <button onClick={toggle}>
          <Menu size={24} />
        </button>
      </div>
    </div>
  );
}

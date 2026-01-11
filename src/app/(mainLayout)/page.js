import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, Pencil } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      {/* Notice button */}
      <div className="flex justify-between items-center">

        <div>
          <h3 className="text-xl font-medium">Notice Management</h3>
          <div className="flex flex-col md:flex-row gap-1">
            <span className='text-[#00A46E]'>Active Notices: 8 |</span>
            <span className="text-[#FFA307]"> Draft Notice: 04</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <Button className="bg-[#F95524] hover:bg-amber-500 cursor-pointer">+ Create Notice</Button>
          <Button className="bg-gray-200 border border-[#F95524] text-[#F95524] hover:bg-gray-300 cursor-pointer"><Pencil /> All Draft Notice</Button>
        </div>

      </div>

      {/* Filter button */}
      <div className="flex justify-end gap-3 items-center flex-wrap my-10">
        <h3>Filter by :</h3>
        <Button className="bg-gray-200 text-gray-500 border border-gray-500 hover:bg-gray-300">Departments or individuals <ChevronDown /></Button>
        <Button className="bg-gray-200 text-gray-500 border border-gray-500 hover:bg-gray-300">Employee Id or Name</Button>
        <Button className="bg-gray-200 text-gray-500 border border-gray-500 hover:bg-gray-300">Status <ChevronDown /></Button>
        <Button className="bg-gray-200 text-gray-500 border border-gray-500 hover:bg-gray-300">Published on <Calendar /></Button>
        <Button className="bg-gray-200 text-gray-500 border border-gray-500 hover:bg-gray-300">Reset Filters</Button>
      </div>

    </div>
  );
}

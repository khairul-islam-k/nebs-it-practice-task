"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Package,
  Users,
  Truck,
  ChevronDown,
} from "lucide-react";

export default function Sidebar({ close }) {
  const [openOrders, setOpenOrders] = useState(false);

  const menu = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Employee",
      icon: Users,
      children: [
        { name: "Employee Database", href: "/employ" },
        { name: "Add New Employee", href: "/addEmployee" },
        { name: "Performance Report", href: "/performanceReport" },
        { name: "Performance History", href: "/performanceHistory" },
      ],
    },
    {
      name: "Riders",
      href: "/riders",
      icon: Truck,
    },
    {
      name: "Users",
      href: "/users",
      icon: Users,
    },
  ];

  return (
    <div className="h-full w-64 bg-white shadow px-4 pb-4">
      <div className="h-20 flex justify-center items-center">
        <Image src="/Logo.png" width={160} height={28} alt="logo" />
      </div>

      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          // Normal Link
          if (!item.children) {
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={close}
                className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          }

          // Nested Menu (Orders)
          return (
            <div key={item.name}>
              <button
                onClick={() => setOpenOrders(!openOrders)}
                className="w-full flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              >
                <Icon size={20} />
                <span className="flex-1 text-left font-medium">
                  {item.name}
                </span>
                <ChevronDown
                  size={18}
                  className={`transition ${
                    openOrders ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openOrders && (
                <div className="ml-9 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={close}
                      className="block p-2 rounded-md font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

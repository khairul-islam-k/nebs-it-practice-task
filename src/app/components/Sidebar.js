import Link from "next/link";
import { LayoutDashboard, Package, Users, Truck } from "lucide-react";

export default function Sidebar({ close }) {
    const menu = [
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Orders",
            href: "/dashboard/orders",
            icon: Package,
        },
        {
            name: "Riders",
            href: "/dashboard/riders",
            icon: Truck,
        },
        {
            name: "Users",
            href: "/dashboard/users",
            icon: Users,
        },
    ];

    return (
        <div className="h-full w-64 bg-white shadow p-4">
            <h2 className="text-xl font-bold mb-6">My App</h2>

            <nav className="space-y-2">
                {menu.map((item) => {
                    const Icon = item.icon;
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
                })}
            </nav>

        </div>
    );
}

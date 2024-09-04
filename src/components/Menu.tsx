"use client";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/admin",
        visible: ["admin", "remb", "oimb", "epap", "sra"],
      },
      {
        icon: "/user.png",
        label: "Users",
        href: "/list/users",
        visible: ["admin"],
      },
      {
        icon: "/student.png",
        label: "Products",
        href: "/list/products",
        visible: ["admin", "remb", "oimb", "epap", "sra"],
      },
      {
        icon: "/subject.png",
        label: "Forms",
        href: "/list/forms",
        visible: ["admin", "remb", "oimb", "epap", "sra"],
      },
      {
        icon: "/class.png",
        label: "Bid Management",
        href: "/list/bid",
        visible: ["admin", "remb", "oimb", "epap", "sra"],
      },
      {
        icon: "/parent.png",
        label: "Transactions",
        href: "",
        visible: ["admin", "remb", "oimb", "epap", "sra"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "",
        visible: ["admin", "remb", "oimb", "epap", "sra"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "",
        visible: ["admin", "remb", "oimb", "epap", "sra"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "",
        visible: ["admin", "remb", "oimb", "epap", "sra"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "",
        visible: ["admin", "remb", "oimb", "epap", "sra"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "",
        visible: ["admin", "remb", "oimb", "epap", "sra"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "",
        visible: ["admin", "remb", "oimb", "epap", "sra"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "",
        visible: ["admin", "remb", "oimb", "epap", "sra"],
      },
    ],
  },
];

const Menu = () => {
  const pathname = usePathname();
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className={`flex items-center justify-center lg:justify-start gap-4 py-2 rounded-md md:px-2 hover:bg-lamaSkyLight 
                  ${
                    pathname === item.href
                      ? "text-blue-500 bg-lamaSkyLight"
                      : "text-gray-500"
                  }`}
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;

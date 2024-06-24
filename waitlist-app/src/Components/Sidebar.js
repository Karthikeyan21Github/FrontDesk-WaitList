"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Toggle from "../app/constants/Icons/Toggle";
import Logo from "../app/constants/Icons/Logo";
import {
  Orders,
  Waitlist,
  Calendar,
  Subscriptions,
  DashBoard,
  Link,
} from "../app/constants/Icons/SidebarIcons";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const path = usePathname();
  const list = [
    { icon: <Orders />, text: "Orders", link: "/orders" },
    { icon: <Subscriptions />, text: "Subscriptions", link: "/subscriptions" },
    { icon: <Calendar />, text: "Calendar", link: "/calendar" },
    { icon: <Waitlist />, text: "Waitlist", link: "/waitlist" },
  ];

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = navigator?.userAgentData?.mobile;
      setIsMobile(!isMobileDevice);
    };
    if (typeof window !== "undefined") {
      checkMobile();
    }
  }, []);

  return (
    <aside className="h-screen">
      <nav className="h-full bg-[#F8FAFC] flex flex-col border-r shadow-sm">
        <div className={`p-4 pb-2 ms-1.5 flex justify-between items-center`}>
          <span
            className="pt-2 pb-2 cursor-pointer"
            onClick={() => setExpanded(true)}
          >
            <Logo />
          </span>
          <span
            className={`font-semibold text-xl overflow-hidden transition-all ${
              expanded ? "w-40 ml-3" : "w-0"
            }`}
          >
            Front-Desk
          </span>
          {expanded && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="p-1.5 rounded-lg hover:bg-gray-100"
            >
              <Toggle />
            </button>
          )}
        </div>
        <ul className="flex-1 px-3">
          {list.map((obj, index) => (
            <SidebarItem
              key={index}
              icon={obj.icon}
              text={obj.text}
              expanded={expanded}
              link={obj.link}
              active={obj.link.includes(path)}
            />
          ))}
        </ul>
        <div
          className={`${
            expanded ? "ps-5" : "ps-6"
          } cursor-pointer flex p-3 w-full`}
        >
          <DashBoard />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-48 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4 flex justify-between w-full">
              <span className="text-xs text-gray-600">DashBoard</span>
              <a target="_blank" src="/dashBoard">
                <Link />
              </a>
            </div>
          </div>
        </div>
        <div
          className={`flex ${
            expanded ? "bg-white m-2 p-2" : "p-3"
          } rounded-lg  cursor-pointer`}
        >
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${
                expanded ? "w-40 ml-3 bg-white" : "w-0"
              }
          `}
          >
            <div className="leading-4">
              <h4 className="font-medium text-sm">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <svg
              className={`w-4 h-4 text-gray-700 transition-transform transform`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#71717A"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div
          className={`${
            expanded ? " ms-3 items-center" : "ps-6 pb-0 h-[50px]"
          } flex p-3 w-full  cursor-pointer`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_12438)">
              <path
                d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z"
                stroke="#475569"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.05994 6.00014C6.21667 5.55458 6.52604 5.17887 6.93324 4.93956C7.34044 4.70024 7.8192 4.61276 8.28472 4.69261C8.75024 4.77246 9.17248 5.01449 9.47665 5.37582C9.78083 5.73716 9.94731 6.19448 9.9466 6.6668C9.9466 8.00014 7.9466 8.6668 7.9466 8.6668"
                stroke="#475569"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 11.3333H8.00667"
                stroke="#475569"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_12438">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div
            className={`
              flex justify-between items-center cursor-pointer
              overflow-hidden transition-all ${expanded ? "w-40 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4 ms-2">
              <h4 className="font-medium text-sm">Help Center</h4>
              <span className="text-xs text-gray-600">@2024 Omnify.Inc. </span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, expanded, link }) {
  return (
    <li
      onClick={() => {
        window.location.href = link;
      }}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer text-sm
        transition-colors group
        ${active ? "bg-white" : "hover:bg-indigo-50 text-gray-600"}
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-40 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}

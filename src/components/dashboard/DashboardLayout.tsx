"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import Hamburger from "./Hamburger";
import SideBar from "./SideBar";
import { defaultUser } from "@/lib/data";
import { ChartArea, FileQuestion } from "lucide-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement)

  useEffect(() => {
    if (typeof document === "undefined") return; // Prevents server-side execution
  
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    <ChartArea />
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const navLink = [
    { name: "Dashboard", href: "/admin", icon: MdOutlineDashboard },
    { name: "Quiz", href: "/admin/create-quiz", icon: FileQuestion },
    // { name: "Analytics", href: "/admin/analytics", icon: ChartArea },
  ];

  return (
    <div className="flex ">
      <div className="max-h-screen h-full sticky top-0 z-50">
        <SideBar
          navLink={navLink}
          isOpen={isOpen}
          user={defaultUser}
          navRef={navRef}
        />
      </div>
      <div className="w-full">
        <div className="sticky top-[3px] z-40">
          <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <div className="min-h-screen p-4 py-10 lg:p-10">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
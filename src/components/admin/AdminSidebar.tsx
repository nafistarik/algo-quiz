// components/admin/AdminSidebar.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  PlusCircle,
  BarChart2,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";
import logo from "@/assets/images/home/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function AdminSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    router.push("/");
  };

  const isActive = (path: string) => {
    return pathname?.startsWith(path);
  };

  return (
    <>
      <div className="flex items-center gap-2 mb-10">
        <Link href="/" onClick={onNavigate}>
          <Image
            src={logo}
            width={1000}
            height={1000}
            alt="Quiz logo"
            className="h-10 w-auto"
          />
        </Link>
      </div>

      <nav className="space-y-2">
        <Button
          variant={isActive("/admin/dashboard") ? "default" : "ghost"}
          className="w-full justify-start"
          asChild
        >
          <Link href="/admin/dashboard" onClick={onNavigate}>
            <LayoutDashboard className="mr-2 h-5 w-5" />
            Dashboard
          </Link>
        </Button>
        <Button
          variant={isActive("/admin/dashboard/create-quiz") ? "default" : "ghost"}
          className="w-full justify-start"
          asChild
        >
          <Link href="/admin/dashboard/create-quiz" onClick={onNavigate}>
            <PlusCircle className="mr-2 h-5 w-5" />
            Create Quiz
          </Link>
        </Button>
        <Button
          variant={isActive("/admin/dashboard/analytics") ? "default" : "ghost"}
          className="w-full justify-start"
          asChild
        >
          <Link href="/admin/dashboard/analytics" onClick={onNavigate}>
            <BarChart2 className="mr-2 h-5 w-5" />
            Analytics
          </Link>
        </Button>
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <Button variant="outline" className="w-full" onClick={handleLogout}>
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </Button>
      </div>
    </>
  );
}
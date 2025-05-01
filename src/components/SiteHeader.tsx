"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ModeToggle";
import logo from "@/assets/images/home/logo.png";
import logoMobile from "@/assets/images/home/logoMobile.png";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeUser, selectUser } from "@/redux/slice/userSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function SiteHeader() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogOut = () => {
    dispatch(removeUser());
    toast.success("Logout successfully");
    router.push("/login");
  };
  const user = useAppSelector(selectUser);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-borderColor backdrop-blur">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/">
          <Image
            src={logoMobile}
            width={1000}
            height={1000}
            alt="Quiz logo"
            className="sm:hidden h-14 w-auto"
          />
          <Image
            src={logo}
            width={1000}
            height={1000}
            alt="Quiz logo"
            className="hidden sm:block h-16 w-auto"
          />
        </Link>
        <div className="flex items-center gap-4">
          <ModeToggle />
          {user?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={user?.user?.avatar}
                      alt={user?.user?.full_name}
                    />
                    <AvatarFallback>
                      {user?.user?.full_name
                        .split(" ")
                        .slice(0, 2)
                        .map((n: string) => n[0])
                        .join("")
                        .toLocaleUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {user?.user?.role === "admin" ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/admin">Dashboard</Link>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={handleLogOut}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

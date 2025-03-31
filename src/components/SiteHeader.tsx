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
import { useState } from "react";
import { defaultUser } from "@/lib/data";
import { ModeToggle } from "./ModeToggle";
import logo from "@/assets/images/home/logo.png";
import logoMobile from "@/assets/images/home/logoMobile.png";
import Image from "next/image";

export function SiteHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const user = defaultUser;

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
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback>
                      {user?.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin">Admin Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                asChild
                onClick={() => setIsLoggedIn(true)}
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild onClick={() => setIsLoggedIn(true)}>
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

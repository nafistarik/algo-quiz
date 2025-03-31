/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import MainNavLink from "./MainNavLink";

export default function SideBar({
  user,
  navRef,
  isOpen,
  navLink,
}: {
  user: any;
  navRef: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  navLink: any;
}) {
  

  return (
    <div ref={navRef && navRef} className="min-h-screen h-full flex ">
      {/* Sidebar for small screens */}
      <div>
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-64 md:w-56 lg:w-72 shadow-2xl h-full transform transition-transform duration-300 ease-in-out ",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <MainNavLink
            navLink={navLink}
            user={user}
          />
        </div>
      </div>
      {/* Sidebar for large screens */}
      <div className="hidden lg:block lg:w-72 h-full">
        <MainNavLink
          navLink={navLink}
          user={user}
        />
      </div>
    </div>
  );
}
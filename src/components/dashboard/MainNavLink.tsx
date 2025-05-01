"use client";

// import { removeUser } from "@/redux/slice/userSlice";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { IoLogOutOutline } from "react-icons/io5";
// import { useDispatch } from "react-redux";
// import { toast } from "sonner";
import logo from "@/assets/images/home/logo.png";
// import { useAppDispatch } from "@/redux/hooks";
// import { removeUser } from "@/redux/slice/userSlice";
// import { toast } from "sonner";
export default function MainNavLink({
  navLink,
}: {
  user: { image?: string; name?: string; role?: string } | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navLink: any;
}) {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isActive = (href: any) => {
    const cleanHref = href.split("?")[0];
    const cleanPathname = pathname.split("?")[0];

    if (cleanHref === "/admin") {
      return cleanPathname === "/admin";
    }

    return cleanPathname.startsWith(cleanHref);
  };

  // const dispatch = useAppDispatch();
  // const router = useRouter();
  // const handleLogOut = () => {
  //   dispatch(removeUser());
  //   toast.success("Logout successfully");
  //   router.push("/login");
  // };

  return (
    <div className="flex flex-col min-h-screen py-6 relative bg-muted">
      <Link href="/" id="image" className=" flex gap-2 p-8 py-2">
        <Image
          src={logo}
          width={1000}
          height={1000}
          className="w-full h-auto"
          alt="logo"
        />
      </Link>
      <nav className="flex-1 p-4">
        <div className="space-y-3 px-4">
          {navLink?.map(
            (link: {
              name: string;
              href: string;
              icon: React.ComponentType<{ className?: string }>;
            }) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 font-normal text-base rounded-xl transition-all duration-150 ease-in ${
                  isActive(link.href)
                    ? "bg-primary text-white"
                    : "hover:bg-borderColor"
                }`}
              >
                <div className="rounded">
                  <link.icon className="min-w-6 min-h-6" />
                </div>
                {link.name}
              </Link>
            )
          )}
        </div>
      </nav>
      {/* <div className="mt-auto px-8 py-8 space-y-1">
        <button
          onClick={handleLogOut}
          className="flex items-center  gap-3 px-4 py-3 rounded-xl cursor-pointer text-foreground hover:text-primary transition-all duration-100 ease-in bg-primary w-full font-medium text-base"
        >
          <IoLogOutOutline className="min-w-6 min-h-6" />
          Log Out
        </button>
      </div> */}
    </div>
  );
}

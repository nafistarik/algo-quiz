"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/slice/userSlice";

export default function ProfileIntro() {
  const user = useAppSelector(selectUser);
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
          <AvatarImage src={user?.user?.avatar} alt={user?.user?.name} />
          <AvatarFallback className="text-xl sm:text-2xl">
            {user?.user?.full_name
              .split(" ")
              .slice(0, 2)
              .map((n: string) => n[0])
              .join("")
              .toLocaleUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            {user?.user?.full_name}
          </h1>
          <p className="text-muted-foreground">{user?.user?.email}</p>
        </div>
      </div>
    </div>
  );
}

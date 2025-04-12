import { RegisterForm } from "@/components/auth/RegisterForm";
import Image from "next/image";
import Link from "next/link";
import signin from "@/assets/images/auth/mobile-login-animate.svg";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background container">
      <main className="flex-1 flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <RegisterForm />
        </div>
        <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center p-10 relative">
          <div className="absolute top-4 right-4">
            <Link
              href="/"
              className="text-darkPrimary text-lg flex gap-1 hover:gap-2 transition-all duration-300"
            >
              <div className="font-bold">⬅️</div>
              <div>Back to Home</div>
            </Link>
          </div>
          <div className="max-w-md mx-auto text-center">
            <Image
              src={signin}
              width={300}
              height={300}
              alt="Quiz illustration"
              className="mx-auto w-full h-auto lg:max-w-lg xl:max-w-md"
            />
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Join Our Quiz Community
            </h2>
            <p className="text-muted-foreground">
              Create an account to track your progress, compete with friends,
              and climb the leaderboard.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

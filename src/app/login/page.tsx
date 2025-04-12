import { LoginForm } from "@/components/auth/LoginForm";
import Image from "next/image";
import Link from "next/link";
import login from "@/assets/images/auth/mobile-login-animate.svg";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background container">
      <main className="flex-1 flex">
        <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center p-10 relative">
          <div className="absolute top-4 left-4">
            <Link
              href="/"
              className="text-darkPrimary text-lg flex gap-1 hover:gap-2 transition-all duration-300"
            >
              <div className="font-bold">⬅️</div> <div>Back to Home</div>
            </Link>
          </div>
          <div className=" mx-auto text-center">
            <Image
              src={login}
              width={300}
              height={300}
              alt="Quiz illustration"
              className="mx-auto w-full h-auto lg:max-w-lg xl:max-w-md"
            />
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Test Your Knowledge
            </h2>
            <p className="text-muted-foreground">
              Join our community of quiz enthusiasts and challenge yourself with
              fun and educational quizzes.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <LoginForm />
        </div>
      </main>
    </div>
  );
}

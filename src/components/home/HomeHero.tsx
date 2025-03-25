import Image from "next/image";
import blue from "@/assets/images/home/blue.svg";
import red from "@/assets/images/home/red.svg";

export function HomeHero() {
  return (
    <div className="container">
      <div className="relative">
        <Image
          src={red}
          alt="My Logo"
          width={1000}
          height={1000}
          className="hidden xl:block z-0 w-auto h-[90%] absolute top-0 left-0 rotate-180"
        />
        <div className=" flex flex-col items-center text-center z-50 py-32 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="hidden sm:inline">🧠</span> AlgoQuiz!
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl">
            Master DSA with AlgoQuiz! Compete with friends, test your knowledge,
            and deepen your understanding through fun, interactive quizzes.
          </p>
        </div>
        <Image
          src={blue}
          alt="My Logo"
          width={1000}
          height={1000}
          className="hidden xl:block z-0 w-auto h-[90%] absolute right-0 bottom-0 "
        />
      </div>
    </div>
  );
}

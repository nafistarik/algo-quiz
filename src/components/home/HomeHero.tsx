export function HomeHero() {
  return (
    <div className="py-12">
      <div className="container flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to AlgoQuiz!
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Master DSA with AlgoQuiz! Compete with friends, test your knowledge,
          and deepen your understanding through fun, interactive quizzes.
        </p>
      </div>
    </div>
  );
}

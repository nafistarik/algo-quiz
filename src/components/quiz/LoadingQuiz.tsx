import { Skeleton } from "@/components/ui/skeleton"

export function LoadingQuiz() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-background">
      <div className="w-full md:w-80 bg-muted p-6 flex flex-col md:h-screen">
        <Skeleton className="h-8 w-40 mb-8" />
        <div className="space-y-6 flex-1">
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-2 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-2 w-full" />
          </div>
          <Skeleton className="h-40 w-full mt-6" />
        </div>
        <div className="mt-auto pt-6">
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="flex-1 p-6 md:p-10">
        <div className="max-w-3xl">
          <div className="mb-8">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-8 w-full mt-2" />
          </div>
          <Skeleton className="h-[300px] w-full rounded-xl" />
          <div className="flex justify-between mt-8">
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-10 w-28" />
          </div>
        </div>
      </div>
    </div>
  )
}


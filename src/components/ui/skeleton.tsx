import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-softPrimaryLight dark:bg-softPrimaryDark", className)}
      {...props}
    />
  )
}

export { Skeleton }

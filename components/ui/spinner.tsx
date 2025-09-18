import type React from "react"
import { cn } from "@/lib/utils"

interface SpinnerProps extends React.ComponentProps<"div"> {
  size?: "sm" | "md" | "lg"
}

function Spinner({ className, size = "md", ...props }: SpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-gray-300 border-t-orange-500",
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  )
}

export { Spinner }

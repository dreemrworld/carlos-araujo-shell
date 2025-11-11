"use client"

import { cn } from "@/lib/utils"

export function ExamplesNav({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // const pathname = usePathname()

  return (
    <div className={cn("flex items-center", className)} {...props}>
      <div className="flex items-center"></div>
    </div>
  )
}

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RotateCcw } from "lucide-react";
import type { ComponentProps } from "react";

interface RetryButtonProps
  extends Omit<ComponentProps<typeof Button>, "children" | "variant"> {
  label?: string;
}

export function RetryButton({
  label = "Reload Page",
  className,
  type = "button",
  ...props
}: RetryButtonProps) {
  return (
    <Button
      type={type}
      variant="outline"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full border-[var(--color-stanford-red)] px-5 sm:px-6 py-2.5 text-sm sm:text-base font-semibold text-[var(--color-stanford-red)] transition-all duration-200 hover:bg-[var(--color-stanford-red)] hover:text-white hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-stanford-red)]",
        className
      )}
      {...props}
    >
      <RotateCcw className="h-4 w-4 transition-transform group-hover:-rotate-12" />
      <span>{label}</span>
    </Button>
  );
}




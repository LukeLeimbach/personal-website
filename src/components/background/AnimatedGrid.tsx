import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "../magicui/interactive-grid-pattern";

export function AnimatedGrid() {
  return (
    <InteractiveGridPattern
      className={cn(
        "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        "inset-y-[-25%] skew-y-12"
      )}
    />
  );
}

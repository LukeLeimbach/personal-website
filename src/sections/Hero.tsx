import { AnimatedGrid } from "@/components/background/AnimatedGrid";
import { VideoText } from "@/components/magicui/video-text";
import { Button } from "@/components/ui/button";
import { ArrowBigDown, Mouse } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (textContainerRef.current) {
        textContainerRef.current.style.transform = `translateY(${
          scrollY * 0.33
        }px)`;
      }
      if (gridContainerRef.current) {
        gridContainerRef.current.style.transform = `translateY(${
          scrollY * .01
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="container mx-auto w-full h-screen">
      <div ref={gridContainerRef} className="w-fit h-full absolute -top-48 left-1/2 -translate-x-1/2">
        <AnimatedGrid />
      </div>
      <div
        ref={textContainerRef}
        className="pointer-events-none flex flex-col items-center justify-center relative w-full h-full"
      >
        <h2 className="mb-4 z-10 pointer-events-none">Hey, I'm</h2>
        <VideoText
          src="https://cdn.magicui.design/ocean-small.webm"
          className="text-wrap max-w-2/3 max-h-48 pointer-events-none z-10"
          as="h1"
        >
          Luke
        </VideoText>
        <h3 className="w-xl text-center !font-light -mt-4 z-10">
          I can make whatever I want, whenever I want - but only if I want to.
        </h3>
        <div className="w-full items-center justify-center flex gap-8 mt-8 pointer-events-auto z-10">
          <Button size="lg">Some shit I made</Button>
          <Button size="lg" variant="outline">
            Hire me or something
          </Button>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-2 animate-bounce z-10">
          <Mouse className="w-12 h-12" />
          <ArrowBigDown />
        </div>
      </div>
    </section>
  );
}

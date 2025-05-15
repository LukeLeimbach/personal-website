import { Hero } from "@/sections/Hero";
import { About } from "./sections/About";

function App() {
  return (
    <div className="container mx-auto w-full overflow-x-hidden flex flex-col items-start justify-center gap-8">
      <Hero />
      <About />
    </div>
  );
}

export default App

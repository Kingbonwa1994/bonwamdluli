import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <Hero />
    </main>
  );
}

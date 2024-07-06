import { FlipWordsDemo } from "@/components/FlipWordsDemo";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      {/* <FlipWordsDemo /> */}
      <Hero />
      <Footer />
    </main>
  );
}

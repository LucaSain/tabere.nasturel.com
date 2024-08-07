import { redirect } from "next/navigation";
import Hero from "../components/ui/Hero";
import Showcase from "../components/ui/Showcase";

export default function Home() {
  return (
    <main className="max-w-[100vw] overflow-hidden">
      <Hero />
      <Showcase />
    </main>
  );
}

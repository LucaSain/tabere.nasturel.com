import { redirect } from "next/navigation";
import Hero from "../components/ui/Hero";
import Showcase from "../components/ui/Showcase";

export default function Home() {
  redirect("/tabara-urbana-astra/inscriere");
  return (
    <main>
      <Hero />
      <Showcase />
    </main>
  );
}

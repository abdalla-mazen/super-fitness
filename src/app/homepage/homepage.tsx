import Hero from "@/components/layout/hero/hero";
import About from "@/components/shared/about";
import MealsSection from "@/components/shared/meals-section";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <MealsSection isHome={true} />
    </div>
  );
}

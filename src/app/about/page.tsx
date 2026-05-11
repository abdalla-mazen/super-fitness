import About from "@/components/shared/about";
import NavBar from "@/components/shared/nav-bar";

export default function AboutPage() {
  return (
    <div className="bg-[url(/assets/toWEBP/about.webp)] bg-cover bg-no-repeat w-full min-h-screen">
      <div className="bg-light/55 dark:bg-dark/60 backdrop-blur-[66px] text-dark dark:text-light">
        <NavBar />
      </div>

      <About />
    </div>
  );
}

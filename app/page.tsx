"use client";

import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Education from "./components/Educantion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Hero />
      <AboutMe/>
      <Projects/>
      <Education/>
    </main>
  );
}

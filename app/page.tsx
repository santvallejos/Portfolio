"use client";

import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Trajectory from "./components/Trajectory";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Hero />
      <AboutMe/>
      <Trajectory/>
      <Projects/>
      <Contact/>
    </main>
  );
}

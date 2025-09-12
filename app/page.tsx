"use client";

import Hero from "./components/hero/section";
import AboutMe from "./components/about me/section";
import Projects from "./components/projects/section";
import Trajectory from "./components/trajectory/section";
import Contact from "./components/contact/section";


export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
      <Hero />
      <AboutMe/>
      <Trajectory/>
      <Projects/>
      <Contact/>
    </div>
  );
}

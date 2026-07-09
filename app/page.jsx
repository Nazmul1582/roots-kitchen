import Categories from "@/components/home/Categories";
import Featured from "@/components/home/Featured";
// import Heritage from "@/components/home/Heritage";
import Hero from "@/components/home/Hero";
import PhilosophyQuote from "@/components/home/PhilosophyQuote";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Heritage /> */}
      <Categories />
      <Featured />
      <PhilosophyQuote />
    </>
  );
}

import Image from "next/image";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import InterestSubjets from "./Components/Interest&Subjets/Interest&Subjets";
import CV from "./Components/CV/CV";
import Projects from "./Components/Projects/Projetcs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <InterestSubjets />
      <CV />
      <Projects />
    </>
  );
}

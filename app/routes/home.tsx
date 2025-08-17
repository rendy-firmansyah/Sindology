import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import AboutSection from "~/components/AboutSection";
import CallToAction from "~/components/CallToAction";
import ProjectSection from "~/components/ProjectSection";
import ServiceSection from "~/components/ServiceSection";
import ChooseMe from "~/components/ChooseMe";
import ContactSection from "~/components/ContactSection";
import Footer from "~/components/Footer";
import HomeSection from "~/components/HomeSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "OpenTech" },
    { name: "description", content: "Open Source Innovation" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <CallToAction />
      <ProjectSection />
      <ServiceSection />
      <ChooseMe />
      <ContactSection />
      <Footer />
    </>
  );
}

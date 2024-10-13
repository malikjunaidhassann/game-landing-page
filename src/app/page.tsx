import ExpertiesSection from "@/components/ExpertiesSection/ExpertiesSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import OurPortfolio from "@/components/OurPortfolio/OurPortfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ExpertiesSection />
      <OurPortfolio />
    </>
  );
}

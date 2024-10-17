import ExpertiesSection from "@/components/ExpertiesSection/ExpertiesSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import Testimonial from "@/components/Testimonials/Testimonial";
import Navbar from "@/components/Navbar/Navbar";
import OurPortfolio from "@/components/OurPortfolio/OurPortfolio";
import TeamSection from "@/components/OurTeam/TeamSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ExpertiesSection />
      <OurPortfolio />
      <Testimonial />
      <TeamSection />
      <Footer />
    </>
  );
}

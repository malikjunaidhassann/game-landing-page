import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[1200px] mx-auto">
      <Navbar />
      <HeroSection />
    </div>
  );
}

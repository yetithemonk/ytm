import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import MenuSection from "@/components/MenuSection";
import TestimonialSection from "@/components/TestimonialSection";
import InTheSpotlightSection from "@/components/InTheSpotlightSection";
import ManagementSection from "@/components/ManagementSection";
import FranchiseSection from "@/components/FranchiseSection";
import Footer from "@/components/Footer";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import WallOfFameSection from "@/components/WallOfFameSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <OrnamentalDivider variant="knot" />
      <MenuSection />
      <OrnamentalDivider variant="default" />
      <TestimonialSection />
      <OrnamentalDivider variant="knot" />
      <InTheSpotlightSection />
      <OrnamentalDivider variant="default" />
      <WallOfFameSection />
      <OrnamentalDivider variant="default" />
      <ManagementSection />
      <OrnamentalDivider variant="default" />
      <FranchiseSection />
      <OrnamentalDivider variant="default" />
      <Footer />
    </div>
  );
};

export default Index;

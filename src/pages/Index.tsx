import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import TargetAudience from "@/components/TargetAudience";
import Benefits from "@/components/Benefits";
import SensoryAnalysis from "@/components/SensoryAnalysis";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChoose />
      <TargetAudience />
      <Benefits />
      <SensoryAnalysis />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

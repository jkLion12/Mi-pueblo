import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import ScrollEffects from "@/components/ScrollEffects";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="bg-[var(--color-paper)] text-[var(--color-ink)]">
      <ScrollEffects />
      <Hero />
      <FeaturesSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <MapSection />
      <Footer />
    </div>
  );
}

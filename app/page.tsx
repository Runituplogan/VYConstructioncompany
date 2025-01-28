import CTA from "./components/CTA";
import HeroSection from "./components/HeroSection";
import Ourservice from "./components/Ourservice";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <HeroSection />
      <CTA />
      <Ourservice />
      <WhyChooseUs />
      <Testimonials />
    </section>
  );
}

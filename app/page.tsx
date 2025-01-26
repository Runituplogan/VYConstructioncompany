import CTA from "./components/CTA";
import HeroSection from "./components/HeroSection";
import Ourservice from "./components/Ourservice";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <CTA />
      <Ourservice />
      <WhyChooseUs />
    </section>
  );
}

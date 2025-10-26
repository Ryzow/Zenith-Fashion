import AboutSection from "./components/AboutSection";
import ContactFooterSection from "./components/ContactFooterSection";
import HeroSection from "./components/HeroSection";
import ProfitSection from "./components/ProfitSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ProfitSection/>
      <AboutSection/>
      <ContactFooterSection/>
    </div>
  );
}

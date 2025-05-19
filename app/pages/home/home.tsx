import type { Route } from "./+types/home";
import AboutSection from "./sections/AboutSection";
import FAQSection from "./sections/FAQSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import MonitoringSection from "./sections/MonitoringSection";
import NewsletterSection from "./sections/NewsletterSection";
import NewsSection from "./sections/NewsSection";
import TestimonialSection from "./sections/TestimonialSection";
import WhyUsSection from "./sections/WhyUsSection";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "AirCrop | Drone & AI-powered Agriculture" },
    { name: "description", content: "Maximize agricultural efficiency with AirCrop — the smart fusion of drones and AI to save time, money, and resources." },
  ];
}

export default function Home() {
  return <> 
    <HeroSection />
    <AboutSection />
    <WhyUsSection />
    <FeaturesSection />
    <MonitoringSection/>
    <NewsSection/>
    <FAQSection/>
    <Footer/>
  </>;
}


//<TestimonialSection/>
//
//<NewsletterSection/>
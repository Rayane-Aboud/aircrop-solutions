import HeroContent from "~/components/hero-content/HeroContent";
import Navbar from "~/components/navbar/Navbar";
import ProductPresentationIllustration from "~/components/product-presentation-image/ProductPresentationIllustration";
import Trust from "~/components/trust/Trust";

const HeroSection = () => {
    return (
      <div className="bg-[#0F1815] min-h-screen px-8 py-6">
        {/* Navigation Bar */}
        <Navbar />
  
        {/* Hero Content */}
        <HeroContent />
  
        {/* Dashboard and Drone Image */}
        <ProductPresentationIllustration />
  
        {/* Trust Section */}
        <Trust />
      </div>
    );
  };
  
  export default HeroSection;
import HeroContent from "~/components/hero-content/HeroContent";
import Navbar from "~/components/navbar/Navbar";
import ProductPresentationIllustration from "~/components/product-presentation-image/ProductPresentationIllustration";
import Support from "~/components/trust/Support";

const HeroSection = () => {
    return (
     <div className="bg-[#0F1815] min-h-screen px-4 sm:px-6 md:px-8 py-6">

      {/* Navigation Bar */}
        <Navbar />
  
        {/* Hero Content */}
        <HeroContent />
  
        {/* Dashboard and Drone Image */}
        <ProductPresentationIllustration />
  
        {/* Trust Section */}
        <Support />
      </div>
    );
  };
  
  export default HeroSection;
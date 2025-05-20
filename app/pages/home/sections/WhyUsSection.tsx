import HighlightCard from "~/components/highlighcard/HighLightCard";
import ImageCard from "~/components/image-card/ImageCard";
import InfoCard from "~/components/infocard/InfoCard";
import SectionHeader from "~/components/whyus-section-header/WhyUsHeader";

const WhyUsSection = () => {
    return (
      <div className="bg-white py-12 md:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Why work with us ?"
            description="We combine innovative technology with deep agricultural expertise to provide efficient, sustainable, and cost-effective solutions tailored to farmers' real-world needs."
          />
  
          {/* Stack on mobile, grid on desktop */}
          <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6">
            <InfoCard
              title="Revolutionizing Agriculture with"
              highlight="Precision"
              description="We bring precision and efficiency to crop management, enhancing yield and reducing waste."
              className="md:col-span-4"
            />
  
            <HighlightCard
              title="Agriculture enhanced by"
              highlights={['drones', 'AI']}
              imageSrc="/assets/drone.png"
              className="md:col-span-4 md:row-span-2 order-first md:order-none mb-6 md:mb-0"
            />
  
            <div className="grid grid-cols-2 gap-4 md:contents">
            <ImageCard
              title="Time-Efficient"
              imageSrc="/why_us_img/clock.png"
              className="md:col-span-2"
              imageSizeClass="w-30 h-30"
              imageStyle={{ position: 'relative', bottom: '10%' }} // Move 20% from left
            />

            <ImageCard
              title="Cost-Effective"
              imageSrc="/why_us_img/7allouf.png"
              className="md:col-span-2"
              imageSizeClass="w-24 h-24"
              imageStyle={{ position: 'relative', left: '35%' }} // Move 60% from left
            />

            </div>
  
            <ImageCard
              title="Safe & Sustainable"
              imageSrc="/why_us_img/earth.png"
              className="md:col-span-4 mt-6 md:mt-0"
              imageSizeClass="w-28 h-28"
              imageStyle={{ position: 'relative', bottom: '%' }} // Move 35% from left
            />

  
            <InfoCard
              title="Customized"
              highlight="Solutions"
              description="We offer real-time data to empower farmers with informed, actionable insights."
              className="md:col-span-4 bg-[#018D6B] text-white mt-6 md:mt-0"
              textColor="text-white"
              highlightColor="text-[#F6FAF9]"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyUsSection;
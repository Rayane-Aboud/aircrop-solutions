import HighlightCard from "~/components/highlighcard/HighLightCard";
import ImageCard from "~/components/image-card/ImageCard";
import InfoCard from "~/components/infocard/InfoCard";
import SectionHeader from "~/components/whyus-section-header/WhyUsHeader";

const WhyUsSection = () => {
    return (
      <div className="bg-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Why work with us ?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero sed arcu ornare laculis."
          />
  
          <div className="grid grid-cols-12 gap-4 relative">
            <InfoCard
              title="Revolutionizing Agriculture with"
              highlight="Precision"
              description="We bring precision and efficiency to crop management, enhancing yield and reducing waste."
              className="col-span-4"
            />
  
            <HighlightCard
              title="Agriculture enhanced by"
              highlights={['drones', 'AI']}
              imageSrc="/api/placeholder/400/300"
              className="col-span-4 row-span-2"
            />
  
            <ImageCard
              title="Time-Efficient"
              imageSrc="/api/placeholder/100/100"
              className="col-span-2"
            />
  
            <ImageCard
              title="Cost-Effective"
              imageSrc="/api/placeholder/100/100"
              className="col-span-2"
            />
  
            <ImageCard
              title="Safe & Sustainable"
              imageSrc="/api/placeholder/100/100"
              className="col-span-4 flex items-center justify-between"
            />
  
            <ImageCard
              title="Collaborative Approach"
              imageSrc="/api/placeholder/150/50"
              className="col-span-4 flex items-center justify-between"
            />
  
            <InfoCard
              title="Customized"
              highlight="Solutions"
              description="We offer real-time data to empower farmers with informed, actionable insights."
              className="col-span-4 bg-[#018D6B] text-white"
              textColor="text-white"
              highlightColor="text-[#F6FAF9]"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyUsSection;
  
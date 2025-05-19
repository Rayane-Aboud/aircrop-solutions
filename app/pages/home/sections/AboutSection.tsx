import { Diamond, LightbulbIcon } from 'lucide-react';
import SectionHeading from '~/components/about-section-header/AboutSectionHeading';
import InfoPoint from '~/components/info-point/InfoPoint';

const AboutSection = () => {
    return (
        <section className="bg-[#F6FAF9] py-12 md:py-24 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-16">
              <SectionHeading />
              <div className="space-y-6 md:space-y-8">
                <InfoPoint
                  icon={<Diamond className="w-6 h-6 text-[#018D6B]" />}
                  title="AirCrop is a Drone-as-a-Service (DaaS) platform that uses AI to monitor crop health in real time."
                  description="We help farmers detect plant diseases, pest infestations, and irrigation issues early—before they impact yields."
                />
                <InfoPoint
                  icon={<LightbulbIcon className="w-6 h-6 text-[#018D6B]" />}
                  title="By combining aerial imaging and smart analytics, AirCrop empowers smarter farming decisions."
                  description="Our AI-powered platform delivers actionable insights that save resources, reduce chemical usage, and maximize productivity."
                />
              </div>
            </div>
    
            {/* Responsive video container with max-width */}
            <div className="mx-auto max-w-4xl"> {/* Added max-width container */}
              <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                <video 
                  src="/videos/intro.mp4" 
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  title="AirCrop Introduction Video"
                />
              </div>
            </div>
          </div>
        </section>
      );
};

export default AboutSection;
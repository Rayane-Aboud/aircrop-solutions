import { Diamond, LightbulbIcon } from 'lucide-react';
import SectionHeading from '~/components/about-section-header/AboutSectionHeading';
import InfoPoint from '~/components/info-point/InfoPoint';
import MediaPreview from '~/components/media-preview/MediaPreview';

const AboutSection = () => {
    return (
        <section className="bg-[#F6FAF9] py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <SectionHeading />
              <div className="space-y-8">
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
    
            <div className="video-container">
            <iframe
              src="/videos/intro.mp4"
              width="734"
              height="400"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook video"
            ></iframe>
          </div>

          </div>
        </section>
      );
    
};

export default AboutSection;
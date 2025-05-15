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
                  title="First important thing you want people to know"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibque eu libero sed arcu ornare sociis."
                />
                <InfoPoint
                  icon={<LightbulbIcon className="w-6 h-6 text-[#018D6B]" />}
                  title="Second important thing you want people to know"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibque eu libero sed arcu ornare sociis."
                />
              </div>
            </div>
    
            <MediaPreview
              src="/api/placeholder/800/450"
              alt="Presentation video thumbnail"
            />
          </div>
        </section>
      );
    
};

export default AboutSection;
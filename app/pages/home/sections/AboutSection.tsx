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
    
            <div className="video-container">
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1DVb272Fgr%2F&show_text=false&width=734"
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
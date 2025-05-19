import HeroContentCta from "../cta/HeroContentCta";

const HeroContent = () => {
  return (
    <div className="max-w-5xl mx-auto text-center mb-12 px-4 sm:px-6">
      <h1 className="text-[#F6FAF9] font-['Saira'] font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] leading-snug sm:leading-tight mb-6">
        Harness the power of{' '}
        <span className="text-[#018D6B]">drones</span> and{' '}
        <span className="text-[#018D6B]">AI</span>{' '}
        like never before!
      </h1>

      <p className="text-[#F5F9F8] font-['Inter'] text-base sm:text-lg md:text-xl opacity-90 mb-8 sm:mb-10">
        Maximizing efficiency while saving time, money, and agricultural resources has never been simpler.
      </p>

      <HeroContentCta />
    </div>
  );
};

export default HeroContent;

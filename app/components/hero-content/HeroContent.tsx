import HeroContentCta from "../cta/HeroContentCta";

const HeroContent = () => {
    return (
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-[#F6FAF9] font-['Saira'] font-medium text-7xl lg:text-[96px] leading-tight mb-6">
            Harness the power of{' '}
            <span className="text-[#018D6B]">drones</span> and{' '}
            <span className="text-[#018D6B]">AI</span>{' '}
            like never before!
          </h1>
          
          <p className="text-[#F5F9F8] font-['Inter'] text-xl opacity-90 mb-10">
            Maximizing efficiency while saving time, money, and agricultural resources has never been simpler.
          </p>
  
          <HeroContentCta />
        </div>
    )
}

export default HeroContent;
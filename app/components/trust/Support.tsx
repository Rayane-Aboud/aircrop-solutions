const Support = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center bg-grey mb-2 overflow-x-auto py-4">
      <h3 className="text-[#F5F9F8] font-['Inter'] text-lg mb-6 sm:mb-8 mt-8 sm:mt-16">
        <b>Supported by</b>
      </h3>
      <div className="flex justify-center items-center gap-4 sm:gap-8 lg:gap-12 px-4">
        {[
          { 
            name: 'futuris', 
            logo: '/support/futuris.webp',
            width: 'w-40 sm:w-48 md:w-56' // Fixed widths
          },
          { 
            name: 'startupdz', 
            logo: '/support/startupdz.webp',
            width: 'w-32 sm:w-40 md:w-48'
          },
          { 
            name: 'ensaincubator', 
            logo: '/support/ensaincubator.png',
            width: 'w-28 sm:w-36 md:w-44'
          },
        ].map(({ name, logo, width }) => (
          <div 
            key={name} 
            className={`flex-shrink-0 p-3 sm:p-4 rounded-xl border border-[#2a3a35] bg-[#0f1815] bg-opacity-50 backdrop-blur-sm transition-all hover:border-[#018D6B] hover:bg-opacity-80 shadow-lg flex items-center justify-center ${width} h-24 sm:h-28 md:h-32`}
          >
            <img 
              src={logo} 
              alt={name} 
              className="w-full h-auto brightness-110 contrast-125"
              style={{ 
                filter: 'drop-shadow(0 0 4px rgba(1, 141, 107, 0.3))',
                objectFit: 'contain',
                maxHeight: '80%'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Support;
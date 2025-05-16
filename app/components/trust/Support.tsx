const Support = () => {
    return (
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-[#F5F9F8] font-['Inter'] text-lg mb-8 mt-16">
            <b>Supported by</b>
          </h3>
          <div className="flex justify-between items-center gap-12 opacity-60 flex-wrap">
            {[
              { name: 'startupdz Post', logo: '/support/futuris.webp' },
              { name: 'startupdz', logo: '/support/startupdz.webp' },
             
            ].map(({ name, logo }) => (
              <div key={name} className="flex items-center gap-3 text-[#F5F9F8] font-bold text-xl">
                <img src={logo} alt={name} className="h-12 w-auto z-50" />
               
              </div>
            ))}
          </div>

        </div>
    );
}

export default Support;
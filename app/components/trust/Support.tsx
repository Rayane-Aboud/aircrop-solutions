const Support = () => {
    return (
        <div className="max-w-5xl mx-auto text-center bg-grey mb-2">
          <h3 className="text-[#F5F9F8] font-['Inter'] text-lg mb-8 mt-16">
            <b>Supported by</b>
          </h3>
          <div className="flex justify-between items-center gap-12 opacity-60 flex-wrap ">
            {[
              { name: 'futuris', logo: '/support/futuris.webp' },
              { name: 'startupdz', logo: '/support/startupdz.webp' },
              { name: 'ensaincubator', logo: '/support/ensaincubator.png' },
            ].map(({ name, logo }) => (
              <div key={name} className="flex items-center gap-3 text-[#F5F9F8] font-bold text-xl">
                <img src={logo} alt={name} className="h-20 w-auto z-50" />
               
              </div>
            ))}
          </div>

        </div>
    );
}

export default Support;
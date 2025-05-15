const Trust = () => {
    return (
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-[#F5F9F8] font-['Inter'] text-sm mb-8">
            They trust us
          </h3>
          <div className="flex justify-between items-center gap-12 opacity-60">
            {['Washington Post', 'TechCrunch', 'Bloomberg', 'Gizmodo', 'Forbes'].map((company) => (
              <div key={company} className="text-[#F5F9F8] font-bold text-xl">
                {company}
              </div>
            ))}
          </div>
        </div>
    );
}

export default Trust;
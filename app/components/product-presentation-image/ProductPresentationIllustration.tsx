const ProductPresentationIllustration = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] mb-20 sm:mb-40">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F1815] z-0" />

      {/* Dashboard image - adjusted for mobile */}
      <img
        src="/assets/dashboard.png"
        alt="AirCrop Dashboard Interface"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full sm:w-[90%] max-h-full object-contain rounded-xl shadow-2xl z-10
                   [mask-image:linear-gradient(to_bottom,white,transparent)]"
      />

      {/* Drone image - hidden on mobile */}
      <img
        src="/assets/drone.png"
        alt="Drone"
        className="
          absolute 
          bottom-[-15%] left-4 sm:right-0 sm:left-auto
          w-[60%] sm:w-[50%] object-contain z-20
          transition-all duration-300 ease-in-out
          hidden sm:block
        "
      />
    </div>
  );
};
export default ProductPresentationIllustration;
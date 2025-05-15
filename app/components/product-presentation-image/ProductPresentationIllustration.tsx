const ProductPresentationIllustration = () => {
    return (
        <div className="relative max-w-6xl mx-auto h-[500px] mb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F1815] z-10" />
          <img 
            src="/assets/dashboard.png"
            alt="AirCrop Dashboard Interface"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] rounded-xl shadow-2xl"
          />
          <img 
            src="/assets/drone.png"
            alt="Drone"
            className="absolute bottom-0 right-0 w-[40%] z-20"
          />
        </div>
    );
}

export default ProductPresentationIllustration;
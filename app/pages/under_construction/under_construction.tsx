import Navbar from "~/components/navbar/Navbar";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-[#0F1815] text-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#F6FAF9] font-['Saira']">
          Page Under Construction
        </h1>
        <p className="text-[#C2D1CE] font-['Inter'] text-lg sm:text-xl max-w-md">
          We're working hard to bring you something amazing. Check back soon!
        </p>
      </main>
    </div>
  );
};

export default UnderConstruction;

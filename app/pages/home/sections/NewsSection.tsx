import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Facebook } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "AirCrop recognized in Algeria Startup Challenge 2024",
    description: "AirCrop was selected as one of the most promising startups in the Algeria Startup Challenge 2024, showcasing innovative solutions in the agritech sector.",
    image: "/latest_news/startup.png",
    link: "https://leancubator.co/article/algeria-startup-challenge-2024-les-startup-les-plus-prometteuses-2"
  },
  {
    id: 2,
    title: "AirCrop wins Agritech Challenge 2024",
    description: "AirCrop was among the 4 laureates awarded in the Agritech Challenge 2024, recognized for its groundbreaking agricultural technology solutions.",
    image: "/latest_news/agritech.png",
    link: "https://www.algeriainvest.com/premium-news/agritech-challenge-2024-4-laureats-primes"
  },
];

const NewsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our latest news
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with AirCrop's latest achievements and innovations in agritech.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10">
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 scroll-smooth hide-scrollbar"
        >
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="flex-none w-[300px] h-full"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                    {item.description}
                  </p>
                  <div className="space-y-4">
                    <p className="text-gray-700 font-medium">
                      Read story on:
                    </p>
                    <div className="flex gap-3">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-md bg-[#1d8069] text-white hover:bg-green-700 transition-colors text-center w-full"
                        >
                          Visit Article
                        </a>
                      ) : (
                        <>
                          <a
                            href="#linkedin"
                            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                            aria-label="Share on LinkedIn"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                          <a
                            href="#facebook"
                            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                            aria-label="Share on Facebook"
                          >
                            <Facebook className="w-5 h-5" />
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

// Add this CSS to your global styles to hide the scrollbar while maintaining functionality
const styles = `
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`;
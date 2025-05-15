import  { useRef } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Facebook } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "We've just released a new update!",
    description: "Check out the all new dashboard view. Pages and now load faster.",
    image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    title: "We've just released a new update!",
    description: "Check out the all new dashboard view. Pages and now load faster.",
    image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    title: "We've just released a new update!",
    description: "Check out the all new dashboard view. Pages and now load faster.",
    image: "/api/placeholder/400/300"
  },
  {
    id: 4,
    title: "We've just released a new update!",
    description: "Check out the all new dashboard view. Pages and now load faster.",
    image: "/api/placeholder/400/300"
  },
  {
    id: 5,
    title: "We've just released a new update!",
    description: "Check out the all new dashboard view. Pages and now load faster.",
    image: "/api/placeholder/400/300"
  }
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero sed arcu ornare iaculis.
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
              className="flex-none w-[300px]"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="space-y-4">
                    <p className="text-gray-700 font-medium">
                      Read story on:
                    </p>
                    <div className="flex gap-3">
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
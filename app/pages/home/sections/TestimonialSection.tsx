import  { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "This product has completely transformed how I manage my Field and Crops",
    author: "Lulu Meyers",
    role: "Farmer",
    rating: 5,
    image: "/api/placeholder/500/500"  // Using placeholder as per guidelines
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="flex space-x-1">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star 
                key={i}
                className="w-5 h-5 text-green-500 fill-green-500"
              />
            ))}
          </div>

          <blockquote className="text-3xl font-semibold text-gray-900">
            "{currentTestimonial.quote}"
          </blockquote>

          <div className="space-y-1">
            <p className="font-medium text-gray-900">
              {currentTestimonial.author}
            </p>
            <p className="text-gray-600">
              {currentTestimonial.role}
            </p>
          </div>

          <div className="flex space-x-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full border border-green-500 text-green-500 hover:bg-green-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full border border-green-500 text-green-500 hover:bg-green-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative aspect-square">
          <img
            src={currentTestimonial.image}
            alt={`Portrait of ${currentTestimonial.author}`}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
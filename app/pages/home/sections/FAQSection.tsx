import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Do you offer a demo?",
    answer:
      "Yes! We provide personalized demos to showcase how AirCrop can monitor your crops and detect issues early. Contact us to schedule a demo tailored to your farm’s needs."
  },
  {
    id: 2,
    question: "What areas do you cover?",
    answer: "We operate in select regions. Please contact us with your location to confirm coverage."
  },
  {
    id: 3,
    question: "Can I request multiple services in one mission?",
    answer: "Yes, multiple services can be bundled into a single mission for efficiency and cost-effectiveness."
  },
  {
    id: 4,
    question: "How is pricing determined?",
    answer: "Pricing depends on the services requested, farm size, and location. Contact us for a tailored quote."
  },
  {
    id: 5,
    question: "Can I get an invoice with my farm's info?",
    answer: "Yes, we provide invoices that include your farm’s details and any required documentation."
  },
  {
    id: 6,
    question: "Is my data secure?",
    answer: "Absolutely. We follow industry best practices to ensure your data is protected and only accessible to you."
  }
];

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          FAQ
        </h2>
        <p className="text-gray-600">
          Everything you need to know about the product and billing.
        </p>
      </div>

      <div className="space-y-4">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
              aria-expanded={openItem === item.id}
              aria-controls={`faq-answer-${item.id}`}
            >
              <div className="flex items-center gap-4">
                <div className="text-green-500">
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openItem === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <span className="font-medium text-gray-900">{item.question}</span>
              </div>
            </button>
            
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              className={`transition-all duration-200 ease-in-out ${
                openItem === item.id ? 'max-h-96' : 'max-h-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-6 pt-2">
                <p className="text-gray-600">
                  {item.answer}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
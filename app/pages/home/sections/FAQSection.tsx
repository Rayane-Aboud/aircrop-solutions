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
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
  },
  {
    id: 2,
    question: "Can I change my plan later?",
    answer: "Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle."
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription at any time. You'll continue to have access until the end of your current billing period."
  },
  {
    id: 4,
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add additional information such as your VAT number, company details, or specific billing requirements to your invoices."
  },
  {
    id: 5,
    question: "How does billing work?",
    answer: "We bill monthly or annually, depending on your preference. Payment is processed securely through our payment partners."
  },
  {
    id: 6,
    question: "How do I change my account email?",
    answer: "You can change your account email through your account settings page. A verification email will be sent to confirm the change."
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
                openItem === item.id ? 'max-h-48' : 'max-h-0'
              } overflow-hidden`}
            >
              <div className="p-4 pt-0 pl-13">
                <p className="text-gray-600 ml-9">
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
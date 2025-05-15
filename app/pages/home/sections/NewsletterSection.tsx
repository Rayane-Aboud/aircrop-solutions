import React, { useState } from 'react';
import { Check } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <section className="bg-emerald-600 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              We'll send you a nice letter once per week
            </h2>
            <p className="text-emerald-50">
              No spam. Just the latest releases and tips, interesting articles,
              and exclusive interviews with great people.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john.doe@mail.com"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300"
                >
                  Subscribe
                </button>
              </div>

              <div className="flex items-center gap-2 text-sm text-emerald-50">
                <span>We care about your data in our</span>
                <a 
                  href="/privacy" 
                  className="underline hover:text-white transition-colors"
                >
                  privacy policy
                </a>
              </div>
            </form>

            {isSubmitted && (
              <div className="flex items-center gap-2 text-emerald-50 bg-emerald-700/50 p-4 rounded-lg">
                <Check className="w-5 h-5" />
                <span>Thank you for subscribing!</span>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/api/placeholder/600/400"
                alt="Drone mapping interface"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute bottom-0 right-0 -z-10">
              <img
                src="/api/placeholder/400/400"
                alt="Drone"
                className="opacity-90"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }} />
      </div>
    </section>
  );
};

export default NewsletterSection;
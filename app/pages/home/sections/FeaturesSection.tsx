// types.ts
// types.ts
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}

// FeatureCard.tsx
//import React from 'react';
//import { Feature } from './types';

interface FeatureCardProps extends Feature {}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  badge 
}) => (
  <div className="flex gap-6 p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
    <div className="flex-shrink-0">
      <Icon className="w-6 h-6 text-[#018D6B]" />
    </div>
    <div>
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-['Saira'] text-lg font-medium text-[#0F1815]">{title}</h3>
        {badge && (
          <span className="px-2 py-0.5 text-xs font-['Inter'] font-medium text-[#018D6B] bg-[#E6F5F1] rounded-full">
            {badge}
          </span>
        )}
      </div>
      <p className="font-['Inter'] text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

// FeaturesSection.tsx
import React from 'react';
import { 
  Search, 
  FileText, 
  Map, 
  Droplet, 
  Laptop, 
  Briefcase, 
  BarChart3, 
  Cpu 
} from 'lucide-react';
//import { Feature } from './types';
//import { FeatureCard } from './FeatureCard';

const features: Feature[] = [
  {
    icon: Search,
    title: 'Scouting',
    description: 'Detect plant health issues early with drone-powered field scouting. Our system spots stress, diseases, and pests before they spread.'
  },
  {
    icon: FileText,
    title: 'Reporting',
    description: 'Get instant, easy-to-read reports with actionable insights. Know exactly what’s happening in your field anytime, anywhere.'
  },
  {
    icon: Map,
    title: 'Mapping',
    description: 'Generate high-resolution field maps using aerial imaging. Identify crop patterns, problem zones, and growth variations at scale.'
  },
  {
    icon: Droplet,
    title: 'Spraying',
    description: 'Say goodbye to blanket spraying. Our drones apply treatments only where needed, cutting chemical use and protecting your plants and your budget.'
  },
  
  {
    icon: Briefcase,
    title: 'Consulting',
    description: 'Need guidance? Our expert agronomists and engineers are here to support you with data interpretation and strategic advice.'
  },
  {
    icon: BarChart3,
    title: 'Advanced analytics',
    description: 'Unlock detailed performance metrics with our advanced analytics engine. Predict yield, optimize inputs, and benchmark field health.',
    badge: 'PRO'
  },
  {
    icon: Cpu,
    title: 'AI-driven insights',
    description: 'Let our AI do the heavy lifting. Receive smart alerts and predictions tailored to your crops, soil, and climate conditions.',
    badge: 'PRO'
  }
];

interface FeaturesSectionProps {
  className?: string;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className = '' }) => {
  return (
    <div className={`bg-[#F6FAF9] py-24 px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-16">
          {/* Left side - Heading */}
          <div className="col-span-4">
            <h2 className="font-['Saira'] text-5xl font-medium leading-tight mb-6">
              All the features you need
            </h2>
            <p className="font-['Inter'] text-gray-600">
            Discover a full suite of intelligent drone features designed to improve productivity, reduce costs, and help you make data-driven decisions with confidence.
            </p>
          </div>

          {/* Right side - Features grid */}
          <div className="col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
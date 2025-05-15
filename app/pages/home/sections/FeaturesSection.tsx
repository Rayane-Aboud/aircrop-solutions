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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero sed arcu ornare laculis.'
  },
  {
    icon: FileText,
    title: 'Reporting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero sed arcu ornare laculis.'
  },
  {
    icon: Map,
    title: 'Mapping',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero sed arcu ornare laculis.'
  },
  {
    icon: Droplet,
    title: 'Spraying',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero sed arcu ornare laculis.'
  },
  {
    icon: Laptop,
    title: 'Software access',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero sed arcu ornare laculis.'
  },
  {
    icon: Briefcase,
    title: 'Consulting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero sed arcu ornare laculis.'
  },
  {
    icon: BarChart3,
    title: 'Advanced analytics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero sed arcu ornare laculis.',
    badge: 'PRO'
  },
  {
    icon: Cpu,
    title: 'AI-driven insights',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero sed arcu ornare laculis.',
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero sed arcu ornare laculis.
            </p>
          </div>

          {/* Right side - Features grid */}
          <div className="col-span-8">
            <div className="grid grid-cols-1 gap-4">
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
import React from 'react';
import { Sprout, Droplets } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  secondaryText: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, description, secondaryText }) => (
  <div className="p-8 bg-green-50/50 rounded-lg">
    <div className="text-green-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 mb-3">
      {description}
    </p>
    <p className="text-gray-600">
      {secondaryText}
    </p>
  </div>
);

const MonitoringSection = () => {
  const features = [
    {
      title: "Plant Health",
      icon: <Sprout size={24} />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero sed arcu ornare iaculis.",
      secondaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero."
    },
    {
      title: "Irrigation",
      icon: <Droplets size={24} />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero sed arcu ornare iaculis.",
      secondaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Monitoring done for you
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero sed arcu ornare iaculis.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            icon={feature.icon}
            description={feature.description}
            secondaryText={feature.secondaryText}
          />
        ))}
      </div>
    </section>
  );
};

export default MonitoringSection;
import type { ReactNode } from "react";

interface InfoPointProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const InfoPoint = ({ icon, title, description }: InfoPointProps) => (
  <div className="flex items-start gap-4">
    <div className="flex-grow">
      <h3 className="font-['Inter'] text-lg font-semibold mb-2 text-[#0F1815]">
        {title}
      </h3>
      <p className="font-['Inter'] text-gray-600">{description}</p>
    </div>
    <div className="flex-shrink-0">{icon}</div>
  </div>
);

export default InfoPoint;

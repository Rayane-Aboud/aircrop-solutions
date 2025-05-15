interface InfoCardProps {
    title: string;
    highlight: string;
    description: string;
    className?: string;
    textColor?: string;
    highlightColor?: string;
  }
  
  const InfoCard = ({
    title,
    highlight,
    description,
    className = '',
    textColor = 'text-[#0F1815]',
    highlightColor = 'text-[#018D6B]',
  }: InfoCardProps) => (
    <div className={`bg-[#F6FAF9] rounded-xl p-6 ${className}`}>
      <h3 className={`font-['Saira'] text-xl font-medium mb-2 ${textColor}`}>
        {title} <span className={highlightColor}>{highlight}</span>
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
  
  export default InfoCard;
  
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
    textColor = 'text-[#ffffff]',
    highlightColor = 'text-[#ffffff]',
  }: InfoCardProps) => (
    <div className={`bg-[#1d8069] rounded-xl p-6 ${className}`}>
      <h3 className={`font-['Saira'] text-xl font-bold mb-2 ${textColor}`}>
        {title} <span className={highlightColor}>{highlight}</span>
      </h3>
      <p className="text-sm text-black">{description}</p>
    </div>
  );
  
  export default InfoCard;
  
interface HighlightCardProps {
    title: string;
    highlights: string[];
    imageSrc: string;
    className?: string;
  }
  
  const HighlightCard = ({ title, highlights, imageSrc, className = '' }: HighlightCardProps) => (
    <div className={`bg-[#0F1815] rounded-xl p-6 text-white flex flex-col justify-between ${className}`}>
      <div>
        <h3 className="font-['Saira'] text-2xl font-medium mb-4">
          {title}{' '}
          {highlights.map((word, idx) => (
            <span key={idx} className="text-[#018D6B]">{word}{idx < highlights.length - 1 ? ' and ' : ''}</span>
          ))}
        </h3>
      </div>
      <img src={imageSrc} alt="highlight" className="w-full object-contain" />
    </div>
  );
  
  export default HighlightCard;
  
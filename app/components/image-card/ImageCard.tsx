interface ImageCardProps {
    title: string;
    imageSrc: string;
    className?: string;
  }
  
  const ImageCard = ({ title, imageSrc, className = '' }: ImageCardProps) => (
    <div className={`bg-[#F6FAF9] rounded-xl p-4 ${className}`}>
      <h3 className="font-['Saira'] text-lg font-medium mb-2">{title}</h3>
      <img src={imageSrc} alt={title} className="w-16 h-16 object-contain" />
    </div>
  );
  
  export default ImageCard;
  
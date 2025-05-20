interface ImageCardProps {
  title: string;
  imageSrc: string;
  className?: string;
  imageSizeClass?: string;
  imageStyle?: React.CSSProperties; // For left/top %, etc.
}

  
const ImageCard = ({
  title,
  imageSrc,
  className = '',
  imageSizeClass = 'w-16 h-16',
  imageStyle = {},
}: ImageCardProps) => {
  return (
    <div className={`bg-[#F6FAF9] rounded-xl p-4 ${className}`}>
      <h3 className="font-['Saira'] text-lg font-bold mb-2">{title}</h3>
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className={`${imageSizeClass} object-contain`}
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default ImageCard;
  
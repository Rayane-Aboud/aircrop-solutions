interface MediaPreviewProps {
    src: string;
    alt: string;
  }
  
  const MediaPreview = ({ src, alt }: MediaPreviewProps) => (
    <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden bg-white shadow-lg">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default MediaPreview;
  
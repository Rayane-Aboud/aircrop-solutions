interface SectionHeaderProps {
    title: string;
    description: string;
  }
  
  const SectionHeader = ({ title, description }: SectionHeaderProps) => (
    <div className="text-center mb-16">
      <h2 className="font-['Saira'] text-5xl font-medium mb-4">{title}</h2>
      <p className="text-gray-600 font-['Inter'] max-w-2xl mx-auto">{description}</p>
    </div>
  );
  
  export default SectionHeader;
  
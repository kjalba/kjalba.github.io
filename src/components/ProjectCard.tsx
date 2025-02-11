interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

export default function ProjectCard({ image, title, description, onClick }: ProjectCardProps) {
  return (
    <div className="w-full sm:w-full lg:w-1/2 px-4 mt-4">
      <div
        className="project-card relative w-full h-[425px] bg-gray-200 cursor-pointer rounded-lg overflow-hidden group flex flex-col justify-center"
        onClick={onClick}
      >
        {/* Image Wrapper */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <img src={image} alt={`${title} - Image`} className="w-[70%] h-[75%] object-contain block" />
        </div>

        {/* Translucent Overlay */}
        <div className="absolute inset-0 bg-[#FACC15] bg-opacity-50 opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-50"></div>

        {/* Overlay Text */}
        <div className="absolute top-0 left-0 text-white pt-10 pl-10 max-w-[60%] leading-none opacity-0 transition-opacity duration-500 group-hover:opacity-50">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

const ServiceCard = ({ title, icon, description }) => {
  return (
    <div className="group relative p-8 rounded-2xl shadow-lg transition-all duration-500 bg-white cursor-pointer flex flex-col justify-between min-h-[300px] overflow-hidden">
      
      {/* Gradient Overlay - Appears from Bottom on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4D9FFF] to-[#8750F7] opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 z-0"></div>

      {/* Content - Ensures Text is Above Gradient */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 mb-4">
          <Image
            src={icon}
            alt={title}
            width={64}
            height={64}
            className="transition-all duration-500 group-hover:invert"
          />
        </div>

        {/* Title and Arrow in the same row */}
        <div className="flex items-center justify-between mb-4 mt-10">
          <h3 className="text-2xl font-semibold text-[#030438] group-hover:text-white transition-all duration-500">
            {title}
          </h3>

          {/* Arrow Circle - Initially Gradient, Turns White on Hover */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full 
                bg-[#5E51FE] transition-all duration-500 
                group-hover:bg-white">

            {/* Arrow - Initially White, Turns Gradient on Hover */}
            <span className="text-white text-lg font-bold transition-all duration-500 
                            group-hover:text-transparent bg-clip-text 
                            group-hover:bg-gradient-to-r group-hover:from-[#4D9FFF] group-hover:to-[#8750F7]">
              ➜
            </span>
          </div>
        </div>

        {/* Description - Adjusted Spacing */}
        <p className="text-[#51328F] text-lg leading-relaxed group-hover:text-white transition-all duration-500 mb-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;

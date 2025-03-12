import Image from "next/image";

const KeyPointCard = ({ icon, title, description }) => {
  return (
    <div className="group relative flex items-center gap-12 p-4 px-8 rounded-xl bg-white shadow-md overflow-hidden cursor-pointer">
      {/* Gradient Fill Animation - Fills from Top on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4D9FFF] to-[#8750F7] 
                      transform translate-y-[-100%] transition-transform duration-500 group-hover:translate-y-0">
      </div>

      {/* Content (Ensures Text & Icons Stay Above Gradient) */}
      <div className="relative z-10 flex items-center gap-6">
        {/* Icon */}
        <div className="w-12 h-12">
          <Image
            src={icon}
            alt={title}
            width={48}
            height={48}
            className="transition-all duration-500 group-hover:invert"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-all duration-500">
            {title}
          </h3>
          <p className="text-gray-600 text-sm group-hover:text-white transition-all duration-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyPointCard;

import React from 'react';

const SecurityBanner = ({
  imageUrl = "/images/security-hacker.jpg",
  imageAlt = "Security specialist",
  heading = "24/7 security assistance",
  content = "Real-time support for all cybersecurity concerns, including breach response, threat detection, guidance.",
  direction = "ltr", // 'ltr' (image left) or 'rtl' (image right)
  startColor = "#4169e1", // Royal blue
  endColor = "#06b6d4", // Cyan/teal
}) => {
  return (
    <div className="relative flex items-center w-full pb-8">
      {/* For LTR (Left to Right) direction */}
      {direction === "ltr" && (
        <>
          {/* Wrapper for the custom image shape */}
          <div className="absolute w-[220px] h-[155px] flex justify-center items-center z-10">
            {/* White border wrapper using the correct shape */}
            <div
              className="absolute w-full h-full bg-[#F2F2F5]"
              style={{
                clipPath: "polygon(45% -70%,96% 50%,50% 155%,0 50%)",
              }}
            ></div>

            {/* Image container with exact shape */}
            <figure
              className="absolute w-[180px] h-[145px] overflow-hidden"
              style={{
                clipPath: "polygon(50% -50%,100% 50%,50% 150%,0 50%)",
              }}
            >
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </figure>
          </div>

          {/* Content area with increased height and circular edge */}
          <div
            className="text-white py-4 px-6 flex flex-col justify-center relative !w-[500px]"
            style={{
              left: "160px", // ✅ Moves the banner slightly to the right
              height: "145px", // ✅ Matches image height
              background: `linear-gradient(180deg, ${startColor}, ${endColor})`,
              borderTopRightRadius: "72px", // ✅ Completely circular edge
              borderBottomRightRadius: "72px", // ✅ Completely circular edge
              zIndex: 1,
            }}
          >
            <h3 className="text-xl font-medium leading-tight pl-16 pb-4">{heading}</h3>
            <p className="text-sm mt-1 leading-tight pl-16">{content}</p>
          </div>
        </>
      )}

      {/* ✅ Fixed RTL (Right to Left) direction */}
      {direction === "rtl" && (
        <>
          {/* Content area with increased height and circular edge */}
          <div
            className="text-white py-4 px-6 flex flex-col justify-center relative !w-[580px]"
            style={{
              right: "160px", // ✅ Moves the banner slightly to the left (mirrors LTR)
              height: "145px", // ✅ Matches image height
              background: `linear-gradient(180deg, ${startColor}, ${endColor})`,
              borderTopLeftRadius: "72px", // ✅ Circular edge on the opposite side
              borderBottomLeftRadius: "72px", // ✅ Circular edge on the opposite side
              zIndex: 1,
            }}
          >
            <h3 className="text-xl font-medium leading-tight pr-16 pb-4">{heading}</h3>
            <p className="text-sm mt-1 leading-tight pr-16">{content}</p>
          </div>

          {/* Wrapper for the custom image shape (Now on the Right Side) */}
          <div className="absolute w-[220px] h-[155px] flex justify-center items-center z-10 right-0">
            {/* White border wrapper using the correct shape */}
            <div
              className="absolute w-full h-full bg-[#F2F2F5]"
              style={{
                clipPath: "polygon(45% -70%,96% 50%,50% 155%,0 50%)",
              }}
            ></div>

            {/* Image container with exact shape */}
            <figure
              className="absolute w-[180px] h-[145px] overflow-hidden"
              style={{
                clipPath: "polygon(50% -50%,100% 50%,50% 150%,0 50%)",
              }}
            >
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        </>
      )}
    </div>
  );
};

export default SecurityBanner;

import AboutHeading from "./AboutHeading";
import AboutContent from "./AboutContent";
import AboutGrid from "./AboutGrid";

export default function AboutSection() {
  return (
    <section className="bg-[#F9F9F9] text-[#333] py-20 lg:py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <AboutHeading />
         <AboutContent />
        </div>

        {/* Right Grid */}
        <div className="md:w-1/2">
          <AboutGrid />
        </div>
      </div>
    </section>
  );
}

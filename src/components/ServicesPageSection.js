import ServiceCard from "@/components/ServicePageCard";

const services = [
  {
    title: "Content Writing",
    icon: "/Services/icon-service-1.svg",
    description: "Crafting Words that Resonate and Convert.",
  },
  {
    title: "Logo Designing",
    icon: "/Services/icon-service-2.svg",
    description: "Designing Symbols That Tell Your Story.",
  },
  {
    title: "Website Development",
    icon: "/Services/icon-service-3.svg",
    description: "Building Foundations for Your Digital Future.",
  },
  {
    title: "Website Designing",
    icon: "/Services/icon-service-4.svg",
    description: "Creating Beautiful, User-Friendly Digital Experiences.",
  },
  {
    title: "SEO",
    icon: "/Services/icon-service-5.svg",
    description: "Boosting Visibility, Driving Targeted Traffic.",
  },
  {
    title: "Social Media Marketing",
    icon: "/Services/icon-service-6.svg",
    description: "Connecting Your Brand with Its Audience.",
  },

  {
    title: "Video Editing",
    icon: "/Services/icon-service-1.svg",
    description: "Tell Your Story, Engage Your Audience.",
  },
  {
    title: "Illustrations",
    icon: "/Services/icon-service-2.svg",
    description: "Bringing Ideas to Life with Art",
  },
  {
    title: "QA Testing Services",
    icon: "/Services/icon-service-3.svg",
    description: "Ensuring Quality, Delivering Perfection Every Time.",
  },
  {
    title: "Web Application",
    icon: "/Services/icon-service-4.svg",
    description: "Custom Solutions to Power Your Digital Success.",
  },
  {
    title: "Branding",
    icon: "/Services/icon-service-5.svg",
    description: "Crafting Identities that Resonate and Evolve",
  },
  {
    title: "2D/3D Animation",
    icon: "/Services/icon-service-6.svg",
    description: "Animating Stories that Capture Hearts and Minds.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#030438]"> Services We Provide</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

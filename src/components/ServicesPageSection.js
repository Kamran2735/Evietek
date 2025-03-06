import ServiceCard from "@/components/ServicePageCard";

const services = [
  {
    title: "Threat Detection and Prevention",
    icon: "/Services/icon-service-1.svg",
    description: "Real-time monitoring and proactive measures to identify and threats.",
  },
  {
    title: "Endpoint Security Solutions",
    icon: "/Services/icon-service-2.svg",
    description: "Real-time monitoring and proactive measures to identify and threats.",
  },
  {
    title: "Network Defense and Firewalls",
    icon: "/Services/icon-service-3.svg",
    description: "Real-time monitoring and proactive measures to identify and threats.",
  },
  {
    title: "Data Encryption and Privacy",
    icon: "/Services/icon-service-4.svg",
    description: "Real-time monitoring and proactive measures to identify and threats.",
  },
  {
    title: "Cloud Security and Compliance",
    icon: "/Services/icon-service-5.svg",
    description: "Real-time monitoring and proactive measures to identify and threats.",
  },
  {
    title: "Incident Response and Management",
    icon: "/Services/icon-service-6.svg",
    description: "Real-time monitoring and proactive measures to identify and threats.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Our Security Solutions</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

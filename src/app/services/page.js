import Breadcrumb from '@/components/BreadCrumb';
import ServicesSection from '@/components/ServicesPageSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQSection from '@/components/FAQSection';

const ServicesPage = () => {
  return (
    <main className="bg-[#F2F2F5]">  
      <Breadcrumb 
        title="Our Services" 
        backgroundImage="/Services/services-bg.jpg" 
      />
        <ServicesSection /> 
        <WhyChooseUs />
        <FAQSection />


    </main>
  );
};

export default ServicesPage;

import Breadcrumb from '@/components/BreadCrumb';
import AboutUsSection from '@/components/AboutUsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQSection from '@/components/FAQSection';

const AboutPage = () => {
  return (
    <main className="bg-[#F2F2F5]">  
      <Breadcrumb 
        title="Our Services" 
        backgroundImage="/Services/services-bg.jpg" 
      />
        <AboutUsSection />
        <WhyChooseUs />
        <FAQSection />


    </main>
  );
};

export default AboutPage;

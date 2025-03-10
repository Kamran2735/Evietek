import Breadcrumb from '@/components/BreadCrumb';
import ServicesSection from '@/components/ServicesPageSection';

const ServicesPage = () => {
  return (
    <main className="pt-[65px]"> {/* Adjust height to match your navbar */}
      <Breadcrumb 
        title="Our Services" 
        backgroundImage="/Services/services-bg.jpg" 
      />
        <ServicesSection /> 

    </main>
  );
};

export default ServicesPage;

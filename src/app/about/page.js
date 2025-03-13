import Breadcrumb from '@/components/BreadCrumb';
import AboutUsSection from '@/components/AboutUsSection';
import Approach from '@/components/Approach';
import WhatWeDo from '@/components/WhatWeDo';
import HowItWork from '@/components/HowWeWork';
import Benefits from '@/components/Benefits';


const AboutPage = () => {
  return (
    <main className="bg-[#F2F2F5]">  
      <Breadcrumb 
        title="Our Services" 
        backgroundImage="/Services/services-bg.jpg" 
      />
        <AboutUsSection />
        <Approach />
        <WhatWeDo />
        <HowItWork />
        <Benefits />
    </main>
  );
};

export default AboutPage;

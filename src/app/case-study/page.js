import Breadcrumb from '@/components/BreadCrumb';
import CaseStudyCard from "@/components/CaseStudyCard";

const caseStudies = [
  {
    tag: 'Product Design',
    heading: 'Empowering Access to Fresh Produce: Building a Mobile App for Source.ag',
    content: 'Source.ag is an Amsterdam-based agtech startup that is revolutionizing access to fresh produce using cutting-edge AI-powered greenhouses. By enabling efficient operations for growers through pioneering technology...',
    image: '/case_study/1.svg',
    imagePosition: 'right',
    bgColor: 'bg-[#51328F]',
    tagColor: 'bg-[#5E51FE] text-white-800',
    headingColor: 'text-white-800', 
    contentColor: 'text-white-600',
    buttonLink: '/case-study/Kayna-Embedded-Insurance',
    buttonColor: 'text-white-300',
  },
  {
    tag: 'Product Design',
    heading: 'Streamline remote hiring with Pangea.ai`s marketplace',
    content: 'Struggling to find the perfect software development partner? Pangea.ai cuts through the noise. The platform connects businesses with elite development firms, ensuring a perfect match for your project...',
    image: '/case_study/2.svg',
    imagePosition: 'left',
    bgColor: 'bg-[#65E5F2]',
    tagColor: 'bg-[#030438] text-blue-100',
    headingColor: 'text-[#030438]',
    contentColor: 'text-[#030438]',
    buttonColor: 'text-[#030438]',
    buttonLink: '/case-study/1'
  },
  // Add more case studies as needed
];

const CaseStudyPage = () => {
  return (
    <main className="pt-0 px-6 md:px-16 lg:px-0 relative">

      <Breadcrumb 
        title="Case Study" 
        backgroundImage="/Services/services-bg.jpg" 
      />

      <h1 className="text-4xl font-bold text-center my-12">Case Studies</h1>
      
      <div className="space-y-8 ">
  {caseStudies.map((study, index) => (
    <CaseStudyCard
      key={index}
      tag={study.tag}
      tagColor={study.tagColor}
      heading={study.heading}
      headingColor={study.headingColor}
      content={study.content}
      contentColor={study.contentColor}
      bgColor={study.bgColor}
      image={study.image}
      imagePosition={study.imagePosition}
      buttonColor={study.buttonColor}
      buttonLink={study.buttonLink}
    />
  ))}
</div>
    </main>
  );
};

export default CaseStudyPage;
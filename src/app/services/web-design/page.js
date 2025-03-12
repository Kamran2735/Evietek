import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import DynamicContentSection from '@/components/DynamicContentSection';

const WebDesignServicePage = () => {

    const consultationImages = [
        '/images/consultation/meeting.jpg',
        '/images/consultation/discussion.jpg'
      ];
      
      const strategyImages = [
        '/images/strategy/planning.jpg',
        '/images/strategy/timeline.jpg',
        '/images/strategy/tech-stack.jpg'
      ];
      
      const designImages = [
        '/images/design/wireframe.jpg',
        '/images/design/prototype.jpg',
        '/images/design/ui-ux.jpg',
        '/images/design/user-testing.jpg'
      ];
      
      const developmentImages = [
        '/images/development/coding.jpg',
        '/images/development/backend.jpg'
      ];
      
      const testingImages = [
        '/images/testing/qa.jpg',
        '/images/testing/performance.jpg'
      ];
      
      const deploymentImages = [
        '/images/deployment/launch.jpg',
        '/images/deployment/maintenance.jpg'
      ];

      // Image captions
  const consultationTexts = ['Initial Meeting', 'Client Discussion'];
  const strategyTexts = ['Planning Session', 'Project Timeline', 'Technology Selection'];
  const designTexts = ['Wireframing', 'Prototyping', 'UI/UX Design', 'User Testing'];
  const developmentTexts = ['Frontend Development', 'Backend Implementation'];
  const testingTexts = ['Quality Assurance', 'Performance Testing'];
  const deploymentTexts = ['Application Launch', 'Ongoing Maintenance'];


    const endpointSecurityContent = `
    <p>Our Endpoint Security Solutions safeguard all devices connected to your network, including laptops, 
    smartphones, tablets, and servers. By deploying advanced threat detection, real-time monitoring, and 
    proactive defense mechanisms, we ensure your endpoints remain secure against malware, ransomware, 
    phishing, and other cyber threats.</p>
    
    <p>With seamless integration and scalable options, our solutions empower your 
    business to operate safely and efficiently, no matter where your team works.</p>
  `;
  
  const whyChooseContent = `
    <p>Endpoint Security Solutions are essential for protecting your business from ever-evolving cyber threats. 
    By securing every device connected to your network, we provide a robust defense against malware, ransomware, 
    and unauthorized access.</p>
  `;
  
  const featureImages = [
    '/Our_Services/Web/hero1.jpg',
    '/Our_Services/Web/hero2.jpg',
    '/Our_Services/Web/hero1.jpg',
  ];
  
  const featureTexts = [
    'Advanced Threat Detection',
    'Real-Time Monitoring',
    'User-Friendly Interface',
  ];
  
  const sideBySideImage = ['/Our_Services/Web/hero2.jpg'];

    const images = [
        { src: '/Our_Services/Web/hero1.jpg', alt: 'Team collaborating on project' },
        { src: '/Our_Services/Web/hero2.jpg', alt: 'Data analysis dashboard' }
      ];

  return (
    <main className="bg-[#F2F2F5]">  
      <Breadcrumb 
        title="Web Design" 
        backgroundImage="/Services/services-bg.jpg" 
      />
      <div className="container mx-auto px-40 py-10">
      <Carousel images={images} />
    </div>

    <div className="container mx-auto px-40 py-8 space-y-12">
      <h1 className="text-5xl font-bold text-left text-[#030438]">Web Application Development Services by Evietek</h1>
      
      {/* 1: Heading and content (Introduction to Web Application Development Services ) */}
      <DynamicContentSection 
        heading="Introduction to Web Application Development Services"
        content={"In today’s digital world, web applications are essential for businesses. At Evietek, we know that a well-developed web application can enhance user experience and improve operational efficiency. For example, a restaurant can use an online reservation system to streamline bookings and improve customer service. Our web application development services are designed to meet your specific needs and help your business thrive."}
        backgroundColor="#030438"
        headingColor="#ffffff"
        textColor="#ffffff"
      />
      
      {/* 2: Heading, content and Sub-heading (Our Web Application Development Process ) */}
      <DynamicContentSection 
        heading="Our Web Application Development Process"
        content="Our comprehensive web application development process ensures high-quality, tailored solutions that meet your specific business needs. From initial consultation to ongoing maintenance, we provide end-to-end services to bring your vision to life."
        backgroundColor="#030438"
        headingColor="#ffffff"
        textColor="#ffffff"
        padding="p-8"
        contentSections={[
          {
            heading: "Initial Consultation",
            content: "Our process begins with an initial consultation. During this meeting, we discuss your project goals and requirements. If you're launching a new e-commerce platform, we'll explore what features are most important to your customers. Understanding your needs allows us to create a tailored solution that fits perfectly.",
            padding: "px-20"
          },
          {
            heading: "Strategy Development",
            content: "Next, we move into planning and strategy development. This phase includes creating a comprehensive project plan that outlines timelines, resources, and the technology stack we will use. For instance, if you need real-time data processing, we'll choose the right frameworks and tools to ensure optimal performance.",
            padding: "px-20"
          },
          {
            heading: "Design Phase",
            content: "Once the planning is complete, we enter the design phase. Here, we develop wireframes and prototypes to visualize the layout of your application. We focus on user interface (UI) and user experience (UX) design principles to ensure the application is intuitive and easy to navigate. If you want users to find information quickly, our designs will reflect that goal.",
            padding: "px-20"    
        },
          {
            heading: "Development Phase",
            content: "The development phase follows design approval. Our skilled developers build the front end using HTML, CSS, and JavaScript while implementing back-end logic with robust server-side technologies. For example, if you're creating a project management tool, we'll ensure it integrates smoothly with existing systems.",
            padding: "px-20"
        },
          {
            heading: "Testing And Quality Assurance",
            content: "After development, we conduct thorough testing and quality assurance. This step ensures that every feature works correctly and performs well under various conditions. If any issues arise, we address them before deployment. A well-tested application minimizes risks and enhances user satisfaction.",
            padding: "px-20"
        },
          {
            heading: "Deployment And Maintenance",
            content: "Finally, we handle deployment and maintenance. Once everything is ready, we launch your web application and provide ongoing support. This includes updates and optimizations to ensure your application remains relevant as technology evolves.",
            padding: "px-20"
        }
        ]}
      />

      {/* 3: Heading, content and Sub-heading (Types of Web Application Development Services Offered) */}
      <DynamicContentSection 
        heading="Types of Web Application Development Services Offered "
        content="At Evietek, we offer a variety of web application development services tailored to different needs. Our custom web application development creates solutions specifically designed for your business requirements. If you need a unique tool that addresses specific challenges, we can build it from the ground up. "
        backgroundColor="#030438"
        headingColor="#ffffff"
        textColor="#ffffff"
        padding="p-8"
        contentSections={[
          {
            heading: "Progressive Web Apps ",
            content: "We also specialize in progressive web applications (PWAs). These applications provide a native app-like experience on mobile devices while being accessible through a browser. For instance, a travel agency can use a PWA to allow users to book trips directly from their smartphones without needing an app download. ",
            padding: "px-20"
          },
          {
            heading: "SaaS Development",
            content: "Our SaaS development services focus on creating scalable software-as-a-service applications that are easy to access online. If you’re looking to offer subscription-based services, this is the ideal solution.",
            padding: "px-20"
          },
          {
            heading: "E-Commerce Solutions",
            content: "Additionally, we develop e-commerce solutions that include secure payment processing and user-friendly interfaces. This is crucial for businesses looking to expand their online sales. ",
            padding: "px-20"    
        },
                  ]}
      />

            {/* 4: Heading, content and Sub-heading (Benefits of Professional Web Application Development Services ) */}
            <DynamicContentSection 
        heading="Benefits of Professional Web Application Development Services"
        content="Investing in professional web application development offers numerous benefits for your business. First, enhanced user engagement leads to higher customer satisfaction. When users find your application easy to use, they are more likely to return."
        backgroundColor="#030438"
        headingColor="#ffffff"
        textColor="#ffffff"
        padding="p-8"
        contentSections={[
          {
            content: "Second, custom applications improve operational efficiency by automating processes. For example, a logistics company can streamline its operations with a custom tracking system that saves time and reduces errors. ",
          },
          {
            content: "Finally, professional web applications are built with scalability in mind. As your business grows, your application can evolve without requiring major overhauls.",
          },
        ]}
      />

            {/* 5: Heading and content (Get Started with Our Web Application Development Services  ) */}
            <DynamicContentSection 
        heading="Get Started with Our Web Application Development Services "
        content={"Are you ready to elevate your business with a custom web application? At Evietek, we provide tailored solutions designed specifically for your needs. Contact us today for a consultation and let’s work together to create an application that drives success! "}
        backgroundColor="#030438"
        headingColor="#ffffff"
        textColor="#ffffff"
      />

                  {/* 6: Heading and content (Boost Your Business to New Heights with Evietek’s Expert Web Application Development! ) */}
                  <DynamicContentSection 
        heading="Boost Your Business to New Heights with Evietek’s Expert Web Application Development!  "
        content={"In conclusion, investing in professional web application development services is essential for any business aiming for growth in today’s competitive landscape. At Evietek, we are committed to helping you build high-quality applications that enhance user experience and drive results. Let us partner with you on this journey toward success! "}
        backgroundColor="#030438"
        headingColor="#ffffff"
        textColor="#ffffff"
      />

    </div>
   </main>
  );
};

export default WebDesignServicePage;

 
 
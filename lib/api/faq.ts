// api/accordion/data.ts
export interface FaqItem {
    id: string;
    index: string;
    question: string;
    answer: string;
  }
  
  export function fetchFaqData(): FaqItem[] {
    return [
      {
        id: "item-1",
        index: "01",
        question: "How can your cyber security services protect my business?",
        answer: "Our cyber security services provide comprehensive protection through multiple layers of defense. We offer vulnerability assessments, penetration testing, 24/7 monitoring, threat detection, incident response planning, employee security training, and implementation of industry-leading security protocols. Our team stays updated with the latest security trends to ensure your business data remains protected against evolving cyber threats."
      },
      {
        id: "item-2",
        index: "02",
        question: "How long does it take to build a website?",
        answer: "The timeline for website development varies based on complexity, features, and scale. A standard business website typically takes 4-8 weeks from concept to launch, while more complex e-commerce or custom application websites may take 8-16 weeks. We provide detailed timelines during our initial consultation and work closely with you to meet project deadlines while ensuring high-quality results."
      },
      {
        id: "item-3",
        index: "03",
        question: "What technologies do you use for web development, and can you customize features based on my needs?",
        answer: "We use modern web development technologies including React, Next.js, TypeScript, and Tailwind CSS for frontend development, and Node.js, Python, or PHP for backend solutions. Our database expertise includes SQL and NoSQL options. We absolutely customize all features to meet your specific business requirements, ensuring your website not only looks great but also functions exactly how you need it to. Our development approach is always tailored to your unique goals."
      },
      {
        id: "item-4",
        index: "04",
        question: "What kind of businesses can benefit from your website development services?",
        answer: "Our website development services benefit a wide range of businesses across industries. Small businesses looking to establish an online presence, e-commerce companies needing robust shopping platforms, service businesses requiring appointment systems, corporations needing internal tools, and startups launching new products all find value in our tailored approach. We've worked with clients across retail, healthcare, finance, education, hospitality, and technology sectors."
      }
    ];
  }
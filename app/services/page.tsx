import { Container } from "@/components/ui/container"
import { ServiceHeader } from "@/components/service/first-layer/service-header"
import { ServiceCard } from "@/components/service/first-layer/service-card"
import { ContactSection } from "@/components/service/second-layer/section"

export default function ServicesPage() {
  return (
    <>
    <section className="py-12 md:py-16">
      <Container>
        <ServiceHeader
          title="Services"
          description="We provide cutting-edge digital solutions, ensuring your business stays ahead in the ever-evolving digital landscape. From secure web development to AI-powered innovations, we help you build, protect, and scale with confidence."
        />

        <div className="grid gap-8">
          <ServiceCard
            title="Web Development"
            badgeLabel="Web Development"
            description="Our web development services focus on creating high-performance, user-friendly, and secure websites. Whether you need an e-commerce platform, a corporate website, or a custom web application, we ensure a seamless digital experience tailored to your needs."
            imageSrc="/services/web.jpeg"
            imageAlt="Web Development Project Example"
          />

          <ServiceCard
            title="Cyber Security"
            badgeLabel="Cyber Security"
            description="Our cyber security services provide comprehensive protection for your digital assets. We offer vulnerability assessments, penetration testing, security audits, and implementation of robust security measures to safeguard your business from evolving cyber threats."
            imageSrc="/services/cyber.jpeg"
            imageAlt="Cyber Security Visualization"
          />
        </div>
      </Container>
    </section>
    <ContactSection />
    </>
    
  )
}


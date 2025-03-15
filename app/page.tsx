import { HeroSection } from '@/components/landingpage/first-layer/hero-section';
import { HwoWeAre } from '@/components/landingpage/second-layer/who-we-are';
import { Services } from '@/components/landingpage/third-layer/service';
import { ProjectsSection } from '@/components/landingpage/fourth-layer/projects-section';
import { Testimonial } from '@/components/landingpage/fifth-layer/section';
import { Faq } from '@/components/landingpage/sixth-layer/section';
import { Contact } from '@/components/landingpage/seventh-layer/section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HwoWeAre />
      <Services />
      <ProjectsSection />
      <Testimonial />
      <Faq />
      <Contact />
    </main>
  );
}

import { AboutUsSection } from "@/components/about-us/first-layer/section"
import { MissionSection } from "@/components/about-us/second-layer/section"
import { TrustSection } from "@/components/about-us/third-layer/section"
import { CallToActionSection } from "@/components/about-us/fourth-layer/section"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <AboutUsSection />
      <MissionSection />
      <TrustSection />
      <CallToActionSection />
    </div>
  )
}
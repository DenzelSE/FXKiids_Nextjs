import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { PricingSection } from "@/components/pricing-section"
import { PartnersSection } from "@/components/partners-section"
import { SocialSection } from "@/components/social-section"
import { VVIPSection } from "@/components/vvip-section"
import { CommunitySection } from "@/components/community-section"
import { ContactSection } from "@/components/conctact-section"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <PricingSection />
      <PartnersSection />
      <SocialSection />
      <VVIPSection />
      <CommunitySection />
      <ContactSection />
      <Footer />
    </main>
  )
}

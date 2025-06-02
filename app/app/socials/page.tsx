import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SocialSection } from "@/components/social-section"
import { CommunitySection } from "@/components/community-section"

export default function SocialsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-20">
        <SocialSection />
        <CommunitySection />
      </div>
      <Footer />
    </main>
  )
}

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/charts.jpg"
          alt="Trading Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-2">
          <Image
            src="/fxKiids.png"
            alt="FXKIIDS Logo"
            width={600}
            height={220}
            className="mx-auto mb-0"
            priority
          />
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Building the next generation of creative talent through premium courses, mentorship, and inspiration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/courses">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
              Explore Courses
            </Button>
          </Link>
          <Link href="/vvip">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
            >
              Connect Wallet
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

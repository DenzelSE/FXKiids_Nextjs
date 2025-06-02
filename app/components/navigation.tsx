import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Crown } from "lucide-react"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/fxKiids.png"
              alt="FXKIIDS"
              width={120}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link href="/courses" className="text-white hover:text-red-500 transition-colors">
              Courses
            </Link>
            <Link href="/socials" className="text-white hover:text-red-500 transition-colors">
              Socials
            </Link>
            <Link href="/testimonials" className="text-white hover:text-red-500 transition-colors">
              Testimonials
            </Link>
            <Link href="/vvip" className="text-white hover:text-red-500 transition-colors flex items-center gap-2">
              <Crown className="w-4 h-4" />
              VVIP Access
            </Link>
          </div>

          <Button className="bg-red-500 hover:bg-red-600 text-white">Contact Us</Button>
        </div>
      </div>
    </nav>
  )
}

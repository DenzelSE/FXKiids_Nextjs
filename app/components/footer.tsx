import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/fxKiids.png" alt="FXKIIDS" width={160} height={48} className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 mb-6">
              Building the next generation of creative talent through premium courses, mentorship, and inspiration.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-red-500">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/socials" className="text-gray-400 hover:text-red-500">
                  Socials
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-red-500">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/vvip" className="text-gray-400 hover:text-red-500">
                  VVIP Access
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-gray-700"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-gray-700"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-gray-700"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 FXKIIDS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

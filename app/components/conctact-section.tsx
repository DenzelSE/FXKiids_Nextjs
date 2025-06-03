import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/placeholder.svg?height=800&width=1920" alt="Contact Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">GET IN TOUCH</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-6" />
          <p className="text-lg text-gray-300">Have questions or want to collaborate? Reach out to us.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-gray-800/90 backdrop-blur-sm border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-300">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">info@fxkiids.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-gray-300">123 Creative Way</p>
                  <p className="text-gray-300">Innovation District</p>
                  <p className="text-gray-300">Trendy City, TC 10001</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/90 backdrop-blur-sm border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm mb-2 block">Name</label>
                    <Input
                      placeholder="Your Name"
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white text-sm mb-2 block">Subject</label>
                  <Input
                    placeholder="How can we help?"
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="text-white text-sm mb-2 block">Message</label>
                  <Textarea
                    placeholder="Your message here..."
                    rows={6}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

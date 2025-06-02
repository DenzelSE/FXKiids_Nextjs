import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export function SocialSection() {
  const socials = [
    {
      platform: "Instagram",
      handle: "@fxkiids",
      icon: <Instagram className="w-8 h-8" />,
      color: "text-pink-500",
    },
    {
      platform: "Twitter",
      handle: "@fxkiids",
      icon: <Twitter className="w-8 h-8" />,
      color: "text-blue-400",
    },
    {
      platform: "Facebook",
      handle: "FXKIIDS",
      icon: <Facebook className="w-8 h-8" />,
      color: "text-blue-600",
    },
    {
      platform: "YouTube",
      handle: "FXKIIDS Channel",
      icon: <Youtube className="w-8 h-8" />,
      color: "text-red-500",
    },
  ]

  return (
    <section id="socials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">CONNECT WITH US</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Follow our social channels to stay updated on our latest projects and events.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {socials.map((social, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 text-center">
              <CardHeader>
                <div className={`mx-auto mb-4 ${social.color}`}>{social.icon}</div>
                <CardTitle className="text-white text-xl">{social.platform}</CardTitle>
                <p className="text-gray-400">{social.handle}</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                  Follow Us
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

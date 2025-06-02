import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, Shield, Star, Users, Video, MessageCircle } from "lucide-react"

export default function VVIPPage() {
  const benefits = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Exclusive Access",
      description: "Access to premium content and advanced trading strategies not available to regular members.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Private Community",
      description: "Join an elite community of serious traders and get direct access to mentors and experts.",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Live Sessions",
      description: "Weekly live trading sessions with professional traders and real-time market analysis.",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "1-on-1 Mentorship",
      description: "Personal mentorship sessions with experienced traders to accelerate your learning.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Priority Support",
      description: "Get priority customer support and faster response times for all your questions.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Early Access",
      description: "Be the first to access new courses, tools, and features before they're released to the public.",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Crown className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">VVIP ACCESS</h1>
            <div className="w-16 h-1 bg-red-500 mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Unlock exclusive premium content and join an elite community of serious traders with our VVIP membership.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-16">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">VVIP Access Required</h2>
                <p className="text-gray-300 mb-8">Connect your wallet to verify your VVIP membership NFT</p>
                <Button className="bg-red-500 hover:bg-red-600 text-white mb-6">Connect Wallet</Button>
                <p className="text-gray-400 text-sm">
                  {"Don't have a VVIP membership NFT yet? "}
                  <a href="#benefits" className="text-red-500 hover:text-red-400 underline">
                    Learn how to get one
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          <div id="benefits" className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">VVIP Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <div className="text-red-500 mb-4">{benefit.icon}</div>
                    <CardTitle className="text-white text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Card className="bg-gradient-to-r from-red-500 to-red-600 border-0 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Join the Elite?</h2>
                <p className="text-white/90 mb-8 text-lg">
                  VVIP membership is limited and exclusive. Secure your spot in our elite trading community today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100">
                    Get VVIP Access
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-red-500"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

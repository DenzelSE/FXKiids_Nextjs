import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Award, TrendingUp } from "lucide-react"

export function AboutSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "10,000+",
      label: "Active Students",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "50+",
      label: "Expert Instructors",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "95%",
      label: "Success Rate",
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "24/7",
      label: "Support Available",
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">ABOUT FXKIIDS</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We are dedicated to empowering the next generation of traders and creatives through comprehensive education,
            mentorship, and cutting-edge resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-gray-300 mb-6">
              At FXKIIDS, we believe that everyone deserves access to high-quality trading education. Our mission is to
              democratize financial education and provide the tools, knowledge, and support needed to succeed in today's
              competitive markets.
            </p>
            <p className="text-gray-300">
              Through our comprehensive courses, expert mentorship, and vibrant community, we've helped thousands of
              students transform their financial futures and achieve their trading goals.
            </p>
          </div>
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-red-500 mb-4">FX</div>
              <div className="text-2xl text-white">Building Futures</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="text-red-500 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

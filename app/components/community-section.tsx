import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, MessageCircle, FileText } from "lucide-react"

export function CommunitySection() {
  const features = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Weekly Live Sessions",
      description:
        "Join our interactive live streams where we discuss market trends, answer questions, and provide insights.",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Community Forum",
      description:
        "Connect with fellow traders and creatives, share ideas, and build your network in our private forum.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Exclusive Content",
      description: "Get early access to tutorials, market insights, and creative inspiration before anyone else.",
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Be part of our growing community of traders and creatives. Get exclusive content, early announcements, and
            special opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="text-red-500 mb-4">{feature.icon}</div>
                <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

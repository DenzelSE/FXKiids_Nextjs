import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      title: "Basic Trading Course",
      price: "$299",
      badge: null,
      features: ["15 video lessons", "Trading strategies", "Market analysis", "Basic support"],
    },
    {
      title: "Advanced Trading",
      price: "$399",
      badge: null,
      features: [
        "25 video lessons",
        "Advanced strategies",
        "Live market sessions",
        "Weekly live Q&A",
        "Priority support",
      ],
    },
    {
      title: "VVIP Advanced Trading Strategies",
      price: "$349",
      badge: "NFT Required",
      features: [
        "Elite training covering advanced trading methods",
        "Institutional tactics and mentorship",
        "NFT required for access",
        "Exclusive community",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 relative">
              {plan.badge && <Badge className="absolute -top-3 left-6 bg-red-500 text-white">{plan.badge}</Badge>}
              <CardHeader>
                <CardTitle className="text-white text-xl mb-4">{plan.title}</CardTitle>
                <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                <p className="text-gray-400">Lifetime access</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Enroll Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Synthetic Assets Trading</h3>
              <p className="text-gray-300 mb-6">
                Learn how to trade synthetic assets in modern digital markets with specialized techniques.
              </p>
              <div className="flex items-center text-gray-300 mb-4">
                <Check className="w-4 h-4 text-green-500 mr-3" />
                22 video lessons
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Grid3X3, Settings, Zap } from "lucide-react"
import Image from "next/image"

export function ProductsSection() {
  const products = [
    {
      icon: <Grid3X3 className="w-8 h-8" />,
      title: "The Codes",
      description: "Comprehensive trading course—learn strategies, tools, and secrets to excel in the markets.",
      link: "Learn more",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "VVIP Course",
      description:
        "Elite advanced trading training for members with NFT access, covering exclusive methods and mentorship.",
      link: "Learn more",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Synthetics Course",
      description: "Master synthetic trading assets—explore techniques tailored for modern digital markets.",
      link: "Learn more",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/pcCharts.jpg" alt="Products Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/25" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">OUR PRODUCTS</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-6" />
          <p className="text-lg text-black max-w-3xl mx-auto">
            Premium trading courses designed for all levels—unlock your potential with our innovative programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow border-0"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center text-red-500 mb-4">
                  {product.icon}
                </div>
                <CardTitle className="text-3xl font-bold text-black">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-xl mb-6">{product.description}</CardDescription>
                <Button variant="link" className="text-red-500 hover:text-red-600 p-0">
                  {product.link} →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

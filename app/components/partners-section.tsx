import { Card, CardContent } from "@/components/ui/card"

export function PartnersSection() {
  const partners = [
    {
      name: "TradeTech",
      description: "Advanced trading technology solutions",
    },
    {
      name: "AlphaSignals",
      description: "Professional trading signals and analytics",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">OUR PARTNERS</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We collaborate with top trading and technology partners to deliver outstanding value to our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{partner.name}</h3>
                <p className="text-gray-300">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

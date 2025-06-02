import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Day Trader",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "FXKIIDS completely transformed my trading approach. The strategies I learned helped me achieve consistent profits and better risk management. The community support is incredible!",
    },
    {
      name: "Michael Chen",
      role: "Forex Trader",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The technical analysis course was a game-changer for me. I went from losing money to making consistent profits within 3 months of completing the program.",
    },
    {
      name: "Emily Rodriguez",
      role: "Swing Trader",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The psychology and risk management modules helped me overcome my emotional trading habits. I'm now a much more disciplined and profitable trader.",
    },
    {
      name: "David Thompson",
      role: "Crypto Trader",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "VVIP access gave me insights I couldn't find anywhere else. The mentorship and exclusive content are worth every penny. Highly recommended!",
    },
    {
      name: "Lisa Wang",
      role: "Options Trader",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The step-by-step approach and practical examples made complex trading concepts easy to understand. I've increased my success rate by 70%.",
    },
    {
      name: "James Miller",
      role: "Institutional Trader",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Even as an experienced trader, I learned new strategies and techniques that improved my performance. The quality of education is top-notch.",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Successful Students" },
    { number: "95%", label: "Success Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "50+", label: "Countries Reached" },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">TESTIMONIALS</h1>
            <div className="w-16 h-1 bg-red-500 mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Hear from our successful students who have transformed their trading careers with FXKIIDS.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-red-500 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-red-500 mr-4" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>

                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-red-500 to-red-600 border-0 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h2>
                <p className="text-white/90 mb-8 text-lg">
                  Start your trading journey today and become our next success story.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-red-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
                    Start Learning Today
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-red-500 px-8 py-3 rounded-lg font-semibold">
                    View Courses
                  </button>
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

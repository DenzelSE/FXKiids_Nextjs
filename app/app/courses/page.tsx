import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Star, Clock, Check } from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      id: "trading-foundation",
      title: "The Codes: Trading Strategy",
      description: "Learn the foundations of successful trading strategies, technical analysis, and market psychology.",
      price: "R1300",
      students: "547",
      rating: "4.8",
      duration: "2 weeks",
      level: "Beginner",
      features: ["The codes steups", "Telegram Community access"],
      image: "/charts.jpg",
      isVVIP: false,
    },
    {
      id: "vvip-advanced",
      title: "VVIP Mentorship",
      description:
        "Elite training covering advanced trading methods, institutional tactics, and mentorship (NFT required).",
      price: "R2000",
      students: "342",
      rating: "5.0",
      duration: "12 weeks",
      level: "Expert",
      features: ["Video lessons", "unlimited One-on-one mentoring", "Support group"],
      image: "/vvip.jpg",
      isVVIP: true,
    },
    {
      id: "synthetic-assets",
      title: "Synthetic Assets Trading",
      description: "Learn how to trade synthetic assets in modern digital markets with specialized techniques.",
      price: "R2000",
      students: "892",
      rating: "4.6",
      duration: "8 weeks",
      level: "Advanced",
      features: ["22 video lessons", "Market simulation access", "Strategy templates"],
      image: "/synthetics.jpg",
      isVVIP: false,
    },
  ]

  const filters = ["All Courses", "Beginner", "Intermediate", "Advanced"]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section for Courses */}
      <section className="pt-24 pb-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">OUR COURSES</h1>
            <div className="w-16 h-1 bg-red-500 mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Premium trading and creative courses designed to help you excel in today's competitive markets.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter, index) => (
              <Button
                key={index}
                className={
                  index === 0
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "border-gray-600 text-white hover:bg-gray-800"
                }
                variant={index === 0 ? "default" : "outline"}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="bg-gray-800 border-gray-700 overflow-hidden">
                <div className="aspect-video bg-gray-700 relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-blue-500 text-white">{course.level}</Badge>
                    {course.isVVIP && <Badge className="bg-red-500 text-white">NFT Required</Badge>}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                  <p className="text-gray-300 mb-4">{course.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      {course.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                  </div>

                  <div className="mb-6">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-green-400 text-sm mb-2">
                        <Check className="w-4 h-4 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-white">{course.price}</span>
                      <span className="text-gray-400 text-sm ml-2">Lifetime access</span>
                    </div>
                  </div>

                  <Link href={`/courses/${course.id}`} className="block">
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white">View Course</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Course Information */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose FXKIIDS Courses?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our comprehensive trading education platform offers everything you need to succeed in the financial
              markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Instructors</h3>
                <p className="text-gray-300">
                  Learn from professional traders with years of market experience and proven track records.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300">
                  Our students consistently achieve better trading results with our structured learning approach.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Lifetime Access</h3>
                <p className="text-gray-300">
                  Get unlimited access to all course materials and updates for life, ensuring you stay current.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

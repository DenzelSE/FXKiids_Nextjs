import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CoursesSection } from "@/components/courses-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Star, Clock } from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      id: "trading-foundation",
      title: "The Codes: Trading Foundation",
      description: "Learn the foundations of successful trading strategies, technical analysis, and market psychology.",
      price: "$299",
      students: "2,847",
      rating: "4.8",
      duration: "8 weeks",
      level: "Beginner",
      lessons: "24 video lessons",
      features: ["Trading workbook", "Community access", "Lifetime access"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "technical-analysis",
      title: "Technical Analysis Mastery",
      description:
        "Master the art of chart reading, pattern recognition, and technical indicators for better trading decisions.",
      price: "$399",
      students: "1,923",
      rating: "4.9",
      duration: "10 weeks",
      level: "Intermediate",
      lessons: "18 video lessons",
      features: ["Practice exercises", "Weekly live Q&A", "Lifetime access"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "risk-management",
      title: "Risk Management & Psychology",
      description: "Develop a robust risk management framework and understand the psychological aspects of trading.",
      price: "$349",
      students: "1,456",
      rating: "4.7",
      duration: "6 weeks",
      level: "Advanced",
      lessons: "16 video lessons",
      features: ["Risk calculator tool", "Case studies", "Lifetime access"],
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

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

      {/* Courses Section Component */}
      <CoursesSection />

      {/* Detailed Course Cards */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Course Details</h2>
            <p className="text-gray-300">Explore our comprehensive course offerings with detailed information</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="bg-gray-800 border-gray-700 overflow-hidden">
                <div className="aspect-video bg-gray-700 relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">{course.level}</Badge>
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

                  <div className="mb-4">
                    <p className="text-green-400 text-sm mb-2">✓ {course.lessons}</p>
                    {course.features.map((feature, index) => (
                      <p key={index} className="text-green-400 text-sm">
                        ✓ {feature}
                      </p>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">{course.price}</span>
                      <span className="text-gray-400 text-sm ml-2">Lifetime access</span>
                    </div>
                    <Link href={`/courses/${course.id}`}>
                      <Button className="bg-red-500 hover:bg-red-600 text-white">View Course</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

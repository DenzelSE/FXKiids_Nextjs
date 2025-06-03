import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Star, Clock, Play, Download, Users2, Video } from "lucide-react"

interface CoursePageProps {
  params: {
    id: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  
  const course = {
    title: "The Codes: Trading Strategy",
    description: "Learn the foundations of successful trading strategies, technical analysis, and market psychology.",
    price: "R1300",
    students: "500",
    rating: "4.8/5",
    duration: "2 weeks",
    level: "Beginner",
    language: "English",
    instructor: "FX Trading Expert",
  }

  const modules = [
    {
      title: "Module: The Codes",
      lessons: ["What are the Codes?", "Market Basics", "Trading setups", "Setting Up Your Trading Environment", "Fibs setups, Plutonic Swing to Swing setups",
        "Trading News using the Codes", "Risk Management"
      ],
    }
  ]

  const benefits = [
    { icon: <Download className="w-5 h-5" />, text: "Downloadable resources" },
    { icon: <Users2 className="w-5 h-5" />, text: "Community access" },
    { icon: <Video className="w-5 h-5" />, text: "HD video content" },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link href="/courses" className="inline-flex items-center text-red-500 hover:text-red-400 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-gray-800 border-gray-700 mb-8">
                <CardContent className="p-8">
                  <h1 className="text-3xl font-bold text-white mb-4">{course.title}</h1>
                  <p className="text-gray-300 mb-6">{course.description}</p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge className="bg-gray-700 text-white flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {course.students} students
                    </Badge>
                    <Badge className="bg-yellow-500 text-black flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      {course.rating}
                    </Badge>
                    <Badge className="bg-blue-500 text-white">{course.level}</Badge>
                    <Badge className="bg-green-500 text-white flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </Badge>
                  </div>

                  <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                    <Button className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      Watch Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Course Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {modules.map((module, index) => (
                      <div key={index} className="border border-gray-700 rounded-lg">
                        <div className="bg-gray-700 p-4 rounded-t-lg">
                          <h3 className="text-white font-semibold">{module.title}</h3>
                        </div>
                        <div className="p-4 space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="flex items-center text-gray-300">
                              <Play className="w-4 h-4 text-red-500 mr-3" />
                              {lesson}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-gray-800 border-gray-700 sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-white mb-2">{course.price}</div>
                    <div className="text-gray-400">Lifetime access</div>
                  </div>

                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white mb-6">Enroll Now</Button>

                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Instructor:</span>
                      <span className="text-white">{course.instructor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Level:</span>
                      <span className="text-white">{course.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Language:</span>
                      <span className="text-white">{course.language}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <h4 className="text-white font-semibold mb-4">What you'll get:</h4>
                    <div className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <div className="text-green-500 mr-3">{benefit.icon}</div>
                          {benefit.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

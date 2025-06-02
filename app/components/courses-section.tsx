import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CoursesSection() {
  const courses = [
    {
      number: "1",
      title: "The Codes: Trading Foundation",
      description: "Master the fundamentals of trading with comprehensive strategies and market analysis.",
    },
    {
      number: "2",
      title: "Technical Analysis Mastery",
      description: "Advanced technical analysis techniques for professional trading decisions.",
    },
    {
      number: "3",
      title: "Risk Management & Psychology",
      description: "Essential risk management and trading psychology for consistent profits.",
    },
  ]

  return (
    <section id="courses" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">OUR COURSES</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Premium trading and creative courses designed to help you excel in today's competitive markets.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button className="bg-red-500 hover:bg-red-600 text-white">All Courses</Button>
          <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
            Beginner
          </Button>
          <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
            Intermediate
          </Button>
          <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
            Advanced
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
              <div className="aspect-video bg-gray-700 flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-600">{course.number}</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                <p className="text-gray-300">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

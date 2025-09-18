import { Button } from "@/components/ui/button"
import { MapPin, Plane, Camera, Heart, ArrowRight } from "lucide-react"

interface ComingSoonProps {
  cityName: string
}

export default function ComingSoon({ cityName }: ComingSoonProps) {
  const formatCityName = (city: string) => {
    return city
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const formattedCityName = formatCityName(cityName)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/--encodeuricomponent--beautiful-scenic-view-of---f.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 via-cyan-700/70 to-slate-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Floating Icons Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce delay-100">
            <Plane className="w-8 h-8 text-white/30" />
          </div>
          <div className="absolute top-40 right-20 animate-bounce delay-300">
            <Camera className="w-6 h-6 text-orange-300/40" />
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce delay-500">
            <MapPin className="w-7 h-7 text-white/25" />
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce delay-700">
            <Heart className="w-5 h-5 text-orange-300/30" />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <MapPin className="w-4 h-4 text-orange-300" />
              <span className="text-white/90 text-sm font-medium">Coming Soon</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Itinerary for{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text">
                {formattedCityName}
              </span>{" "}
              is coming soon
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Get ready to explore the wonders of this incredible destination! We're crafting the perfect itinerary just
              for you.
            </p>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
            >
              Notify Me When Ready
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <p className="text-white/70 text-sm">Be the first to know when we unveil the complete itinerary!</p>
          </div>

          {/* Feature Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-orange-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">Curated Locations</h3>
              <p className="text-white/70 text-sm">Hand-picked destinations and hidden gems</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                <Plane className="w-6 h-6 text-orange-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">Travel Tips</h3>
              <p className="text-white/70 text-sm">Expert advice and local insights</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-orange-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">Photo Spots</h3>
              <p className="text-white/70 text-sm">Instagram-worthy locations and timing</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-white/60 text-sm">Meanwhile, explore our other amazing destinations</p>
        </div>
      </div>
    </div>
  )
}

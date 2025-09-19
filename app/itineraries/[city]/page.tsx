import {
  ChevronDown,
  MapPin,
  Plane,
  Hotel,
  Utensils,
  Train,
  ShoppingBag,
  AlertTriangle,
  Check,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import ComingSoon from "@/components/coming-soon"
import { getItinerary } from "@/lib/itineraries";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  plane: Plane,
  hotel: Hotel,
  mapPin: MapPin,
  utensils: Utensils,
  train: Train,
  shoppingBag: ShoppingBag,
  alertTriangle: AlertTriangle,
};

export default async function CityItineraryPage({ params }: { params: { city: string } }) {
  const citySlug = params.city;
  const cityData = await getItinerary(citySlug);

  if (!cityData) {
    return <ComingSoon cityName={params.city} />
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 bg-slate-900 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${cityData.heroImage}')`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-2 drop-shadow-lg">{cityData.title}</h1>
          <p className="text-2xl md:text-3xl mb-4 text-orange-300">{cityData.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {cityData.hashtags.map((tag, index) => (
              <span key={index} className="text-lg text-blue-200">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xl text-gray-300">{cityData.dates}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Daily Itinerary */}
            <div className="space-y-4">
              {cityData.days.map((day, index) => (
                <details key={index} className="group bg-white rounded-lg shadow-md border">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                    <h3 className="text-xl font-bold text-slate-900">{day.title}</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        {/* Activities */}
                        <div className="space-y-4 mb-6">
                          {day.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex items-center gap-3">
                              {(() => {
                                const Icon = ICON_MAP[activity.icon] ?? MapPin;
                                return <Icon className="w-5 h-5 text-slate-600" />;
                              })()}
                              <div>
                                <span className="font-medium text-slate-900">{activity.title}</span>
                                <span className="text-gray-500 ml-2">{activity.time}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Travel Tip */}
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-slate-900 mb-2">Travel Tip</h4>
                          <p className="text-gray-700">{day.tip}</p>
                        </div>
                      </div>

                      {/* Day Image */}
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src={`${day.image}?query=${encodeURIComponent(`${cityData.title} ${day.title} travel photography`)}`}
                          alt={day.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recommendations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Recommendations</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <Hotel className="w-4 h-4" />
                    Where I Stayed
                  </h4>
                  <p className="text-gray-700">{cityData.recommendations.hotel}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <Utensils className="w-4 h-4" />
                    Must Try Food
                  </h4>
                  <p className="text-gray-700">{cityData.recommendations.food}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <Train className="w-4 h-4" />
                    Transport Tips
                  </h4>
                  <p className="text-gray-700">{cityData.recommendations.transport}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Things to Buy
                  </h4>
                  <p className="text-gray-700">{cityData.recommendations.shopping}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    What to Avoid
                  </h4>
                  <p className="text-gray-700">{cityData.recommendations.avoid}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-400" />
              </div>
            </div>

            {/* Packing Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Packing Tips</h3>
              <div className="space-y-2">
                {cityData.packingTips.map((tip, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download PDF */}
            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Photo Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cityData.gallery.map((image, index) => (
              <div key={index} className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={`${image}?query=${encodeURIComponent(`${cityData.title} travel photography landmarks`)}`}
                  alt={`${cityData.title} gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import { notFound } from "next/navigation"
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

const itineraryData = {
  paris: {
    title: "PARIS",
    subtitle: "My 5-Day Itinerary",
    hashtags: ["#SoloTravel", "#Photography", "#BudgetTrip"],
    dates: "July 5 - 10, 2024",
    heroImage: "/destinations/paris-hero.jpg",
    days: [
      {
        title: "Day 1: Arrival & Montmartre",
        activities: [
          { icon: Plane, title: "Arrival", time: "10:00 AM" },
          { icon: Hotel, title: "Check in", time: "2:00 PM" },
          { icon: MapPin, title: "Sacre-Cœur Basilica", time: "4:00 PM" },
          { icon: MapPin, title: "Place du Tertre", time: "6:00 PM" },
        ],
        tip: "Wear comfortable shoes for exploring the cobblestone streets of Montmartre.",
        image: "/destinations/paris-montmartre.jpg",
      },
      {
        title: "Day 2: Louvre & Seine Cruise",
        activities: [
          { icon: MapPin, title: "Louvre Museum", time: "9:00 AM" },
          { icon: Utensils, title: "Lunch at Café Marly", time: "1:00 PM" },
          { icon: MapPin, title: "Seine River Cruise", time: "4:00 PM" },
        ],
        tip: "Book Louvre tickets online in advance to skip the lines.",
        image: "/destinations/paris-louvre.jpg",
      },
      {
        title: "Day 3: Notre-Dame & Latin Quarter",
        activities: [
          { icon: MapPin, title: "Notre-Dame Cathedral", time: "10:00 AM" },
          { icon: MapPin, title: "Sainte-Chapelle", time: "12:00 PM" },
          { icon: MapPin, title: "Latin Quarter Walk", time: "3:00 PM" },
        ],
        tip: "Explore the narrow streets and bookshops of the Latin Quarter.",
        image: "/destinations/paris-notre-dame.jpg",
      },
      {
        title: "Day 4: Orsay Museum & Champs-Élysées",
        activities: [
          { icon: MapPin, title: "Musée d'Orsay", time: "9:30 AM" },
          { icon: MapPin, title: "Champs-Élysées", time: "2:00 PM" },
          { icon: MapPin, title: "Arc de Triomphe", time: "4:00 PM" },
        ],
        tip: "Visit Orsay Museum early to avoid crowds and see the best Impressionist collection.",
        image: "/destinations/paris-orsay.jpg",
      },
      {
        title: "Day 5: Eiffel Tower & Departure",
        activities: [
          { icon: MapPin, title: "Eiffel Tower", time: "8:00 AM" },
          { icon: Utensils, title: "Farewell Brunch", time: "11:00 AM" },
          { icon: Plane, title: "Departure", time: "3:00 PM" },
        ],
        tip: "Visit Eiffel Tower early morning for the best photos with fewer crowds.",
        image: "/destinations/paris-eiffel.jpg",
      },
    ],
    recommendations: {
      hotel: "Hotel Montmartre Mon Amour €120/night",
      food: "Croissant – Du Pain et des Idées",
      transport: "Get a Paris Visite metro pass",
      shopping: "Shop for souvenirs at Marché aux Puces",
      avoid: "Skip long queues at Eiffel Tower by booking in advance",
    },
    packingTips: ["Light jacket", "Comfortable shoes", "Travel adapter"],
    gallery: [
      "/destinations/paris-gallery-1.jpg",
      "/destinations/paris-gallery-2.jpg",
      "/destinations/paris-gallery-3.jpg",
    ],
  },
  venice: {
    title: "VENICE",
    subtitle: "My 4-Day Romantic Getaway",
    hashtags: ["#Romance", "#Architecture", "#Canals"],
    dates: "September 15 - 18, 2024",
    heroImage: "/destinations/venice-hero.jpg",
    days: [
      {
        title: "Day 1: Arrival & St. Mark's Square",
        activities: [
          { icon: Plane, title: "Arrival at Marco Polo", time: "11:00 AM" },
          { icon: Hotel, title: "Check in", time: "3:00 PM" },
          { icon: MapPin, title: "St. Mark's Square", time: "5:00 PM" },
          { icon: MapPin, title: "St. Mark's Basilica", time: "6:30 PM" },
        ],
        tip: "Take the water bus from the airport for a scenic arrival into Venice.",
        image: "/destinations/venice-stmarks.jpg",
      },
    ],
    recommendations: {
      hotel: "Hotel Danieli €200/night",
      food: "Cicchetti at Osteria alle Testiere",
      transport: "Buy a vaporetto day pass",
      shopping: "Murano glass at local artisan shops",
      avoid: "Avoid tourist restaurants near St. Mark's Square",
    },
    packingTips: ["Waterproof shoes", "Light layers", "Camera"],
    gallery: ["/destinations/venice-gallery-1.jpg"],
  },
}

export default function CityItineraryPage({ params }: { params: { city: string } }) {
  const cityData = itineraryData[params.city as keyof typeof itineraryData]

  if (!cityData) {
    notFound()
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
                              <activity.icon className="w-5 h-5 text-slate-600" />
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

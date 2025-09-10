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
  vietnam: {
    title: "VIETNAM",
    subtitle: "My 7-Day Adventure",
    hashtags: ["#Culture", "#Food", "#Adventure"],
    dates: "March 10 - 16, 2024",
    heroImage: "/ha-long-bay.png",
    days: [
      {
        title: "Day 1: Arrival in Hanoi",
        activities: [
          { icon: Plane, title: "Arrival in Hanoi", time: "2:00 PM" },
          { icon: Hotel, title: "Check in Old Quarter", time: "4:00 PM" },
          { icon: MapPin, title: "Hoan Kiem Lake", time: "6:00 PM" },
          { icon: Utensils, title: "Street Food Tour", time: "8:00 PM" },
        ],
        tip: "Try the famous pho and banh mi from street vendors in the Old Quarter.",
        image: "/destinations/vietnam-hanoi.jpg",
      },
      {
        title: "Day 2-3: Ha Long Bay Cruise",
        activities: [
          { icon: MapPin, title: "Ha Long Bay Cruise", time: "8:00 AM" },
          { icon: MapPin, title: "Kayaking & Swimming", time: "2:00 PM" },
          { icon: Hotel, title: "Overnight on Boat", time: "8:00 PM" },
        ],
        tip: "Book a 2-day cruise to fully experience the limestone karsts and emerald waters.",
        image: "/destinations/vietnam-halong.jpg",
      },
    ],
    recommendations: {
      hotel: "Hanoi La Siesta Hotel & Spa $80/night",
      food: "Bun Cha at Bun Cha Huong Lien",
      transport: "Use Grab for city transport",
      shopping: "Dong Xuan Market for souvenirs",
      avoid: "Avoid tourist traps in the Old Quarter",
    },
    packingTips: ["Light rain jacket", "Comfortable walking shoes", "Mosquito repellent"],
    gallery: ["/destinations/vietnam-gallery-1.jpg", "/destinations/vietnam-gallery-2.jpg"],
  },
  tibet: {
    title: "TIBET",
    subtitle: "My 6-Day Spiritual Journey",
    hashtags: ["#Spiritual", "#Mountains", "#Culture"],
    dates: "August 5 - 10, 2024",
    heroImage: "/mountain-monastery-tibet.jpg",
    days: [
      {
        title: "Day 1: Arrival in Lhasa",
        activities: [
          { icon: Plane, title: "Arrival in Lhasa", time: "11:00 AM" },
          { icon: Hotel, title: "Acclimatization Rest", time: "2:00 PM" },
          { icon: MapPin, title: "Barkhor Street", time: "5:00 PM" },
        ],
        tip: "Take it easy on the first day to acclimatize to the high altitude (3,650m).",
        image: "/destinations/tibet-lhasa.jpg",
      },
      {
        title: "Day 2: Potala Palace",
        activities: [
          { icon: MapPin, title: "Potala Palace", time: "9:00 AM" },
          { icon: MapPin, title: "Jokhang Temple", time: "2:00 PM" },
          { icon: Utensils, title: "Traditional Tibetan Dinner", time: "7:00 PM" },
        ],
        tip: "Book Potala Palace tickets in advance as they're limited daily.",
        image: "/destinations/tibet-potala.jpg",
      },
    ],
    recommendations: {
      hotel: "Shangri-La Hotel Lhasa $150/night",
      food: "Yak butter tea and momos",
      transport: "Hire a local guide with vehicle",
      shopping: "Tibetan handicrafts at Barkhor Street",
      avoid: "Avoid strenuous activities on first 2 days",
    },
    packingTips: ["Warm layers", "Altitude sickness medication", "Sun protection"],
    gallery: ["/destinations/tibet-gallery-1.jpg", "/destinations/tibet-gallery-2.jpg"],
  },
  london: {
    title: "LONDON",
    subtitle: "My 5-Day Classic Tour",
    hashtags: ["#History", "#Culture", "#Royalty"],
    dates: "June 20 - 24, 2024",
    heroImage: "/tower-bridge-london-uk.jpg",
    days: [
      {
        title: "Day 1: Westminster & Big Ben",
        activities: [
          { icon: Plane, title: "Arrival at Heathrow", time: "10:00 AM" },
          { icon: Hotel, title: "Check in Central London", time: "2:00 PM" },
          { icon: MapPin, title: "Westminster Abbey", time: "4:00 PM" },
          { icon: MapPin, title: "Big Ben & Parliament", time: "6:00 PM" },
        ],
        tip: "Get an Oyster Card for easy transport around London.",
        image: "/destinations/london-westminster.jpg",
      },
      {
        title: "Day 2: Tower of London & Thames",
        activities: [
          { icon: MapPin, title: "Tower of London", time: "9:00 AM" },
          { icon: MapPin, title: "Tower Bridge", time: "12:00 PM" },
          { icon: MapPin, title: "Thames River Cruise", time: "3:00 PM" },
        ],
        tip: "Book Tower of London tickets online to skip the queues.",
        image: "/destinations/london-tower.jpg",
      },
    ],
    recommendations: {
      hotel: "The Zetter Townhouse £180/night",
      food: "Fish and chips at Poppies",
      transport: "London Underground with Oyster Card",
      shopping: "Harrods and Oxford Street",
      avoid: "Avoid rush hours on the Tube (8-9am, 5-6pm)",
    },
    packingTips: ["Umbrella", "Comfortable walking shoes", "Layers for weather"],
    gallery: ["/destinations/london-gallery-1.jpg", "/destinations/london-gallery-2.jpg"],
  },
  "mount-fuji": {
    title: "MOUNT FUJI",
    subtitle: "My 4-Day Cherry Blossom Experience",
    hashtags: ["#Nature", "#CherryBlossoms", "#Hiking"],
    dates: "April 8 - 11, 2024",
    heroImage: "/destinations/mount-fuji.jpg",
    days: [
      {
        title: "Day 1: Arrival & Lake Kawaguchi",
        activities: [
          { icon: Train, title: "Train from Tokyo", time: "9:00 AM" },
          { icon: Hotel, title: "Check in Kawaguchi", time: "12:00 PM" },
          { icon: MapPin, title: "Lake Kawaguchi", time: "2:00 PM" },
          { icon: MapPin, title: "Chureito Pagoda", time: "4:00 PM" },
        ],
        tip: "Visit Chureito Pagoda for the iconic Mount Fuji view with cherry blossoms.",
        image: "/destinations/fuji-kawaguchi.jpg",
      },
      {
        title: "Day 2: Fuji Five Lakes",
        activities: [
          { icon: MapPin, title: "Lake Yamanaka", time: "9:00 AM" },
          { icon: MapPin, title: "Oshino Hakkai", time: "1:00 PM" },
          { icon: Utensils, title: "Traditional Lunch", time: "3:00 PM" },
        ],
        tip: "Early morning offers the clearest views of Mount Fuji.",
        image: "/destinations/fuji-lakes.jpg",
      },
    ],
    recommendations: {
      hotel: "Fuji Lake Hotel ¥15,000/night",
      food: "Hoto noodles (local specialty)",
      transport: "JR Pass for train travel",
      shopping: "Local crafts at Kawaguchi",
      avoid: "Avoid cloudy days for mountain views",
    },
    packingTips: ["Camera with zoom lens", "Warm jacket", "Hiking boots"],
    gallery: ["/destinations/fuji-gallery-1.jpg", "/destinations/fuji-gallery-2.jpg"],
  },
  kyoto: {
    title: "KYOTO",
    subtitle: "My 5-Day Temple & Culture Tour",
    hashtags: ["#Temples", "#Culture", "#Traditional"],
    dates: "May 15 - 19, 2024",
    heroImage: "/destinations/kyoto-temples.jpg",
    days: [
      {
        title: "Day 1: Fushimi Inari & Gion",
        activities: [
          { icon: Train, title: "Arrival from Osaka", time: "10:00 AM" },
          { icon: Hotel, title: "Check in Gion District", time: "1:00 PM" },
          { icon: MapPin, title: "Fushimi Inari Shrine", time: "3:00 PM" },
          { icon: MapPin, title: "Gion District Walk", time: "6:00 PM" },
        ],
        tip: "Visit Fushimi Inari early morning or late afternoon to avoid crowds.",
        image: "/destinations/kyoto-fushimi.jpg",
      },
      {
        title: "Day 2: Golden Pavilion & Bamboo Grove",
        activities: [
          { icon: MapPin, title: "Kinkaku-ji (Golden Pavilion)", time: "8:00 AM" },
          { icon: MapPin, title: "Ryoan-ji Temple", time: "11:00 AM" },
          { icon: MapPin, title: "Arashiyama Bamboo Grove", time: "2:00 PM" },
        ],
        tip: "Visit Golden Pavilion early morning for the best photos and fewer crowds.",
        image: "/destinations/kyoto-golden.jpg",
      },
    ],
    recommendations: {
      hotel: "Gion Hatanaka Ryokan ¥25,000/night",
      food: "Kaiseki dinner at traditional restaurant",
      transport: "Kyoto City Bus Day Pass",
      shopping: "Traditional crafts in Gion",
      avoid: "Avoid taking photos of geishas up close",
    },
    packingTips: ["Respectful clothing for temples", "Comfortable walking shoes", "Cash for temple donations"],
    gallery: ["/destinations/kyoto-gallery-1.jpg", "/destinations/kyoto-gallery-2.jpg"],
  },
  "cape-town": {
    title: "CAPE TOWN",
    subtitle: "My 6-Day Adventure",
    hashtags: ["#Adventure", "#Wine", "#Nature"],
    dates: "November 12 - 17, 2024",
    heroImage: "/destinations/cape-town.jpg",
    days: [
      {
        title: "Day 1: Table Mountain & V&A Waterfront",
        activities: [
          { icon: Plane, title: "Arrival at Cape Town Airport", time: "11:00 AM" },
          { icon: Hotel, title: "Check in V&A Waterfront", time: "2:00 PM" },
          { icon: MapPin, title: "Table Mountain Cable Car", time: "4:00 PM" },
          { icon: Utensils, title: "Dinner at Waterfront", time: "7:00 PM" },
        ],
        tip: "Check weather conditions before going up Table Mountain - it can be windy!",
        image: "/destinations/capetown-table.jpg",
      },
      {
        title: "Day 2: Cape Peninsula Tour",
        activities: [
          { icon: MapPin, title: "Chapman's Peak Drive", time: "8:00 AM" },
          { icon: MapPin, title: "Cape of Good Hope", time: "11:00 AM" },
          { icon: MapPin, title: "Boulders Beach Penguins", time: "2:00 PM" },
        ],
        tip: "Book a full-day peninsula tour to see all the highlights efficiently.",
        image: "/destinations/capetown-peninsula.jpg",
      },
    ],
    recommendations: {
      hotel: "Cape Grace Hotel R3,500/night",
      food: "Braai (BBQ) and local wines",
      transport: "Rent a car or book tours",
      shopping: "V&A Waterfront markets",
      avoid: "Avoid walking alone at night in city center",
    },
    packingTips: ["Sun protection", "Light layers", "Camera for wildlife"],
    gallery: ["/destinations/capetown-gallery-1.jpg", "/destinations/capetown-gallery-2.jpg"],
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

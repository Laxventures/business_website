import Link from "next/link"

export default function ItinerariesPage() {
  const itineraries = [
    {
      id: 1,
      title: "Venice",
      slug: "venice", // Added slug for routing
      description: "Take a scenic gondola ride through the canals",
      image: "/destinations/venice-gondola.jpg",
      imageQuery: "Venice gondola ride through romantic canals with historic buildings",
    },
    {
      id: 2,
      title: "Mount Fuji",
      slug: "mount-fuji", // Added slug for routing
      description: "Visit in spring for stunning cherry blossoms",
      image: "/destinations/mount-fuji.jpg",
      imageQuery: "Mount Fuji with cherry blossoms and traditional Japanese pagoda in spring",
    },
    {
      id: 3,
      title: "Kyoto",
      slug: "kyoto", // Added slug for routing
      description: "Explore historic temples and the Gion district",
      image: "/destinations/kyoto-temples.jpg",
      imageQuery: "Traditional Kyoto street with wooden buildings and pagoda temple",
    },
    {
      id: 4,
      title: "Cape Town",
      slug: "cape-town", // Added slug for routing
      description: "Take in the views from atop Table Mountain",
      image: "/destinations/cape-town.jpg",
      imageQuery: "Aerial view of Cape Town city with Table Mountain and ocean coastline",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-slate-800 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/hot-air-balloon.png')`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg text-shadow-lg">My Travel Itineraries</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Explore the trips I've taken and my top recommendations
          </p>
        </div>
      </section>

      {/* Itineraries Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itineraries.map((itinerary) => (
              <Link key={itinerary.id} href={`/itineraries/${itinerary.slug}`} className="group cursor-pointer">
                {" "}
                {/* Added Link wrapper for navigation */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={`${itinerary.image}?query=${encodeURIComponent(itinerary.imageQuery)}`}
                      alt={itinerary.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{itinerary.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{itinerary.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

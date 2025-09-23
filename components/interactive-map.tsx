"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"

interface InteractiveMapProps {
  city: string
  className?: string
}

export default function InteractiveMap({ city, className = "" }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadMap = async () => {
      if (typeof window === "undefined") return

      try {
        setIsLoading(true)
        setError(null)

        if (!document.querySelector('link[href*="leaflet.css"]')) {
          const link = document.createElement("link")
          link.rel = "stylesheet"
          link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          link.crossOrigin = ""
          document.head.appendChild(link)
        }

        const L = await import("leaflet")

        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
        })

        if (mapRef.current && !mapRef.current.hasChildNodes()) {
          const cityCoordinates: Record<string, [number, number]> = {
            // Indian cities
            goa: [15.2993, 74.124],
            kerala: [10.8505, 76.2711],
            rajasthan: [27.0238, 74.2179],
            himachal: [31.1048, 77.1734],
            kashmir: [34.0837, 74.7973],
            mumbai: [19.076, 72.8777],
            delhi: [28.7041, 77.1025],
            bangalore: [12.9716, 77.5946],
            chennai: [13.0827, 80.2707],
            kolkata: [22.5726, 88.3639],
            hyderabad: [17.385, 78.4867],
            pune: [18.5204, 73.8567],
            jaipur: [26.9124, 75.7873],
            agra: [27.1767, 78.0081],
            varanasi: [25.3176, 82.9739],
            rishikesh: [30.0869, 78.2676],
            manali: [32.2396, 77.1887],
            shimla: [31.1048, 77.1734],
            darjeeling: [27.036, 88.2627],
            ooty: [11.4064, 76.6932],
            kodaikanal: [10.2381, 77.4892],
            munnar: [10.0889, 77.0595],
            alleppey: [9.4981, 76.3388],
            kochi: [9.9312, 76.2673],
            udaipur: [24.5854, 73.7125],
            jodhpur: [26.2389, 73.0243],
            pushkar: [26.4899, 74.5511],
            pondicherry: [11.9416, 79.8083],
            hampi: [15.335, 76.46],
            mysore: [12.2958, 76.6394],
            // International cities
            paris: [48.8566, 2.3522],
            london: [51.5074, -0.1278],
            tokyo: [35.6762, 139.6503],
            "new-york": [40.7128, -74.006],
            dubai: [25.2048, 55.2708],
            singapore: [1.3521, 103.8198],
            bangkok: [13.7563, 100.5018],
            bali: [-8.3405, 115.092],
            maldives: [3.2028, 73.2207],
            switzerland: [46.8182, 8.2275],
            italy: [41.8719, 12.5674],
            spain: [40.4637, -3.7492],
            greece: [39.0742, 21.8243],
            turkey: [38.9637, 35.2433],
            egypt: [26.8206, 30.8025],
            morocco: [31.7917, -7.0926],
            nepal: [27.7172, 85.324],
            bhutan: [27.5142, 90.4336],
            "sri-lanka": [7.8731, 80.7718],
            vietnam: [14.0583, 108.2772],
            cambodia: [12.5657, 104.991],
            laos: [19.8563, 102.4955],
            myanmar: [21.9162, 95.956],
            indonesia: [-0.7893, 113.9213],
            malaysia: [4.2105, 101.9758],
            philippines: [12.8797, 121.774],
            "south-korea": [35.9078, 127.7669],
            china: [35.8617, 104.1954],
            mongolia: [46.8625, 103.8467],
            russia: [61.524, 105.3188],
            australia: [-25.2744, 133.7751],
            "new-zealand": [-40.9006, 174.886],
            fiji: [-16.578, 179.4144],
            canada: [56.1304, -106.3468],
            usa: [37.0902, -95.7129],
            mexico: [23.6345, -102.5528],
            brazil: [-14.235, -51.9253],
            argentina: [-38.4161, -63.6167],
            chile: [-35.6751, -71.543],
            peru: [-9.19, -75.0152],
            ecuador: [-1.8312, -78.1834],
            colombia: [4.5709, -74.2973],
            "costa-rica": [9.7489, -83.7534],
            "south-africa": [-30.5595, 22.9375],
            kenya: [-0.0236, 37.9062],
            tanzania: [-6.369, 34.8888],
            madagascar: [-18.7669, 46.8691],
            mauritius: [-20.3484, 57.5522],
            seychelles: [-4.6796, 55.492],
            jordan: [30.5852, 36.2384],
            israel: [31.0461, 34.8516],
            lebanon: [33.8547, 35.8623],
            oman: [21.4735, 55.9754],
            qatar: [25.3548, 51.1839],
            "saudi-arabia": [23.8859, 45.0792],
            "united-arab-emirates": [23.4241, 53.8478],
            iran: [32.4279, 53.688],
            afghanistan: [33.9391, 67.71],
            pakistan: [30.3753, 69.3451],
            bangladesh: [23.685, 90.3563],
          }

          const coordinates = cityCoordinates[city.toLowerCase()] || [20.5937, 78.9629] // Default to India center

          const map = L.map(mapRef.current).setView(coordinates, 12)

          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
            maxZoom: 18,
          }).addTo(map)

          const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, " ")
          L.marker(coordinates)
            .addTo(map)
            .bindPopup(`<b>${cityName}</b><br>Explore this amazing destination!`)
            .openPopup()
        }

        setIsLoading(false)
      } catch (error) {
        setError("Failed to load map")
        setIsLoading(false)
      }
    }

    loadMap()
  }, [city])

  if (error) {
    return (
      <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Location Map
        </h3>
        <div
          className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center"
          style={{ minHeight: "300px" }}
        >
          <div className="text-center text-gray-500">
            <MapPin className="w-8 h-8 mx-auto mb-2" />
            <p>Unable to load map</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
        <MapPin className="w-5 h-5" />
        Location Map
      </h3>
      <div className="relative">
        {isLoading && (
          <div
            className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center z-10"
            style={{ minHeight: "300px" }}
          >
            <div className="text-center text-gray-500">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-2"></div>
              <p>Loading map...</p>
            </div>
          </div>
        )}
        <div ref={mapRef} className="aspect-square rounded-lg overflow-hidden" style={{ minHeight: "300px" }} />
      </div>
    </div>
  )
}

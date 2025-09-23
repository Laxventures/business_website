"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"

interface InteractiveMapProps {
  city: string
  className?: string
}

export default function InteractiveMap({ city, className = "" }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Dynamically import Leaflet to avoid SSR issues
    const loadMap = async () => {
      if (typeof window === "undefined") return

      try {
        const L = await import("leaflet")

        // Fix for default markers in Leaflet
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        })

        if (mapRef.current && !mapRef.current.hasChildNodes()) {
          // City coordinates mapping
          const cityCoordinates: Record<string, [number, number]> = {
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
          }

          const coordinates = cityCoordinates[city.toLowerCase()] || [20.5937, 78.9629] // Default to India center

          const map = L.map(mapRef.current).setView(coordinates, 10)

          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
          }).addTo(map)

          // Add a marker for the city
          L.marker(coordinates)
            .addTo(map)
            .bindPopup(`<b>${city.charAt(0).toUpperCase() + city.slice(1)}</b><br>Explore this amazing destination!`)
            .openPopup()
        }
      } catch (error) {
        console.error("Error loading map:", error)
      }
    }

    loadMap()
  }, [city])

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
        <MapPin className="w-5 h-5" />
        Location Map
      </h3>
      <div ref={mapRef} className="aspect-square rounded-lg overflow-hidden" style={{ minHeight: "300px" }} />
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />
    </div>
  )
}

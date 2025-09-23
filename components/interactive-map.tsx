"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"

interface InteractiveMapProps {
  city: string
  coords: [number, number] | null
  className?: string
}

export default function InteractiveMap({ city, coords, className = "" }: InteractiveMapProps) {
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
          const coordinates = coords || [20.5937, 78.9629] // Default to India center

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

  if (!coords) {
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
            <p>Location not available</p>
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
      <div
        className="aspect-square rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center"
        style={{ minHeight: "300px" }}
      >
        {/* Leaflet map should be initialized on the client side with the provided coords */}
        <div ref={mapRef} style={{ minHeight: "300px", width: "100%" }} />
      </div>
    </div>
  )
}

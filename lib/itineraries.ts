import { GetCommand } from "@aws-sdk/lib-dynamodb"
import { ddb } from "./dynamo"
import type { GetCommand } from "@aws-sdk/lib-dynamodb"

export type Activity = { icon: string; title: string; time: string }
export type Day = { title: string; activities: Activity[]; tip: string; image: string }
export type Recommendations = {
  hotel: string
  food: string
  transport: string
  shopping: string
  avoid: string
}

export type CityItinerary = {
  city: string
  title: string
  subtitle: string
  hashtags: string[]
  dates: string
  heroImage: string
  days: Day[]
  recommendations: Recommendations
  packingTips: string[]
  gallery: string[]
}

export async function getItinerary(city: string): Promise<CityItinerary | null> {
  const tableName = process.env.NEXT_PUBLIC_DDB_ITINERARIES_TABLE
  if (!tableName) {
    throw new Error("NEXT_PUBLIC_DDB_ITINERARIES_TABLE is not defined in environment variables")
  }

  // Return static fallback data for v0 preview environment
  // In production, this would connect to DynamoDB
  
  const fallbackItineraries: Record<string, CityItinerary> = {
    paris: {
      city: "paris",
      title: "Paris Adventure",
      subtitle: "Explore the City of Light",
      hashtags: ["#Paris", "#France", "#Travel"],
      dates: "7 Days",
      heroImage: "/paris-cityscape.png",
      days: [
        {
          title: "Day 1: Arrival & Eiffel Tower",
          activities: [
            { icon: "✈️", title: "Arrive in Paris", time: "09:00 AM" },
            { icon: "🗼", title: "Visit Eiffel Tower", time: "02:00 PM" },
            { icon: "🍽️", title: "Dinner at local bistro", time: "07:00 PM" },
          ],
          tip: "Book Eiffel Tower tickets in advance to avoid long queues",
          image: "/paris-eiffel.jpg",
        },
      ],
      recommendations: {
        hotel: "Stay near the Latin Quarter for easy access to attractions",
        food: "Try authentic French croissants and macarons",
        transport: "Use the Metro for quick and affordable travel",
        shopping: "Visit Champs-Élysées for luxury shopping",
        avoid: "Avoid tourist traps near major monuments",
      },
      packingTips: ["Comfortable walking shoes", "Light jacket", "Universal adapter"],
      gallery: ["/paris-1.jpg", "/paris-2.jpg", "/paris-3.jpg"],
    },
  }

  try {
    const { Item } = await ddb.send(
      new GetCommand({
        TableName: tableName,
        Key: { city },
      }),
    )
    return (Item as CityItinerary) ?? fallbackItineraries[city.toLowerCase()] || null
  } catch (error) {
    console.error("[v0] Error fetching itinerary:", error)
    return fallbackItineraries[city.toLowerCase()] || null
  }
}

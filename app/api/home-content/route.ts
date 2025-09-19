import { NextResponse } from "next/server"
import { getHomeContent } from "@/lib/getHomeContent"

const fallbackContent = {
  heroTitle: "Discover Your Next Adventure",
  heroSubtitle:
    "Personalized travel experiences crafted just for you. From bustling cities to serene landscapes, we help you create unforgettable memories.",
  ctaButton: "Plan Your Journey",
  whoWeAreTitle: "Who We Are",
  whoWeAreContent:
    "We are passionate travellers who believe every journey should be unique and memorable. With years of experience exploring the world, we curate personalized itineraries that match your travel style and preferences.",
  realStories: [
    { slug: "paris", title: "Paris", image: "/paris-cityscape.png" },
    { slug: "vietnam", title: "Vietnam", image: "/bustling-vietnamese-street.png" },
    { slug: "tibet", title: "Tibet", image: "/tibet.jpg" },
    { slug: "london", title: "London", image: "/london-cityscape.png" },
  ],
  testimonials: [
    "Amazing experience! The itinerary was perfectly planned and every detail was taken care of. I couldn't have asked for a better travel partner.",
    "Best travel service I've ever used. Highly recommended! The personalized approach made all the difference in our trip.",
  ],
  contactUsCTA: "Contact Us",
}

export async function GET() {
  try {
    const content = await getHomeContent()
    return NextResponse.json(content || fallbackContent)
  } catch (error) {
    console.error("Error fetching home content:", error)
    return NextResponse.json(fallbackContent)
  }
}

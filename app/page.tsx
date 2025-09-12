"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [homeContent, setHomeContent] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/home-content")
        const data = await response.json()
        setHomeContent(data)
      } catch (error) {
        console.error("Error fetching home content:", error)
        setHomeContent({
          heroTitle: "Discover Your Next Adventure",
          heroSubtitle: "Personalized travel experiences crafted just for you",
          ctaButton: "Plan Your Journey",
          whoWeAreTitle: "Who We Are",
          whoWeAreContent: "We are passionate travelers who believe every journey should be unique and memorable.",
          realStories: [
            { slug: "paris", title: "Paris", image: "/paris-cityscape.png" },
            { slug: "vietnam", title: "Vietnam", image: "/bustling-vietnamese-street.png" },
            { slug: "tibet", title: "Tibet", image: "/tibet.jpg" },
            { slug: "london", title: "London", image: "/london-cityscape.png" },
          ],
          testimonials: [
            "Amazing experience! The itinerary was perfectly planned.",
            "Best travel service I've ever used. Highly recommended!",
          ],
          contactUsCTA: "Contact Us",
        })
      }
    }
    fetchData()
  }, [])

  if (!homeContent) return <div>Loading...</div>
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[80vh] flex items-center justify-center bg-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: `url('/hot-air-balloon.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
            {homeContent.heroTitle}
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">{homeContent.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors shadow-lg"
            >
              <Link href="/custom-itinerary">{homeContent.ctaButton}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{homeContent.whoWeAreTitle}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{homeContent.whoWeAreContent}</p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-lg flex items-center justify-center">
                <Image
                  src="/who-we-are-couple.png"
                  alt="Couple Illustration"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Real Stories. Real Places.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {homeContent.realStories.map((story: any) => (
              <Link
                key={story.slug}
                href={`/itineraries/${story.slug}`}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-xl [text-shadow:_3px_3px_6px_rgb(0_0_0_/_100%)]">
                  {story.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Build Your Own Itinerary</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="text-green-600 text-xl">✓</div>
                <span className="text-xl font-semibold text-slate-900">Quick & easy</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-green-600 text-xl">👤</div>
                <span className="text-xl font-semibold text-slate-900">Personalized plans</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-green-600 text-xl">📄</div>
                <span className="text-xl font-semibold text-slate-900">Export to PDF</span>
              </div>
              <Button
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg mt-8"
              >
                <Link href="/custom-itinerary">Start Building</Link>
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-sm text-gray-500 mb-4">YOUR ITINERARY</div>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <div className="font-semibold">DAY 1</div>
                  <div className="text-sm text-gray-600">Edit of Itinoms</div>
                  <div className="text-xs text-gray-500">Explore our curated itinerary</div>
                </div>
                <div className="text-sm space-y-2">
                  <div>
                    <span className="font-semibold">19:40</span> • Paris
                  </div>
                  <div>
                    <span className="font-semibold">11:30</span> • Park
                  </div>
                  <div>
                    <span className="font-semibold">12:20</span> • Dullity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">Travel Smart: Latest Blogs & Tips</h2>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Read Travel Tips & Guides</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-xl font-semibold text-slate-900">Etiam scelerisque tortor at lectus</h4>
                <p className="text-gray-600">Cras vulputate nisl mauris, non suscipit ligula commodo quis.</p>
                <Button variant="link" className="text-slate-900 p-0 h-auto font-semibold">
                  Read More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">Testimonials</h2>
          <div className="space-y-12">
            {homeContent.testimonials.map((text: string, idx: number) => (
              <div key={idx}>
                <div className="text-6xl text-gray-300 mb-4">"</div>
                <p className="text-xl text-gray-700 mb-4">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Have Questions</h2>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">or Need Help?</h2>
          <Button
            asChild
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg mt-8"
          >
            <Link href="/contact">{homeContent.contactUsCTA}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[80vh] flex items-center justify-center bg-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: `url('/hot-air-balloon-over-scenic-mountain-landscape-adv.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
            Travel Without Limits with LaxVentures
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Personalized itineraries curated just for you. Explore smarter, travel deeper.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors shadow-lg"
            >
              <Link href="/custom-itinerary">Build Custom Itinerary</Link>
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="bg-slate-900 hover:bg-slate-800 text-white border-slate-900 px-8 py-4 text-lg font-semibold rounded-lg transition-colors shadow-lg"
            >
              Build Custom Itinerary
            </Button> */}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                LaxVentures is your smart travel assistant - blending expert-curated trips with AI-powered
                personalization. Whether you're a solo adventurer, a romantic couple, or a family of five, we craft
                journeys that fit you like a glove.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-6xl">👫</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">What Type of Traveller Are You?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🥾</div>
              <h3 className="text-xl font-semibold text-slate-900">The Adventurer</h3>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-slate-900">The Cultural Explorer</h3>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🌲</div>
              <h3 className="text-xl font-semibold text-slate-900">Nature Seeker</h3>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold text-slate-900">Family Planner</h3>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Discover Your Travel Personality</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Take our quiz to find out what type of traveler you are and get personalized travel recommendations
              tailored just for you.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg">
              TAKE THE QUIZ
            </Button>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Create Your Perfect Itinerary</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Use our customizable itinerary builder to plan your next adventure, from destinations and activities to
              accommodations.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg">
              START PLANNING
            </Button>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Get Inspired by My Itineraries</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Browse through detailed itineraries from my past travels and find recommendations to inspire your own
              journey
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg">
              VIEW ITINERARIES
            </Button>
          </div>
        </div>
      </section> */}

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Real Stories. Real Places.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/eiffel-tower-paris.png" alt="Paris" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/ha-long-bay.png" alt="Vietnam" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl">VIETNAM</div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/mountain-monastery-tibet.jpg" alt="Mountains" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/tower-bridge-london-uk.jpg" alt="UK" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl">UK</div>
            </div>
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
            <div>
              <div className="text-6xl text-gray-300 mb-4">"</div>
              <p className="text-xl text-gray-700 mb-4">
                Our Scotland trip was a dream come true. Thanks, LaxVentures!
              </p>
            </div>
            <div>
              <div className="text-6xl text-gray-300 mb-4">"</div>
              <p className="text-xl text-gray-700 mb-4">
                An incredible experience with memories that will last a lifetime.
              </p>
            </div>
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
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/personality-quiz" className="block hover:text-orange-300 transition-colors">
                Personality Quiz
              </Link>
              <Link href="/itineraries" className="block hover:text-orange-300 transition-colors">
                My Itineraries
              </Link>
              <Link href="/articles" className="block hover:text-orange-300 transition-colors">
                Articles
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <Link href="/travel-guides" className="block hover:text-orange-300 transition-colors">
                Travel Guides
              </Link>
              <Link href="/destinations" className="block hover:text-orange-300 transition-colors">
                Destinations
              </Link>
              <Link href="/travel-tips" className="block hover:text-orange-300 transition-colors">
                Travel Tips
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-orange-300 transition-colors">
                📘
              </a>
              <a href="#" className="text-2xl hover:text-orange-300 transition-colors">
                🐦
              </a>
              <a href="#" className="text-2xl hover:text-orange-300 transition-colors">
                📷
              </a>
            </div>
          </div>

          <div>
            <div className="text-right">
              <p className="mb-2">© 2024 LaxVentures.</p>
              <p className="mb-4">All rights reserved.</p>
              <p className="text-sm">GSTIN: 26ABCDE1234F1Z3</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-4 text-center">
          <p>© 2024 LaxVentures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

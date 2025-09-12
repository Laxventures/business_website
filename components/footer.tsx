import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/laxventures-logo.png" alt="LaxVentures Logo" width={40} height={40} className="rounded-lg" />
              <h3 className="text-xl font-semibold">LaxVentures</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <a href="mailto:hello@laxventures.in" className="hover:text-orange-300 transition-colors">
                  hello@laxventures.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <a href="tel:+919448643011" className="hover:text-orange-300 transition-colors">
                  +91 94486 43011
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <Link href="/itineraries" className="block hover:text-orange-300 transition-colors">
                Destinations
              </Link>
              <Link href="/blog" className="block hover:text-orange-300 transition-colors">
                Travel Blogs
              </Link>
              <Link href="/privacy-policy" className="block hover:text-orange-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="block hover:text-orange-300 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cancellation-refund" className="block hover:text-orange-300 transition-colors">
                Cancellation & Refund Policy
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-6 h-6 hover:text-orange-300 transition-colors" aria-label="Instagram">
                <Image src="/icons/instagram.png" alt="Instagram" width={24} height={24} />
              </a>
              <a href="#" className="w-6 h-6 hover:text-orange-300 transition-colors" aria-label="X (Twitter)">
                <Image src="/icons/x.png" alt="X (Twitter)" width={24} height={24} />
              </a>
              <a href="#" className="w-6 h-6 hover:text-orange-300 transition-colors" aria-label="Facebook">
                <Image src="/icons/facebook.png" alt="Facebook" width={24} height={24} />
              </a>
              <a href="#" className="w-6 h-6 hover:text-orange-300 transition-colors" aria-label="YouTube">
                <Image src="/icons/youtube.png" alt="YouTube" width={24} height={24} />
              </a>
              <a href="#" className="w-6 h-6 hover:text-orange-300 transition-colors" aria-label="Threads">
                <Image src="/icons/threads.png" alt="Threads" width={24} height={24} />
              </a>
            </div>
          </div>

          <div>
            <div className="text-right">
              <p className="mb-2">© 2025 LaxVentures.</p>
              <p className="mb-4">All rights reserved.</p>
              <p className="text-sm">GSTIN: 33ASNPL7535J1ZC</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-4 text-center">
          <p>© 2025 LaxVentures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

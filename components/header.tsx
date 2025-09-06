import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-slate-900 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/laxventures-logo.png" alt="LaxVentures Logo" width={50} height={50} className="rounded-lg" />
          <h1 className="text-2xl font-bold">LaxVentures</h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-orange-300 transition-colors">
            Home
          </Link>
          <Link href="/itineraries" className="hover:text-orange-300 transition-colors">
            Itineraries
          </Link>
          <Link href="/blog" className="hover:text-orange-300 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-orange-300 transition-colors">
            Contact
          </Link>
          <button className="hover:text-orange-300 transition-colors">🔍</button>
        </nav>
      </div>
    </header>
  )
}

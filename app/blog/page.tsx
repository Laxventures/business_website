import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Stress-Free Travel",
      image: "/blog/santorini-greece.jpg",
      category: "TRAVEL TIPS",
      slug: "stress-free-travel-tips",
    },
    {
      id: 2,
      title: "How to Travel on a Budget: A Guide",
      image: "/blog/northern-lights.jpg",
      category: "TRAVEL TIPS",
      slug: "budget-travel-guide",
    },
    {
      id: 3,
      title: "Exploring Hidden Gems Around the World",
      image: "/blog/mountain-hiking.jpg",
      category: "TRAVEL TIPS",
      slug: "hidden-gems-travel",
    },
    {
      id: 4,
      title: "Top 5 Tips for Solo Female Travelers",
      image: "/blog/solo-female-traveler.jpg",
      category: "TRAVEL TIPS",
      slug: "solo-female-travel-tips",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/hot-air-balloon-over-scenic-mountain-landscape-adv.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg text-shadow-lg">Travel Articles</h1>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-80">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h2 className="text-white text-2xl font-bold leading-tight group-hover:text-orange-300 transition-colors drop-shadow-lg">
                      {post.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

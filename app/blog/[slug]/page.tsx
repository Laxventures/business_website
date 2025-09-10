import Image from "next/image"
import Link from "next/link"

// Sample blog data - in a real app, this would come from a CMS or database
const blogPosts = {
  "stress-free-travel-tips": {
    title: "10 Tips for Stress-Free Travel",
    date: "April 24, 2024",
    image: "/blog/stress-free-travel-hero.jpg",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy. Laë cuismod tincidunt ut laore et dolore magna aliquam erat volutpat. Ut ult wisi e enim ad minim, veniam, qui nostruat elatrum.</p>
      
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel uum tum dolore eu feugiat nulla facilisis, at vero eros et at accumsan etuusto odio dignisim at qust odio dic-tissim qul blandit praesent. Luptatum zzril delenit augue duis dolore te feugat nulla fa-</p>
      
      <p>In ean ligula colig nosi que dolor sit henotunt, eu tugiat nulla parriier Consequat, nerac sem ormipiata netaque penatibus et magnis alt parturient montes nascetur, ridica iscnum que blandit praesert.</p>
    `,
  },
  "budget-travel-guide": {
    title: "How to Travel on a Budget: A Guide",
    date: "April 20, 2024",
    image: "/blog/budget-travel-hero.jpg",
    content: `
      <p>Traveling on a budget doesn't mean compromising on experiences. With careful planning and smart choices, you can explore the world without breaking the bank.</p>
      
      <p>Start by being flexible with your travel dates and destinations. Off-season travel can save you significant money on flights and accommodations while offering a more authentic local experience.</p>
      
      <p>Consider alternative accommodations like hostels, guesthouses, or vacation rentals. These options often provide better value and opportunities to connect with fellow travelers.</p>
    `,
  },
  "hidden-gems-travel": {
    title: "Exploring Hidden Gems Around the World",
    date: "April 18, 2024",
    image: "/blog/hidden-gems-hero.jpg",
    content: `
      <p>Beyond the popular tourist destinations lie incredible hidden gems waiting to be discovered. These lesser-known places offer authentic experiences and unforgettable memories.</p>
      
      <p>Research local recommendations and venture off the beaten path. Talk to locals, explore small towns, and be open to unexpected discoveries that aren't in guidebooks.</p>
      
      <p>Hidden gems often provide better value, fewer crowds, and more meaningful cultural interactions that will enrich your travel experience.</p>
    `,
  },
  "solo-female-travel-tips": {
    title: "Top 5 Tips for Solo Female Travelers",
    date: "April 15, 2024",
    image: "/blog/solo-female-travel-hero.jpg",
    content: `
      <p>Solo female travel can be incredibly empowering and rewarding. With proper preparation and awareness, women can safely explore the world independently.</p>
      
      <p>Trust your instincts, research your destinations thoroughly, and always have backup plans. Stay connected with family and friends, and don't hesitate to ask for help when needed.</p>
      
      <p>Join female travel communities online and connect with other solo travelers. Their experiences and advice can be invaluable for planning safe and enjoyable trips.</p>
    `,
  },
}

const recentArticles = [
  { title: "A Guide to Solo Female Travel", slug: "solo-female-travel-tips" },
  { title: "Top Destinations for Food Lovers", slug: "food-destinations" },
  { title: "How to Pack Like a Pro", slug: "packing-tips" },
  { title: "Exploring Ancient Ruins: What to Know", slug: "ancient-ruins-guide" },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return <div>Blog post not found</div>
  }

  return (
    <div className="min-h-screen">
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hot-air-balloon-over-scenic-mountain-landscape-adv.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 bg-white rounded-2xl shadow-xl max-w-6xl mx-6 p-8 -mb-32">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{post.title}</h1>
              <p className="text-gray-500 mb-8 text-lg">{post.date}</p>

              <div className="relative h-80 mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/blog/woman-with-map-luggage.jpg"
                  alt="Woman planning travel with map and luggage"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blog Content */}
              <div
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            <div className="lg:w-1/3">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Articles</h3>
                <ul className="space-y-4">
                  {recentArticles.map((article, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <Link
                        href={`/blog/${article.slug}`}
                        className="text-gray-700 hover:text-orange-500 transition-colors text-sm leading-relaxed"
                      >
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for the overlapping card */}
      <div className="h-40 bg-gray-50"></div>
    </div>
  )
}

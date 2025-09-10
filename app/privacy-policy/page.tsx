export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage: "url(/hot-air-balloon-over-scenic-mountain-landscape-adv.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Privacy Policy</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-gray-600 mb-8">Effective Date: September 1, 2025</p>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                LaxVentures ("we," "our," or "us") respects your privacy and is committed to protecting your personal
                data. This privacy policy outlines how we collect, use, disclose, and safeguard your information when
                you visit our website [www.laxventures.in] or engage with our travel services.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">1.1 Information We Collect</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone number, billing/shipping address, and
                  identification documents (if needed for visa assistance).
                </li>
                <li>
                  <strong>Payment Information:</strong> Collected securely via third-party payment providers. We do not
                  store card details.
                </li>
                <li>
                  <strong>Travel Preferences:</strong> Destination interests, budget, travel dates, itinerary data.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type, geolocation, device information.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">1.2 How We Use Your Information</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>To process travel requests, bookings, and custom itineraries</li>
                <li>To send important updates or documents (e.g., via WhatsApp/email)</li>
                <li>To provide visa assistance and documentation</li>
                <li>For internal analysis, research, and improvements</li>
                <li>For marketing (only if you opt-in)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">1.3 Data Sharing</h2>
              <p className="mb-4">We do not sell your data. We may share it:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>With trusted third-party service providers (e.g., airlines, visa consultants)</li>
                <li>To comply with legal obligations</li>
                <li>With payment processors (for transactions only)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">1.4 Your Rights</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Request access or deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">1.5 Data Retention</h2>
              <p className="mb-6">We retain your data only as long as necessary for legal or business reasons.</p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">1.6 Cookies</h2>
              <p className="mb-6">
                We use cookies for analytics, personalization, and functionality. You can disable them in your browser
                settings.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">1.7 Contact</h2>
              <p className="mb-6">
                For privacy-related inquiries, contact:{" "}
                <a href="mailto:hello@laxventures.in" className="text-orange-600 hover:text-orange-700">
                  hello@laxventures.in
                </a>
              </p>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  All policies are governed by Indian law and subject to change. Please check this page periodically for
                  updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

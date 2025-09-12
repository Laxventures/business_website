export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage: "url(/hot-air-balloon.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Terms & Conditions</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-gray-600 mb-8">Effective Date: September 1, 2025</p>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                By accessing or using the LaxVentures platform or services, you agree to be bound by these terms:
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">2.1 Services Offered</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Travel Itinerary Planning (custom/manual/AI-assisted)</li>
                <li>Visa Assistance</li>
                <li>Group and Join-In Trips</li>
                <li>Flight, Hotel & Activity Bookings (via partnered aggregators)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">2.2 User Obligations</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>You must be 18+ to use our services</li>
                <li>Provide accurate personal and travel information</li>
                <li>Abide by third-party terms (e.g., hotel, airline policies)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">2.3 Intellectual Property</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Website content, itineraries, designs, and brand assets are owned by LaxVentures</li>
                <li>You may not reuse, republish, or redistribute without written permission</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">2.4 Third-Party Services</h2>
              <p className="mb-6">
                We are not responsible for service delivery by third parties (e.g., airlines, visa centers). Any dispute
                must be resolved with them.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">2.5 Limitation of Liability</h2>
              <p className="mb-4">LaxVentures will not be liable for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Acts of God or force majeure events</li>
                <li>Delays, cancellations, or disputes caused by third parties</li>
                <li>Loss of data or indirect damages</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">2.6 Termination</h2>
              <p className="mb-6">
                We may suspend or terminate user access for abuse, fraud, or violation of these terms.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">2.7 Changes to Terms</h2>
              <p className="mb-6">
                We reserve the right to update these terms. Continued use implies agreement to revised terms.
              </p>

              {/* Updated governance text styling */}
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

export default function CancellationRefundPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Cancellation & Refund Policy</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-gray-600 mb-8">Effective Date: September 1, 2025</p>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                LaxVentures strives to be transparent and fair in handling cancellations and refunds.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">3.1 Custom Itinerary Services</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Once the itinerary is finalized and emailed, no refund will be issued.</li>
                <li>If canceled before customization starts, 80% refund will be processed.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">3.2 Group Trips / Join-In Tours</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>30+ days before trip: 90% refund</li>
                <li>15–29 days before: 50% refund</li>
                <li>&lt;15 days: No refund unless a replacement is found</li>
                <li>Booking is transferable with prior notice (subject to approval)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">3.3 Visa Assistance</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Visa service charges are non-refundable once documents are submitted</li>
                <li>Any refund from consulates will be passed to the customer if applicable</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">
                3.4 Bookings via LaxVentures (Flights/Hotels/Activities)
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Follow aggregator/partner policies (we will assist in coordination)</li>
                <li>Processing fees may apply for cancellations through us</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">3.5 Force Majeure / Unexpected Events</h2>
              <p className="mb-6">
                We are not liable for delays or cancellations due to weather, strikes, pandemics, or natural disasters.
                Refunds in such cases will follow supplier policies.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">3.6 How to Request Refund</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  Email{" "}
                  <a href="mailto:hello@laxventures.in" className="text-orange-600 hover:text-orange-700">
                    hello@laxventures.in
                  </a>{" "}
                  with your booking reference and reason
                </li>
                <li>Refunds are processed within 7–10 working days after approval</li>
              </ul>

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

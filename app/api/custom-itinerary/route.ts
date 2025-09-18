import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Email content
    const emailContent = `
      New Custom Itinerary Request
      
      Customer Details:
      - Email: ${formData.email}
      - Phone: ${formData.phone}
      
      Travel Details:
      - Destination: ${formData.destination}
      - Start Date: ${formData.startDate}
      - End Date: ${formData.endDate}
      - Traveller Type: ${formData.travalerTypes}
      
      Please contact the customer to discuss their custom itinerary requirements.
    `

    // Here you would integrate with your email service
    // For now, we'll just log the data and return success
    console.log("Custom Itinerary Request:", {
      to: "hello@laxventures.in",
      subject: "New Custom Itinerary Request",
      content: emailContent,
      customerData: formData,
    })

    // In production, you would send the actual email here
    // Example with a service like SendGrid, Nodemailer, etc.

    return NextResponse.json({
      success: true,
      message: "Custom itinerary request submitted successfully",
    })
  } catch (error) {
    console.error("Error processing custom itinerary request:", error)
    return NextResponse.json({ success: false, message: "Failed to process request" }, { status: 500 })
  }
}

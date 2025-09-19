import { type NextRequest, NextResponse } from "next/server"
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"

// Initialize SES client
const ses = new SESClient({
  region: "us-east-1", // Change if your SES is in another region
})

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

    // Prepare SES command
    const command = new SendEmailCommand({
      Source: "hello@laxventures.in", // must be a verified SES identity
      Destination: {
        ToAddresses: ["hello@laxventures.in"], // you can add more here
      },
      Message: {
        Subject: { Data: "New Custom Itinerary Request" },
        Body: {
          Text: { Data: emailContent },
        },
      },
    })

    // Send email
    await ses.send(command)

    return NextResponse.json({
      success: true,
      message: "Custom itinerary request submitted and email sent successfully",
    })
  } catch (error) {
    console.error("Error sending custom itinerary request:", error)
    return NextResponse.json({ success: false, message: "Failed to process request" }, { status: 500 })
  }
}

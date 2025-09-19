import { type NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: process.env.NEXT_PUBLIC_REGION });

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const params = {
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL!],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br>")}</p>
            `,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: `New Contact Form Submission from ${name}`,
        },
      },
      Source: process.env.SES_FROM_EMAIL!,
      ReplyToAddresses: [email],
    };

    await ses.send(new SendEmailCommand(params));

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

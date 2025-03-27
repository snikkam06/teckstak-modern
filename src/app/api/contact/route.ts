import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Add console logs to check if API keys are loaded
console.log('API Key 1 exists:', !!process.env.RESEND_API_KEY_1);
console.log('API Key 2 exists:', !!process.env.RESEND_API_KEY_2);

const resend1 = new Resend(process.env.RESEND_API_KEY_1);
const resend2 = new Resend(process.env.RESEND_API_KEY_2);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Try sending emails one at a time to identify which one fails
    try {
      const send1 = await resend1.emails.send({
        from: 'TeckStack <onboarding@resend.dev>',
        to: 'ssnikkam@gmail.com',
        subject: subject ? `New contact form: ${subject}` : 'New contact form submission',
        text: `
          Name: ${name}
          Email: ${email}
          
          Message:
          ${message}
        `,
      });
      console.log('First email result:', send1);
      
      const send2 = await resend2.emails.send({
        from: 'TeckStack <onboarding@resend.dev>',
        to: 'nikkam@yahoo.com',
        subject: subject ? `New contact form: ${subject}` : 'New contact form submission',
        text: `
          Name: ${name}
          Email: ${email}
          
          Message:
          ${message}
        `,
      });
      console.log('Second email result:', send2);

      if (send1.error) {
        console.error('First email error:', send1.error);
      }
      if (send2.error) {
        console.error('Second email error:', send2.error);
      }

      if (send1.error || send2.error) {
        return NextResponse.json(
          { error: "Failed to send one or more emails", details: { send1: send1.error, send2: send2.error } },
          { status: 500 }
        );
      }

    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { error: "Email sending failed", details: emailError },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: "Internal server error", details: error },
      { status: 500 }
    );
  }
}
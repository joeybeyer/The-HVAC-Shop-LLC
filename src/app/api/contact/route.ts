import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { BUSINESS } from '@/lib/constants';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, phone, email, service, city, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: `Website Lead <leads@thehvacshopllc.com>`,
      to: [BUSINESS.email, BUSINESS.emailSecondary],
      subject: `New HVAC Lead — ${service || 'General Inquiry'} — ${name}`,
      html: `
        <h2>New Lead from thehvacshopllc.com</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email || 'Not provided'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Service</td><td style="padding:8px;border:1px solid #ddd">${service || 'Not selected'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">City/Zip</td><td style="padding:8px;border:1px solid #ddd">${city || 'Not provided'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #ddd">${message || 'None'}</td></tr>
        </table>
        <p style="color:#666;font-size:12px;margin-top:16px">Submitted from thehvacshopllc.com</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send. Please call us directly.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Server error. Please call us directly.' }, { status: 500 });
  }
}

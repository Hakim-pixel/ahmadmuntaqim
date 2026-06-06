import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validasi input
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Semua field wajib diisi.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: 'Format email tidak valid.' },
        { status: 400 }
      );
    }

    // Kirim email ke pemilik portfolio
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'your@email.com'],
      subject: `Pesan baru dari ${name} — Portfolio`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #1a1a2e; margin-bottom: 4px;">Pesan baru dari portfolio kamu</h2>
          <p style="color: #666; font-size: 14px; margin-bottom: 24px; border-bottom: 1px solid #eee; padding-bottom: 16px;">
            Dikirim via form kontak di <strong>fp.dev</strong>
          </p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #888; font-size: 13px; width: 80px;">Nama</td>
              <td style="padding: 8px 0; color: #1a1a2e; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888; font-size: 13px;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${email}" style="color: #7c6fff; text-decoration: none;">${email}</a>
              </td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 6px; border-left: 3px solid #7c6fff;">
            <p style="color: #888; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Pesan</p>
            <p style="color: #1a1a2e; line-height: 1.7; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #aaa;">
            Reply langsung ke email ini untuk membalas pesan dari ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Gagal mengirim pesan. Coba lagi nanti.' },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return Response.json(
      { error: 'Terjadi kesalahan server.' },
      { status: 500 }
    );
  }
}

import nodemailer from 'nodemailer';

export async function POST(req) {
  const { email, subject, message } = await req.json();

  if (!email || !subject || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required' }), {
      status: 400,
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });
  
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: subject,
    text: message,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return new Response(
      JSON.stringify({ success: 'Message sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send message' }),
      { status: 500 }
    );
  }
}

import nodemailer from 'nodemailer';
const adminEmail = process.env.ADMIN_EMAIL;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    userEmail,
    result,
    answers,
    description,
    characteristics,
    impact,
    tips,
    parentAge,
    numKids,
    profession,
    kidAge
  } = req.body;

  if (!userEmail || !adminEmail || !result || !answers) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content for the user (no changes here)
    const userEmailContent = `
      Thank you for taking the Parenting Style Test! We hope this provides valuable insights into your parenting approach.<br><br>

      <strong>Parenting Style:</strong> <span style="color: #4CAF50; font-weight: bold;">${result}</span><br>
      <strong>Description:</strong> ${description}<br><br>

      <strong>Characteristics:</strong><br>
      <ul>
        ${characteristics.map((char) => `<li>${char}</li>`).join('')}
      </ul>

      <strong>Impact on Children:</strong><br>
      <ul>
        ${impact.map((imp) => `<li>${imp}</li>`).join('')}
      </ul>

      <strong>Guidance Tips:</strong><br>
      <ul>
        ${tips.map((tip) => `<li>${tip}</li>`).join('')}
      </ul>

      <strong>Your Answers:</strong><br>
      <ul>
        ${answers.map((answer, index) => `<li>Question ${index + 1}: ${answer}</li>`).join('')}
      </ul>

      Our team will be in contact with you shortly at this email address to schedule the counseling session provided as part of the test.<br><br>

      Best Regards,<br>
      <strong>Kalyani Bhabad</strong><br>
      Senior Psychologist
    `;

    // Email content for the admin (added the new fields)
    const adminEmailContent = `
      <div>
        <h2>Parenting Style Quiz Submission</h2>
        <p><strong>User Email:</strong> ${userEmail}</p>
        <p><strong>Parent Age:</strong> ${parentAge}</p>
        <p><strong>Number of Kids:</strong> ${numKids}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Age of Kid:</strong> ${kidAge}</p>
        <strong>Parenting Style:</strong> <span style="color: #4CAF50; font-weight: bold;">${result}</span><br>
        <strong>Description:</strong> ${description}<br><br>

        <strong>Characteristics:</strong><br>
        <ul>
          ${characteristics.map((char) => `<li>${char}</li>`).join('')}
        </ul>

        <strong>Impact on Children:</strong><br>
        <ul>
          ${impact.map((imp) => `<li>${imp}</li>`).join('')}
        </ul>

        <strong>Guidance Tips:</strong><br>
        <ul>
          ${tips.map((tip) => `<li>${tip}</li>`).join('')}
        </ul>

        <strong>User Answers:</strong><br>
        <ul>
          ${answers.map((answer, index) => `<li>Question ${index + 1}: ${answer}</li>`).join('')}
        </ul>
      </div>
    `;

    // User email options
    const userMailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: userEmail,
      subject: 'Your Parenting Style Quiz Result',
      html: userEmailContent,
    };

    // Admin email options
    const adminMailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: adminEmail,
      subject: 'New Parenting Style Quiz Submission',
      html: adminEmailContent,
    };

    // Send emails
    await transporter.sendMail(userMailOptions);
    console.log('User email sent successfully');
    await transporter.sendMail(adminMailOptions);
    console.log('Admin email sent successfully');

    return res.status(200).json({ message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}

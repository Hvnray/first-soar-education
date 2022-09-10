require('dotenv').config()

export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const EMAIL = process.env.email
  const PASSWORD = process.env.password
  const SERVICE = process.env.mail_service

  let transporter = nodemailer.createTransport({
    service: SERVICE,
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: EMAIL,
    subject: "New user from Firstsoareducation",
    text: `
    A new User Will Like to Contact You \n
    First Name: ${req.body.firstName} \n
    Last Name: ${req.body.lastName} \n
    Email: ${req.body.email} \n
    Phone Nos.: ${req.body.phone} \n
    Educational level: ${req.body.educationalLevel} \n
    Course: ${req.body.course} \n
    Message: ${req.body.message}
    `,
    html: `<h1>A new User Will Like to Contact You </h1>
    <p>First Name: ${req.body.firstName}</p>
    <p>Last Name: ${req.body.lastName}</p>
    <p>Email: ${req.body.email}</p>
    <p>Phone Nos.: ${req.body.phone}</p>
    <p>Educational level: ${req.body.educationalLevel}</p>
    <p>Course: ${req.body.course}</p>
    <p>Message: ${req.body.message}</p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({ error: "failed to send" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ success: "Email sent: " + info.response });
    }
  });
}

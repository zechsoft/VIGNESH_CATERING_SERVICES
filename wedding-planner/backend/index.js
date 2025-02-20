const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // Replace with your email
    pass: "your-email-password", // Replace with your email password or app password
  },
});

app.post("/send-email", (req, res) => {
  const { name, city, weddingDate, email, phone, menuPreferences } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com", // Replace with your email
    to: email, // Send to the user's email
    subject: "Your Wedding Planning Details",
    text: `Hello ${name},\n\nHere are your wedding details:\n\nCity: ${city}\nDate: ${weddingDate}\nPhone: ${phone}\n\nThank you for using our service!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent successfully!");
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

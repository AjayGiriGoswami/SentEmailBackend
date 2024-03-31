const express = require("express");
const cors = require("cors");
const port = 2500;
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Start");
});

// send mail

app.post("/register", (req, res) => {
  const { email } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ajay124767@gmail.com",
        pass: "ezmf comm qsqx xqsc",
      },
    });

    const mailOptions = {
      from: "ajay124767@gmail.com",
      to: email,
      subject: "Thanks for  registering!",
      text: `Hi ${email}, Thanks for registering on our platform`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error" + error);
      } else {
        // console.log("Email sent:" + info.response);
        res.status(201).json({ status: 201 });
      }
    });
  } catch (error) {
    console.log("Error" + error);
    res.status(401).json({ status: 401, error });
  }
});

// server start
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

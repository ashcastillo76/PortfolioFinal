const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose/config');
require('./routes/routes.js')(app);

app.listen(5000, () => console.log("Now listening on PORT 5000"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "ashcastillo76@gmail.com",
      pass: "Love274539",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "ashcastillo76@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });
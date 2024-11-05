// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import sgMail from "@sendgrid/mail";
// const { ADMIN_EMAIL, SENDGRID_API_KEY } = process.env;
// sgMail.setApiKey(SENDGRID_API_KEY);

// const handler = async (req, res) => {
//   const { from, subject, message } = req.body;
//   const msg = {
//     to: from,
//     cc: ADMIN_EMAIL,
//     from: ADMIN_EMAIL,
//     subject,
//     text: message,
//     html: `<p>${message}</p>`,
//   };
//   console.log(req.body);
//   console.log(msg);

//   try {
//     await sgMail.send(msg);
//     res.status(200).end();
//   } catch (error) {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//     res.status(500).json(error);
//   }
// };

// export default handler;

const nodemailer = require("nodemailer");

const handler = async (req, res) => {
  const { from, subject, message } = req.body;
  const { ADMIN_EMAIL } = process.env;

  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
    tls: {
      rejectUnauthorized: false, // disable SSL verification for testing
    },
  });
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      to: from,
      // cc: ADMIN_EMAIL,
      from: ADMIN_EMAIL,
      subject,
      text: message,
      html: `<p>${message}</p>`,
    });
    console.log(nodemailer.getTestMessageUrl(info));
    res.status(200).end();
  } catch (error) {
    console.log(error);
  }
};
export default handler;

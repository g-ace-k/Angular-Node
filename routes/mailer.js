const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/sendemail', (req, res, next) => {
    nodemailer.createTestAccount((err, account) => {

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            tls: { rejectUnauthorized: false },
            auth: {
                user: account.user, // generated ethereal user
                pass: account.pass  // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: req.body.email, // sender address
            to: 'gacekmike22@gmail.com', // list of receivers
            subject: 'Test subject', // Subject line
            text: req.body.text, // plain text body
            html: '<b>' + req.body.text + '</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.json({success: false, msg: "There was an error sending the email"});
            }
            //console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            return res.json({ success: true, msg: "Email Sent", url: nodemailer.getTestMessageUrl(info)});

        });
    });
});

router.get('/test',(req,res,next) => {
    console.log("test");
    res.send("This is a test");
});

module.exports = router;
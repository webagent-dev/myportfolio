const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASSWORD
    }
})


const sendEmail = (email, subject, text, cb) => {
    const mailOptions ={
    from: email,
    to: process.env.MY_EMAIL,
    subject,
    text
}
transporter.sendMail(mailOptions, (err, data) => {
    if(err){
        cb(err, null)
    } else{
       cb(null, data)
    }
})
}

module.exports = sendEmail
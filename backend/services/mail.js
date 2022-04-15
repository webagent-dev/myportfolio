const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
    auth: {
        api_key: '',
        domain: ''
    }
}

const transporter = nodemailer.createTransporter(mailGun(auth))

const sendEmail = (email, subject, text, cb) => {
    const mailOptions ={
    from: email,
    to: 'webagent24@gmail.com',
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
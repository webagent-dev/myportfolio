const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'webagent24@gmail.com',
        pass: ''
    }
})


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
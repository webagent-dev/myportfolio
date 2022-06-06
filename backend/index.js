require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500
const logger = `server started at http://localhost:${PORT}`
const connectToDb = require('./db/connect')
const projectRouter = require('./routes/data.router')
const authRouter = require('./routes/auth.router')
const updateRouter = require('./routes/update.route')
const sendMail = require('./services/mail')
const cors = require('cors')

// Middlewares Component
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// Routers 
app.use('/project', projectRouter)
app.use('api/v1/auth', authRouter)
app.use('/user', updateRouter)
//  Send mail route
app.post('/send_mail',(req, res) => {
    console.log('DATA', req.body)
    const {email, subject, text } = req.body
    sendMail(email, subject, text, (err, data) => {
            if(err){
                res.status(500).json({msg: ' unable to send mail please try again later'})
            }else{
                res.status(200).json({msg: 'mail send successfully'})
            }
    })
})
// Start fUNCTION
const start = async () => {
    try{
        await connectToDb(process.env.MONGO_URL);
        app.listen(PORT, () => console.log(logger))
    }catch(err){
        console.log(err)
    }
}

start()
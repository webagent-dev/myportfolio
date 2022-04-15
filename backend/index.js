const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500
const logger = `server started at http://localhost:${PORT}`
const connectToDb = require('./db/connect')
const projectRouter = require('./routes/data.router')

// Middlewares Component
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// Routers 
app.use('/project', projectRouter)
// Start fUNCTION
const start = async () => {
    try{
        await connectToDb('mongodb://localhost/port');
        app.listen(PORT, () => console.log(logger))
    }catch(err){
        console.log(err)
    }
}

start()
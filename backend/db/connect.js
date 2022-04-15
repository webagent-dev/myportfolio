const mongoose = require('mongoose')

const connectToDb = (url) => {
    try{
        mongoose.connect(url)
        .then(() => console.log('connected to DB'))
        .catch((err) => {
            console.log(err)
        })
    }catch(err){
        console.log(err)
    }
}

module.exports =  connectToDb
const mongoose = require('mongoose')
const mongouri =process.env.PORT
const connectToMongo =async ()=>{
    mongoose.connect(mongouri,()=>{
     
         console.log('connected to mongose succesfullly')
    })
}
module.exports= connectToMongo;
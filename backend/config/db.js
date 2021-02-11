const mongoose =  require('mongoose')
require('dotenv').config()


const mongoConnect = async ()=>{

    try{
        const URI = process.env.MONGO_URI

        await mongoose.connect(URI, { useFindAndModify : false, useCreateIndex: true, useNewUrlParser: true})
        
        console.log('mongodb conneected')


    }catch(err){
        console.log(err)
    }
   

}
mongoConnect()

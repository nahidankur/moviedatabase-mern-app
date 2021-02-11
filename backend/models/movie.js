const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    moviename : {
        type : String,
        required: true
    }, 
    releasedate : {
        type : Number,
        required: true
    },
     genre: {
         type: String,
         required: true
     },
     budget: {
         type: Number,
         required: true
     }
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie
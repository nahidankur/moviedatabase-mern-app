const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')

//View All Movie
router.get('/', (req, res)=>{
    Movie.find()
    .then(movies=>res.json(movies))
    .catch(err=> res.status(400).json('Error' + err))

})

//Add Movie
router.post('/add', (req, res)=>{
    const moviename = req.body.moviename
    const releasedate = Number(req.body.releasedate)
    const genre = req.body.genre
    const budget = Number(req.body.budget)

    const newMovie = new Movie({
        moviename, releasedate, genre, budget
    })

    newMovie.save()
    .then(()=>res.json('New Movie Added'))
    .catch(err=>res.status(400).json('Error'+ err))
})

//Find Movie by Id
router.get('/:id', (req, res)=>{
    Movie.findById(req.params.id)
    .then(movie=>res.json(movie))
    .catch(err=>res.status(400).json('Error'+ err))
})

//Movie Delete
router.delete('/:id', (req, res)=>{
    Movie.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Movie Deleted'))
    .catch(err=>res.status(400).json('Error'+ err))
})

//Movie Update
router.post('/update/:id', (req, res)=>{
    Movie.findById(req.params.id)
    .then(movie=>{
        movie.moviename = req.body.moviename
        movie.releasedate = req.body.releasedate
        movie.genre = req.body.genre
        movie.budget = req.body.budget

        movie.save().then(()=>res.json('Movie Updated')).catch(err=>res.status(400).json('Error' + err))
    }).catch(err=>console.error(err))
})



module.exports = router
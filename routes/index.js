const express = require('express');
const router = express.Router();
const MoviesModel = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    
    MoviesModel.find()
    .then ( (response) => {
        // console.log(response)
        res.render('movies', {
            allMovies: response
        })
    })
    .catch ( (error) => {
        next(error)
    })
})

router.get('/movies/:movieId', async (req, res, next) => {

    try {

        const response = await MoviesModel.findById(req.params.movieId)
        // console.log(response)
        res.render('movie-info.hbs', {
            movie: response
        })

    }
    catch (error) {

        next(error)
    }




})

module.exports = router;

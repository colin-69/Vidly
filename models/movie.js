const Joi = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const {genreSchema} = require('./genre');

const movie = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0
    }
});
const Movie = mongoose.model('Movies', movie);

function validateMovies(movie) {
    const schema = Joi.object({
        title: Joi.string().min(2).required(),
        genreId: Joi.objectId().required(),
        numberInStock: Joi.string().min(0).required(),
        dailyRentalRate: Joi.string().min(0).required()    
    });
    return schema.validate(movie);
}

exports.Movie = Movie;
exports.validateMovies = validateMovies;

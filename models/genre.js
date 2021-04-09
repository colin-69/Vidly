
const Joi = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const genreSchema = new Schema({ 
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxLength: 50   
    }
});

const Genre = mongoose.model('Genre', genreSchema);
    
function validateGenre(genre) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required()});
    
    return schema.validate(genre);
}

exports.Genre = Genre;
exports.validateGenre = validateGenre;
exports.genreSchema = genreSchema;
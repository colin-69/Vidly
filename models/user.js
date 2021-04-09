const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const user = new Schema({ 
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxLength: 50   
    },
    email: {
        type: String, 
        required: true,
        minlength: 5,
        maxLength: 100,
        unique: true   
    },
    password: {
        type: String, 
        required: true,
        minlength: 5,
        maxLength: 1000   
    },
    isAdmin: Boolean
});

user.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
    return token;
}


const User = mongoose.model('User', user);
    
function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(100).email().required(),
        password: Joi.string().min(5).max(1000).required()
    });
        
    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
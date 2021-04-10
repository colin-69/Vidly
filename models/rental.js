const Joi = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const rental = new Schema({
    customer: { 
        type: new Schema({
            name: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
                },
            isGold: {
                type: Boolean,
                },
            phone: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
                }      
            }),  
        required: true
    },
    movie: {
        type: new Schema({
            title: {
                type: String,
                required: true,
                trim: true, 
                minlength: 5,
                maxlength: 255
                },
            dailyRentalRate: { 
            type: Number, 
            required: true,
            min: 0,
            max: 255
            }   
        }),
        required: true
    },
    dateOut: { 
        type: Date, 
        required: true,
        default: Date.now
        },
    dateReturned: { 
        type: Date
    },
    rentalFee: { 
        type: Number, 
        min: 0
    }
  });
const Rental = mongoose.model('Rental', rental);

function validateRental(rental) {
    const schema = Joi.object({
        customerId: Joi.objectId().required(),
        movieId: Joi.objectId().required()
        });
  
    return schema.validate(rental);
}
  
  exports.Rental = Rental; 
  exports.validateRental = validateRental;

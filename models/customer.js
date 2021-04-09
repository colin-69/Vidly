const Joi = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const customer = new Schema({ 
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxLength: 50   
    },
    isGold: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 25
    }
});

const Customer = mongoose.model('Customer', customer);
    

function validateCustomer(customer) {
    const schema = Joi.object({
        name: Joi.string().required(),
        phone: Joi.string().required(),
        isGold: Joi.boolean()
    });
    
    return schema.validate(customer);
}


exports.Customer = Customer;
exports.validateCustomer = validateCustomer;
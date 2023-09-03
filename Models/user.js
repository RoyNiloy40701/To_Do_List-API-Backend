const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true,
          minlength: 5,
          maxlength: 15
     },
     email: {
          type: String,
          required: true,
          unique: true,

     },
     password: {
          type: String,
          required: true,
          minlength: 6,
          maxlength: 1024
     },
     isUser: Boolean
});

const User = new mongoose.model('User', userSchema);

function validateUser(user) {
     const schema = Joi.object({
          name: Joi.string().min(5).max(15).required(),
          email: Joi.string().required().email(),
          password: Joi.string().min(6).max(255).required(),
     });
     return schema.validate(user);
}

module.exports.User=User;
module.exports.validateUser=validateUser;
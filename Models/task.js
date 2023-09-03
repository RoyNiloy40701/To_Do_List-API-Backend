const Joi = require('joi');
const mongoose = require('mongoose');


const Task = mongoose.model('Task', new mongoose.Schema({
     title: {
          type: String,
          required: true,
          minlength: 5,
          maxlength: 50
     },
     description: {
          type: String,
          required: true,
          minlength: 20,
          maxlength: 250
     },
     isDone: {
          type: Boolean,
          default: false
     },
     date: {
          type: Date,
          requiredPaths: true,
          default: Date.now
     }

}));

function validateTask(task) {
     const schema = Joi.object({
          title: Joi.string().min(5).max(50).required(),
          description: Joi.string().min(15).max(250).required(),
          isDone: Joi.boolean(),
          date: Joi.date()
     });
     return schema.validate(task);
}

module.exports.Task = Task;
module.exports.validateTask = validateTask;
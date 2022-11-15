const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Email введен в неверном формате',
    },
  },
});
module.exports = mongoose.model('contact', contactSchema);

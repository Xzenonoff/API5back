const routerContacts = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  createContact, getContacts, deleteContact,
} = require('../controllers/contacts');

routerContacts.post('/contacts', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    number: Joi.string().required(),
    email: Joi.string().required().email(),
  }),
}), createContact);

routerContacts.get('/contacts', getContacts);
routerContacts.delete('/contacts/:number', celebrate({
  params: Joi.object().keys({
    number: Joi.string().required(),
  }),
}), deleteContact);

module.exports = routerContacts;

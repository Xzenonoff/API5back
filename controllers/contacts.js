const Contact = require('../models/contact');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');

const createContact = (req, res, next) => {

  const {
    name,
    number,
    email,
  } = req.body;
  Contact.create({
    name,
    number,
    email,
  })
    .then((numberId) => res.status(200).send({ data: numberId }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Данные невалидны');
      }
      throw err;
    })
    .catch(next);
};
const getContacts = (req, res, next) => {
  Contact.find({})
    .then((numbers) => res.status(200).send(numbers))
    .catch(next);
};
const deleteContact = (req, res, next) => {
  Contact.findOneAndDelete({number: req.params.number})
    .then((contact) => {
      if (!contact) {
        throw new NotFoundError('Такой номер не найден');
      }
      res.send({ message: 'Этот номер удалён' });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Данные невалидны');
      }
      throw err;
    })
    .catch(next);
};
module.exports = { createContact, getContacts, deleteContact };
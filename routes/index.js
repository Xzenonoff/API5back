const router = require('express').Router();
const routerContacts = require('./contacts');
const NotFoundError = require('../errors/NotFoundError');

router.use(routerContacts);
router.use('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

module.exports = router;

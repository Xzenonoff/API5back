require('dotenv').config();
const rateLimit = require('express-rate-limit');

const { DBURL = 'mongodb://0.0.0.0:27017/db' } = process.env;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
module.exports = {
  DBURL,
  limiter,
};

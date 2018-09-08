const inputIs = require('input-is');

const date = (value) => inputIs.date(value);

module.exports = {
  date,
};

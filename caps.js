'use strict';

const events = require('./events.js');

//stages of every packages

require('./driver.js');
require('./vendor.js');

events.on('pickup', (payload) => {
  console.log('There is a New order is waiting', payload);
});
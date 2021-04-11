'use strict';

const events = require('./events');

let payload;

setTimeout(() => {
  events.on('pickup', (orderInfo) => {
    payload = orderInfo;
    console.log(`DRIVER: picked up order: ${orderInfo.orderID}`);
    events.emit('in-transit', orderInfo);

    setTimeout(() => {
      console.log('delivered');
      events.emit('delivered', payload);
    }, 3000);
  });
}, 1000);
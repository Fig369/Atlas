var events = require('events');
var eventEmitter = new events.EventEmitter();


var myEventHandler = function () {
  console.log('I think therefore I am');
}


eventEmitter.on('think', myEventHandler);


eventEmitter.emit('think');
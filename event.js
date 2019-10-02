var events = require('events');
//Inbuilt events module

var eventEmitter = new events.EventEmitter();
//Event emmiter to be able to acces the inbuilt props and methods

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
}
  
//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);
  
//initializes the 'scream' event:
eventEmitter.emit('scream');
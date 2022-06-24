const EventEmitter = require('events');
const util = require('util');

function Greetr(){
       this.greeting = 'Hey Hello world'
}

util.inherits(Greetr,EventEmitter);


Greetr.prototype.greet = function(){
    console.log('hey new greet here');
    this.emit('greet');
};


const greeter1 = new Greetr();
greeter1.on('greet',function(){
    console.log('greeted here with greeting function name');
});
greeter1.greet();
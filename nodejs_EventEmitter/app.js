const Emitter = require('events');
const eventConfig = require('./greet');

const emtr = new Emitter();

emtr.on(eventConfig.events.GREET,function (){
    console.log('somewhere, someone said hello');//second output
});

emtr.on(eventConfig.events.GREET,function(){
    console.log('a greeting occured!');//third output
});

console.log('Hello');//first output

emtr.emit(eventConfig.events.GREET);
console.log(eventConfig.events); //{ GREET: 'greet' }
console.log(eventConfig.events.GREET); //greet

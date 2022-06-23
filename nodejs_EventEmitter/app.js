const Emitter = require('events');

const emtr = new Emitter();

emtr.on('greet',function (){
    console.log('somewhere, someone said hello');//second output
});

emtr.on('greet',function(){
    console.log('a greeting occured!');//third output
});

console.log('Hello');//first output

emtr.emit('greet');
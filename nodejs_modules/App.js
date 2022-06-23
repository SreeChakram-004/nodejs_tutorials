const greet = require('./greet');
const greet1 = require('./greet1');
const greet2 = require('./greet2');
const greetNew = require('./greet2');
const greetNew1 = require('./greet3');
const greet4 = require('./greet4').foo;

greet();
greet1.greet();
greet2.greeting();
greet2.greet = 'hey new change here';
greetNew.greeting();

const newVar = new greetNew1();
newVar.greeting();


greet4();

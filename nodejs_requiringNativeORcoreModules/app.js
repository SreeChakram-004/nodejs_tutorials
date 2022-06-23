const util = require('util');

const call1 = 'hey harry';
const call2 = util.format(call1,'Where is hermoine');
util.log(call2);
console.log(call2);


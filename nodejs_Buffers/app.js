const buf = new Buffer('abcde', "utf8"); //Buffer is pre-defined keyword
console.log(buf); //<Buffer 61 62 63 64 65>
console.log(buf.toString()); //hey
console.log(buf.toJSON()); //{ type: 'Buffer', data: [ 97, 98, 99, 100, 101 ] }
console.log(buf[2]); //99

buf.write("99",3);
console.log(buf.toString()); //abc99

const buffer = new ArrayBuffer(8);
const buffer1 = new ArrayBuffer(16);

const view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view);//Int32Array(2) [ 5, 15 ]


const view1 = new Int32Array(buffer1);
view1[0] = 5;
view1[1] = 15;
console.log(view1);//Int32Array(4) [ 5, 15, 0, 0 ]

exports = function foo(){
    console.log('hey hello')
}
const declared = module.exports;
console.log(exports);
console.log(declared);
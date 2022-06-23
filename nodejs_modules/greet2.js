function greet2(){
    this.greet = 'Heyoo';
    this.greeting = function(){ 
        console.log(this.greet)
    }
}

module.exports = new greet2();
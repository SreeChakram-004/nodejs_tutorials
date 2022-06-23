function greet3(){
    this.greet = 'Heyoo';
    this.greeting = function(){ 
        console.log(this.greet)
    }
}

module.exports = greet3;
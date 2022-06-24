//call and apply
const obj = {
    name: 'john doe',
    greet: function (){
        console.log(`Hey , ${this.name}`)
    }
};

obj.greet();
obj.greet.call({name: 'Dannerian Doe'});
obj.greet.apply({name: 'john F Kennedy'});


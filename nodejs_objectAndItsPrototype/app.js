const person = {
    firstname: 'siri',
    lastname: 'doe', 
    greet : function (){
       return 'Hey'+' '+this.firstname+' '+this.lastname
    }
}

const sonu = Object.create(person);
      sonu.firstname='Sonu';
      sonu.lastname='Doe';
      
const rita = Object.create(person);
      rita.firstname='Rita';
      rita.lastname='Doe';

console.log(person.greet()); //Hey siri Doe
console.log(sonu.greet()); //Hey Sonu Doe
console.log(rita.greet()); //Hey Rita Doe
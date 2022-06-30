//function constructor
function foo(name1,name2){
    this.name1=name1;
    this.name2=name2;
};

const x = new foo('ramu','hari');
console.log(x);//foo { name1: 'ramu', name2: 'hari' }

//prototype
function foo(name1,name2){
    this.name1=name1;
    this.name2=name2;
}
foo.prototype.x=function(){ 
    console.log("Hey"+this.name1+this.name2);
};
const y = new foo('ramu','hari');
console.log(y);//foo { name1: 'ramu', name2: 'hari' }
y.x();//Heyramuhari




//passbyvalue
function foo(x){ 
    x=2;
}
const z=3;
foo(z);
console.log(z);//3

//passbyreference
function foo(x){
    x.prop1 = function(){};
    x.prop2 = {};
}
const a = {};
a.prop1 = {};
foo(a);
console.log(a);//{ prop1: [Function (anonymous)], prop2: {} }








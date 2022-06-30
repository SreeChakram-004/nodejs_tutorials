function App(callback){
    callback();
    console.log('from first component');
};

App(function (){
    console.log('invoked here');
});

//output
//invoked here  
//from first component

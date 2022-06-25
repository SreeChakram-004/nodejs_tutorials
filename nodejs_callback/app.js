function App(callback){
    callback();
    console.log('started here');
}

App(function (){
    console.log('invoked here success');
});

//output
//invoked here success 
//started here
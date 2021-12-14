function receivesAFunction(callback) {
    return callback();
}
receivesAFunction(function () {return "This is a callback!"})

function returnsANamedFunction() {
    return function newFunction() {console.log('Hi')}; 
    
}

function returnsAnAnonymousFunction() {
    return function () {console.log('hi')}
}

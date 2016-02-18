# cpsenize

Wraps synchronous functions with a cps (callback passing style) function


``` javascript

var cpsenize = require('cpsenize');

function add(a, b){
    return a + b;
}

var cpsAdd = cpsenize(add);

cpsAdd(5, 6, function(error, result){
    console.log(result); // 11
});


```

Additionally can also return errors if the function throws

``` javascript

var cpsenize = require('cpsenize');

function add(a, b){
    throw new Error('BANG!!!');
}

var cpsAdd = cpsenize(add, true);

cpsAdd(5, 6, function(error, result){
    console.log(error); // BANG!!!
});


```
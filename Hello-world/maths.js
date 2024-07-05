function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}


//export
module.exports = {
   addFn: add,
    subFu: sub,

};

//export object 

module.exports = {add, sub};
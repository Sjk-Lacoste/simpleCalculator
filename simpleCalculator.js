'use strict';

function addTwoValues(a, b) {
    return a + b;
}

function add(...args) {
    let sum = 0;

    for(let i = 0; i < args.length; i++) {
        sum+=args[i];
    }

    return sum;
}

function multiplyTwoValues(a,b) {
    return a * b;
}

function multiply()

module.exports  = {
    addTwoValues, 
    add,
    multiplyTwoValues 
};

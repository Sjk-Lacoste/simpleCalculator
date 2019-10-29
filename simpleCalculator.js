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

function multiply(...args) {
    let result = 1;

    for (let i = 0; i < args.length; i++) {
        result *= args[i];
    }

    return result;
}

module.exports  = {
    addTwoValues, 
    add,
    multiplyTwoValues,
    multiply
};

console.log(multiply(1,2,3,4));
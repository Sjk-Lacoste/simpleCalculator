'use strict';

function add(...args) {
    let sum = 0;

    for(let i = 0; i < args.length; i++) {
        sum+=args[i];
    }

    return sum;
}

function multiply(...args) {
    let result = 1;

    for (let i = 0; i < args.length; i++) {
        result *= args[i];
    }

    return result;
}

module.exports  = {
    add,
    multiply
};

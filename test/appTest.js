let calculator = require('../simpleCalculator');

describe("Simple calculator that add two numbers", function () {
    it("should be able to add two numbers", function(){
        expect(calculator.addTwoValues(-1,-1)).toEqual(-2);
    });
});

describe("Simple calculator that add two numbers", function () {
    it("should be able to add many numbers", function(){
        expect(calculator.add(1,2,3,4)).toEqual(10);
    });
});

describe("Simple calculator that multiply two numbers", function () {
    it("should be able to multiply two numbers", function () {
        expect(calculator.multiplyTwoValues(1,2)).toEqual(2);
    });
});

describe("Simple calculator to multiply many values", function () {
    it("Should multiply many values", function () {
        expect(calculator.multiply(1,2,3,4)).toEqual(24);
    });
});

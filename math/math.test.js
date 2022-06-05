const { diff, div, mul, sum } = require("./math");
const { maxNum, sqRt } = require("./advancedMath");


describe("Testing the math module", () => {

    test("Should add two numbers", () => {
        expect(sum(1,2)).toBe(3);
    });

    test("Should subtract two numbers", () => {
        expect(diff(3,2)).toBe(1);
    });

    test("Should divide two numbers", () => {
        expect(div(10,5)).toBe(2);
    });

    test("Should multiply two numbers", () => {
        expect(mul(5,2)).toBe(10);
    });

});

describe("Testing the advancedMath module", () => {
    
    test("Should find the square root of a number", () => {
        expect(sqRt(9)).toBe(3);
    });

    test("Should find the maximum number between two numbers", () => {
        expect(maxNum(5,10)).toBe(10);
    });

})
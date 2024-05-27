const fizzbuzz = require("../main");

describe("FizzBuzz function test", () => {
    test('should return "Fizz" if the number is divisible by 3', () => { 
        expect(fizzbuzz(6)).toBe("Fizz");
     });
     test('should return "Buzz" if the number is divisible by 5', () => { 
        expect(fizzbuzz(20)).toBe("Buzz");
     });
     test('should return "FizzBuzz" if the number is divisible by both 3 and 5', () => { 
        expect(fizzbuzz(15)).toBe("FizzBuzz");
     });
     test('should return the number if the number is neither divisible by 3 nor 5', () => { 
        expect(fizzbuzz(7)).toBe(7);
     });
})
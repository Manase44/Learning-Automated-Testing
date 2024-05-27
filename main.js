// Write a function that will take in a number
// If the number is divisible by 3 it returns the string "Fizz"
// If the number is divisible by 5 it returns the string "Buzz"
// If the number is divisible by both 3 and 5 it returns the string "FizzBuzz"
// Otherwise, if the number is not divisible by 3 or 5, then it returns the nuber itself

let fizzbuzz = (number) => {
    if (number % 3 == 0 && number % 5 == 0) {
        return "FizzBuzz";
    };
    if (number % 3 == 0) {
        return "Fizz";
    };
    if (number % 5 == 0) {
        return "Buzz";
    };
    if (number % 3 != 0 && number % 5 != 0) {
        return number;
    };
    
}

module.exports = fizzbuzz;




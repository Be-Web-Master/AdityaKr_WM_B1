// Find the factorial of a number
// function findFactorial(num) - this function will return factorial of a number
// const num = 5;
// output - 120

const num = 5;
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(num));

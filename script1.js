// Write a function to find the sum of all the non-repeating elements
// const arr = [1,1,2,4,5,5,3]
// function getUniqueNumberSum(arr) - this function will return sum of all unique numbers
// output - 2 + 4 + 3 = 9

const arr = [1,1,2,4,5,5,3];
function getUniqueNumberSum(arr){
    let sum = 0;
   for (let i = 0; i < arr.length; i++) {
     if(arr[i]!== i){
       sum += arr[i]
     }
   }
   return sum
}
console.log(getUniqueNumberSum(arr));
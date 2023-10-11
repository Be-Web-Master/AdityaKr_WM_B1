// Create a function to check if all the elements in the array is divisible by given num
// const arr = [2,4,6,7]
// const num = 2;
// function getDivisibleNumbers(arr, num) - this function will return array of all elements completely divisible by num
const arr = [2,4,6,7]
const num = 2
function getDivisibleNumbers(arr, num){
   let res = [];
   for (let i=0; i<arr.length;i++){
      if( arr[i]%num != 0){
         continue
      }else{
        res.push(arr[i])
      }
   }
   return res
}
console.log(getDivisibleNumbers(arr,num));
// Find the elements the divides the sum of all elements
// const arr = [1,2,3,4,5]
// output - [1, 3, 5]
// function findDivisibleElements(arr) - this function will return the array of elements


const arr = [1,2,3,4,5]
function findDivisibleElements(arr){
  let sum = 0;
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    sum = sum+arr[i]
    if(sum%arr[i]=== 0){
        temp.push(arr[i])
    }
  }return temp
}
console.log(findDivisibleElements(arr));
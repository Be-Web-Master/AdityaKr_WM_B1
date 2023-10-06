// If the same number is repeated 3 times in the consecutive locations, count that number
// const arr = [ 11,13,13,13,13,4,4,3,2,13,2,2,2 ]
// output - 3
// function getConsecutiveSameNumCount(arr) - this function will return a number
// explanation -
// 13, 13, 13 - 1
// 13, 13, 13 - 2
// 2, 2, 2 - 3

const arr = [ 11,13,13,13,13,4,4,3,2,13,2,2,2 ]
function getConsecutiveSameNumCount(arr){
  let count = 0;
  for(let i = 0; i<arr.lenght-2; i++){
    if(arr[i] === arr[i+1]){
        count++  
    }
    else{
        count=1
    }
  }
  return count
}
console.log(getConsecutiveSameNumCount(arr));
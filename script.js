// Write a function to find dublicates elements without using an set and map, do it O(n), do not use nested loops
// const arr = [1,1,2,3,4,4,4,5,6,6,7]
// output - [1,4,6]
// function getDublicates(arr) - this function will return array of dublicates in O(n)

const arr = [1,1,2,3,4,4,4,5,6,6,7]
function getDublicates(arr){
  let temp ={};
  let result= [];
  for (let i = 0; i < arr.length; i++) {
    if(temp[arr[i]]){
        temp[arr[i]]++
    }else{
        temp[arr[i]]=1
    }
  }
  for(let key in temp){
    if(temp[key] > 1){
        result.push(+key);
    }
  }
  return result
}
console.log(getDublicates(arr));
// Create a function to remove dublicate elements
// const arr = [1,1,1,2,2,3,4,5,6,6,5]
// function removeDublicates(arr) -> return an array of unique elements - [1,2,3,4,5,6]

const arr = [1,1,1,2,2,3,4,5,6,6,5]
function removeDublicates(arr){
    let tempArr =[];
   for (let i = 0; i<arr.length; i++) {
     if(arr[i] === arr[i+1]){
        continue
     }
     else{
        tempArr.push(arr[i])
     }
   }
   return tempArr
}
console.log(removeDublicates(arr));
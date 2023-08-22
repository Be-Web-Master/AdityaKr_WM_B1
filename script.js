// Count the occurrences of a value in an array
//— create a function that takes 2 args: arr, value 
//— this function returns a number, that is count of number of times the value has appeared in arr
// with forEach & for of
// let arr=[12,34,65,34,34,56,65]
// function count (arr , value){
//     let counter =0;
//     for(let i=0 ;i<arr.length;++i){
//        if(value === arr[i]){
//         counter++
//        }
//     }
//     return counter
// }
// console.log(count(arr,34))


// Get indices of all occurrences of a value in an array (almost polyfill of Array.prototype.findIndex)
//— create a function that takes 2 args: arr, value 
//— this function returns a an array of numbers, where each number is the index position of the value in arr

//forEach , For of

// let arr=[12,34,65,34,34,56,65]

// function indices ( arr , value ){
//     let indice=[]
//      for(let i=0; i<arr.length; i++){
//         if(value === arr[i]){
//             indice.push(i)
//         }
//      }
//      return indice
// }
// console.log(indices(arr,34))


// Get the unique values of an array
//— create a function that takes 2 args: arr
//— this function returns a new array of values from arr, only those which occur only once in that array

// let arr=[12,34,65,34,34,56,65]
// let obj = {};
//     arr.forEach((element , idx , arr) => {
//         obj[element]=1
//     });
// console.log(Object.keys(obj))

// Compare two Arrays (polyfill of Array.prototype.every)
//— create a function that takes 2 args: arr1, arr2
//— this function returns either true or false, if each element of both the arrays are equal with ===


// let arr1 = [1,2,3,4,5];
// let arr2 = [1,3,2,4,5];

// function compare(arr1,arr2){
//     if(arr1.length!==arr2.length) return false
//   for(let i = 0; i<arr1.length; i++){
//     if(arr1[i]!== arr2[i]){
//          return false
//     }
//   }
//   return true
  
// }
// console.log(compare(arr1 , arr2))

// Create an array of numbers in the given range
// — create a function that takes 3 args: startNum, endNum, steps
// — this function returns an array which has numbers from startNum, to endNum in steps.



function GivenRange (startNum ,endNum ,steps){
    let arr=[];
    for(let i= startNum; i<=endNum; i+=steps){
        arr.push(i)
    }
    console.log(arr)
}
GivenRange(0,55,5);
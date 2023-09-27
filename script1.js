// Swap Elements of array given index left
// const arr = [1,2,3,4,5,6]
// const swapLeftBy = 2
// output - [3,4,5,6,1,2]
// function getLeftSwappedArrayByIndex(arr, swapLeftBy) - this will return an swapped array with given index

const arr = [1,2,3,4,5,6];
const swapLeftBy = 2;
function getLeftSwappedArrayByIndex(arr, swapLeftBy){
   let temp = [ ];
   for(let i = 0; i < arr.lenght; i++){
     if(arr[i] === swapLeftBy){
        temp.push(arr[i])
     }
    else if(arr[i] !== swapLeftBy){
        temp.Unshift(arr[i])
    }
  }
   return temp
}
console.log(getLeftSwappedArrayByIndex(arr, swapLeftBy));

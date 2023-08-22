//LINEAR SEARCH

// let arr = [12 ,34, 32 ,35 ,2 ,5]
// function linearSearch(arr, searchValue){
//     for(let i =0;i<arr.length;i++){
//         if (searchValue === arr[i]){
//           return i;
//         }
//     }
//   return -1
// }

// console.log(linearSearch(arr,32))

//BINARY SEARCH
let arr = [1 ,2, 3 ,4 ,5];
function binarySearch(arr, searchingValue){
   let leftPointer = 0;
   let rightPointer=arr.length-1;
   let middlePointer=Math.floor((leftPointer+rightPointer)/2)

   while(arr[middlePointer]!==searchingValue && leftPointer<rightPointer){
    if(arr[middlePointer] < searchingValue){
        leftPointer = middlePointer+1
    }
    else{
        rightPointer = middlePointer
    }
    middlePointer = Math.floor((leftPointer+rightPointer)/2)
   }
   if(arr[middlePointer] === searchingValue){
    return middlePointer
   }
   return -1
}
console.log(binarySearch(arr,8));
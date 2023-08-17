//bubble sort:


// const arr = [23 , 56, 67 , 76 , 98 , 76 , 34 , 25 ,  12 , 43];
// const bubbleDSort =(arr) => {
// const length = arr.length;
//  for(let i = 0; i < length; i++){
//     for(let j = 0; j< length; j++){
//         if(arr[i] < arr[j]){
//             const temp = arr[i];
//             arr[i]= arr[j];
//             arr[j] =temp ;
//         }
//     }
    
//   }
//   console.log(arr)
// }
// bubbleDSort(arr);


//Selection Sort:

const arr = [23 , 56, 67 , 76 , 98 , 76 , 34 , 25 ,  12 , 43];
const selectionSort = ( arr ) => {
 const length = arr.length;
 for(let i = 0 ; i < length; i++){
     let minIndex = i;
     let temp = arr[i]
     for(let j = i+1; j < length; j++){
        if(arr[j] < arr[minIndex]){
            minIndex = j;
        }
     }
     arr[i] = arr[minIndex]
     arr[minIndex] = temp
 }
 console.log(arr)
}
selectionSort(arr)



// const arr = [23 , 56, 67 , 76 , 98 , 76 , 34 , 25 ,  12 , 43];
// const InsertionSort = (arr) => {
// const n = arr.length;
// for(let i = 1; i < n; i++){
//     let curt = arr[i];
//     let j = i-1;
//     while(j >= 0 && arr[j] > curt){
//         arr[j+1] = arr[j]
//         j--;
//     }
//     arr[j+1] = curt
//     console.log(arr[j+1])
//  }
// }
// InsertionSort(arr);
// console.log(arr)



// const arr = [23,45,65,43,98,87];

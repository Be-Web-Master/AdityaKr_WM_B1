function rev(arr){
   let barr=[];
   for(let i = arr.length-1; i >= 0; i--){
     barr.push(arr[i])
   }
   return barr
}
let arr=[1,2,3,4,5]
console.log(rev(arr))

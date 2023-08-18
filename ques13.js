let arr =[5,9,8,7,6,4]


// function MaxNumber(arr){
    // const max = arr.reduce((a , b)=>Math.max(a,b))
    
// }
// MaxNumber([12,12,12,-12])÷÷


// const max= arr.reduce((acc,val)=>{
//     if(acc<val){
//         acc = val
//     }
//     return acc
// }
// )

// console.log(max);

arr.reduce((acc , value , idx , array) =>{
  console.log(acc , value , idx , array)
}) 
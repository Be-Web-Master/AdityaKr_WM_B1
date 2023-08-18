function SumOfArray(arr){
    const sum = arr.reduce((total , item)=>{
       return  total + item
    })
    console.log(sum)
    
}
SumOfArray([12,12,12,-12])

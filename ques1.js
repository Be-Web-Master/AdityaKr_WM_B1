function arrayGen(num , num1){
    const outputArr = []
    for(let i = num; i <= num1; i++){
        outputArr.push(i)
    }
    return outputArr
}
const arr = arrayGen(1,12)

for(let i = 1; i<=arr.length; i++){
    let sqr = i**2;
    console.log(sqr)
}



arr.forEach(num => {
    let sqr = num **2
    console.log(sqr)
})



let i = 1
while(i <= arr.length){
  let sqr = i **2
  i++
console.log(sqr)
}





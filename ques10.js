// const arr5 = arrayGen(1,11)
// let arr1 = [];
// arr5.forEach(elem => {
//   let elemOfDouble = elem *2
//   arr1.push[elemOfDouble]
// })
// console.log(arr1)



const arr5 = arrayGen(1,11);
let arr1 = [];
arr5.forEach(elem => {
  let elemOfDouble = elem *2
  arr1[elem - 1 ] = elemOfDouble
})
console.log(arr1)
// const arr1= [12, 23, 34, 45, 43, 67, 65,];
// const arr2 = arr1.slice( 2 )
// console.log(arr2)
// slice jo hai ak new array return krta hai 

// const arr= [12, 23, 34, 45, 43, 67, 65,];
// const arr3 = arr.splice(2,3, 55,99,98)
// console.log(arr)
// splice jo hai exting array me hi override krta hai


// const arr= [12, 23, 34, 45, 12, 45, 12,];
// const arr1 = arr.indexOf(12,1)
// console.log(arr1)


// const arr = ["a","d","i","t","y","a"];
// const arr1 = arr.join("") 
// console.log(arr1)


// const arr=[244,455,677, 655]
// const arr1 = arr.includes(243)
// console.log(arr1)   


// const arr=[1,2,3,4,5,6,7,8,9, 11, 23 ,45, 45]
// const arr1 = arr.sort((a,b) => b-a)
// console.log(arr1)
// const arr2 = arr1.sort((a,b) => a-b)
// console.log(arr2)

// const newarr = ["Aditya","Honey","Akash","Nitu","Naina"].sort((a,b)=>{
//     if(a>b){
//         return 1
//     }else if(b>a){
//         return -1
//     }else{
//         return 0
//     }
// })
// console.log(newarr)


// const arr = [1,2,3,4,5,6,7,833,45,56,]
// const newarr = arr.filter((elem)=> elem > 5)
// console.log(newarr)
// filter jo hai modify nai krta elem kuch v 


// const arr = [1,2,3,4,5,6,7,833,45,56,]
// const newarr = arr.map((elem)=> (elem*2) > 5 )
// console.log(newarr)

// let arr = [1,2,3,4,5,6,7,833,45,56]
// const arr1 = arr.find((elem)=> elem > 2)
// console.log(arr1)

// ye ak hii elem return krta hai 



// let arr = [1,2,3,4,5,6,7,833,45,56]
// const arr1 = arr.findLast((elem)=> elem > 56)
// console.log(arr1)



// let arr = [1,2,3,4,5,6,7,833,45,56]
// arr.forEach((elem)=> elem+12)
// console.log(arr)


// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
// console.log(numbers)

// let arr = [1,3,5,3,56,32,]

// let arr1 = arr.findIndex((elem) => elem > 99)
// console.log(arr1)

// let arr = [1,3,5,3,56,32,]

// let arr1 = arr.findLastIndex((elem) => elem > 9)
// console.log(arr1)

// let arr = [1,3,5,3,56,32,]

// let arr1 = arr.some((elem) => elem <= 3)
// console.log(arr1)

// let arr = [1,3,5,3,56,32,]

// let arr1 = arr.every((elem) => elem <= 3)
// console.log(arr1)

// let arr = [1,3,5,3,56,32,]

// let arr1 = arr.reverse()
// console.log(arr1)
// // override current array

// const arr=[1,2,3,[3,4,5,[2,3,4,5]],]
// const arr1 = arr.flat(1)
// console.log(arr1)

// const arr=[1,2,3,[3,4,5,[2,3,4,5]],]
// const arr1 = arr.flatMap((elem)=>{
//     if(typeof elem == "number"){
//         return elem*2
//     }
//     else{
//         return elem
//     }
// })  
// console.log(arr1)



const studentDetails = [
    {name:"aditya",marks:32},
    {name:"nitu",marks:76},
    {name:"vibhu",marks:72},
    {name:"siddh",marks:42},
    {name:"rahul",marks:62},
    {name:"manas",marks:12},
    {name:"raj",marks:22},
]
let newstudentdelails = [ ]
studentDetails.forEach((student)=>{
    if(student.marks > 45){
        newstudentdelails.push({
            name:student.name,
            marks:student.marks,
            status:'pass',
            passingMarks: student.marks - 45 
        });
    }
    else{
        newstudentdelails.push({
            name:student.name,
            marks:student.marks,
            status:'fail',
            failmarks: 45 - student.marks
        });
    }
})
console.log(newstudentdelails)
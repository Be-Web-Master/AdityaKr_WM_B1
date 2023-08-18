// Write a function that takes an array of numbers and returns a new array
//  containing only the prime numbers using the filter method.

//DOUTE
const array = [1,2,3,4,5,6,7,8,9,11,13,14,16,17,19];
function isprime(elem){
    for(let i=2; i<elem; i++){
        if(elem%i===0){
            return false
        }
        else{
            return elem
        }
    }
    return elem > 1
}
console.log(array.filter(isprime))
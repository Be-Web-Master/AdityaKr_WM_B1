function palindrome(){
  let arr = [...str]
  for(let i = 0; i < arr.length; i++){
    for(let j = arr.length - 1; j <= 0 ; j--){
        if (arr[i]==arr[j]){
            return true
        }
    }
  }
  return false
}
let str = 'acbca';
console.log(palindrome(str));

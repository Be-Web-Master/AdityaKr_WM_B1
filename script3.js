// Given an integer x, return true if x is a palindrome
// , and false otherwise.
// Example 1:

let num = 121
function palindrome(num){
  const str = num.toString();
  const rev = str.split('').reverse().join('');
  if(str !== rev){
     return false
  }
  else{
    return true
  }
}
console.log(palindrome(num));
function palindrome(str2){
  let rev =""
  for(let i = str2.length-1; i >= 0 ; i--){
     rev+=str2[i]
  }
  if(str == rev){
    return true
  }else{
    return false
  }
}
let str2 = 'acbca';
console.log(palindrome(str2));

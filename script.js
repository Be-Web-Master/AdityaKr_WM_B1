// 1. Create a function to check if the string contains any vowel
// const string = "qwrtyp"
// function isContainsVowel(string) - complete this function if contains vowel return true otherwise false

const string = "qartyp"
function isContainsVowel(str){
  for (let i = 0; i < str.length; i++) {
    if(str[i]=='a' || str[i]=='e' || str[i]=='i'||str[i]=='o'||str[i]=='u' || str[i]=='A' || str[i]=='E' ||str[i]=='I' ||str[i]=='O' ||str[i]=='U' ){
        return true
    }
  }
  return false
}
console.log(isContainsVowel(string));
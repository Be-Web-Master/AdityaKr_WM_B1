// Convert the capital character to lowercase and lowercase character to uppercase
// given string = "WebMaster"
// output - "wEBmASTER"
// function toggleEachCharacter(string) - this function will return the converted string

const string = "WebMaster"
function toggleEachCharacter(string){
  const arr =[...string];
  const str1 = [];
  for(let i = 0; i<arr.length; i++){
    if(arr[i].charCodeAt() >= 97 && arr[i].charCodeAt() <= 127){ 
       str1.push(arr[i].toUpperCase())
    }
    else{
        str1.push(arr[i].toLowerCase())
    }
}
console.log(str1.join(''));
}
toggleEachCharacter(string)
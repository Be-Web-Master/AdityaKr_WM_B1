// Truncate a given string to a specified length and add an ellipsis at the end using loops.

function Truncate(str , maxLen){
  let srt2=""
  for(let i = 0; i<maxLen; i++){
     srt2+=str[i]
  }
  return srt2+"..."
}
let str="Aditya"
let ans = Truncate(str , 3)
console.log(ans)
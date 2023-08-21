let string="Aditya";
function RevStr(string){
    let reverser="";
    for(let i = string.split('').length-1; i>=0; i--){
        reverser += string[i];
    }
    return {reverser}
}
console.log(RevStr(string))
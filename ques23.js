function upper(srt){
let srt1="";
for (const char of srt) {
    let value = char.charCodeAt();
    if(value >= 97 && value <=122){
        srt1+=String.fromCharCode(value - 32)
    }else srt1+=char
}
console.log(srt1)
}
let srt ="qwertyuio"
upper(srt)
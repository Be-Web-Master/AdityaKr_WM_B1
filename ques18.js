let srt = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
function counting(str){
let vowel = "";
let cont = "";
for(let i=0; i<str.length; i++){
    if(srt[i]==='a'|| srt[i]==='e' || srt[i]==='i' || srt[i]==='o' || srt[i]==='u' ||
    srt[i]==='A'|| srt[i]==='E' || srt[i]==='I' || srt[i]==='O' || srt[i]==='U' ){
       vowel += srt[i]
    }
    else{
        cont+=srt[i];
    }
}
console.log(`Vowel: ${vowel.length} and Consonent: ${cont.length}`)
}
counting(srt);

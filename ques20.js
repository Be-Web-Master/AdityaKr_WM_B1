// 20. Write a program to reverse a given number.

function reverse(num){
    let rev=0 , rem;
    while(num != 0){
        rem = num%10 ;
        rev = rev*10+rem
        num =Math.floor(num/10);
    }
    console.log(rev)
}
reverse(12345)
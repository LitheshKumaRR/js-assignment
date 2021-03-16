var a=3445,reverse=0,remainder;
while(a>0){
    remainder=a%10;
    reverse=reverse*10+remainder;
    a = Math.floor(a/10);
}
console.log(reverse);
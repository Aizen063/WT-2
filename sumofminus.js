let i = 1;
let n= 15;
let sum= 0;
for (i=1;i<=n;i++){
    if(i%2==0){
        sum = sum+i;
    }
    else{
        sum = sum-i;
    }
    console.log("The sum is:", sum);
}

// let fibonacci =[0,1]
// for (let i = 2; i<=10; i++){
//     fibonacci[i]= fibonacci[i-1] + fibonacci[i-2];
// }

// console.log(fibonacci);
function fibo(n){
    if(n ==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    for(let n=2; n<=8; n++){
       fibo[n] = fibo[n-1] + fibo [n-2]
    }
    return fibo;
}
console.log(fibo(10));
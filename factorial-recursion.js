// 6! = 6*5*4*3*2*1 
let multification= 1;
for(let i = 6; i>=1; i--){
    // let mult = 
   multification= multification*i;
}
console.log(multification);

function multi(i){
    if(i == 1){
        return 1;
    }
    return i * multi(i-1)
}
console.log(multi(6));
function sum(a,b,c,d,e,f,g){
    return a+b+c+d+e+f+g;
}
console.log(sum(1,2,3,4,5,6,7));

function sum2(...rest){
    return rest.reduce((acc, current) => acc + current, 0);
}
console.log(sum2(1,2,3,4,5));
console.log(sum2(1,2,3,4,5,6,7));
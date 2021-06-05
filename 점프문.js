loop: while(true){
    ...
    if(confirm("종료하시겠습니까?")) break loop;
    ...
}

let a = [2,4,6,8,10], b = [1,3,5,7,9,11];
loop: for(var i=0; i<a.length; i++){
    for(var j=0; j<b.length; j++){
        if(a[i]==b[j]) break loop;
    }
}
console.log("a["+i+"] = b["+j+"]");
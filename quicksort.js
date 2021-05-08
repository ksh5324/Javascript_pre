function quicksort(){
    var p = x[Math.floor((first+last)/2)];
    for(var i=first, j=last; ; i++,j--){
        while(x[i]<p) i++;
        while(p<x[j]) j--;
        if(i>=j) break;
        var w = x[i]; x[i] = x[j]; x[j] = w;
    }
    
}
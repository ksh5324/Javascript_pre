var i=1;
while(i<=100){
    if(i%5==0&&i%7!==0){
        document.write("<font color='red'>"+i+"</font>"+"<br>");
    }
    else if(i%7==0&&i%5!=0){
        document.write("<font color='green'>"+i+"</font>"+"<br>");
    }else{
        document.write("<font color='aqua'>"+i+"</font>"+"<br>");
    }
}
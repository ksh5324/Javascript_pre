var doglist = document.getElementById("doglist");
var element = document.createElement("li");
var text = document.createTextNode("불독");
var i=0;
    setInterval(function(){
        doglist.insertBefore(element,doglist.children[i]);
        element.appendChild(text);
        i++;
        if(i==4){
            i=0;
        }
    }, 1000);
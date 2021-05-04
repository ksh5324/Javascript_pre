var object = new Array();
var num = 1;
var a= document.getElementById;
function add(){
    if(num==1){
        var id = document.getElementById('todo_1').value;
        var li = document.getElementById('li1').innerHTML = id;
    }else if(num==2){
        var id = document.getElementById('todo_1').value;
        var li = document.getElementById('li2').innerHTML = id;   
    }else if(num==3){
        var id = document.getElementById('todo_1').value;
        var li = document.getElementById('li3').innerHTML = id;
    }else if(num==4){
        var id = document.getElementById('todo_1').value;
        var li = document.getElementById('li4').innerHTML = id;
    }else{
        alert("더 이상 추가 할 수 없습니다.");
    }
    num++;
}
function bar(ab){
    if(ab==1){
        if(ab1==1){
            $('#li1').css("text-decoration", "line-through");
        }else{
            $('#li1').css("text-decoration", "none");
        }
        ab1*=-1;
    }else if(ab==2){
        if(ab2==1){
            $('#li2').css("text-decoration", "line-through");
        }else{
            $('#li2').css("text-decoration", "none");
        }
        ab2*=-1;
    }else if(ab==3){
        if(ab3==1){
            $('#li3').css("text-decoration", "line-through");
        }else{
            $('#li3').css("text-decoration", "none");
        }
        ab3*=-1;
    }else if(ab==4){
        if(ab4==1){
            $('#li4').css("text-decoration", "line-through");
        }else{
            $('#li4').css("text-decoration", "none");
        }
        ab4*=-1;
    }
}
var ab1=1;
var ab2=1;
var ab3=1;
var ab4=1;
function remove(){
    var num = prompt("삭제할 번호");
    if(num==1){
        document.getElementById('li1').innerHTML = null;
        this.num=num;
    }else if(num==2){
        document.getElementById('li2').innerHTML = null;
        this.num=num;
    }
    else if(num==3){
        document.getElementById('li3').innerHTML = null;
        this.num=num;
    }else if(num==4){
        document.getElementById('li4').innerHTML = null;
        this.num=num;
    }
}

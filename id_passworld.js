var id="easy1004"
var pw="112233"
var user_id=prompt("아이디는?","");
if(id==user_id){
    var user_pw=prompt("비밀번호는?","");
    if(pw==user_pw){
        document.write(user_id+"님 반갑습니다.");
    }
    else{
        alert("비밀번호가 일치하지 않습니다.");
        location.reload;
    }
}else{
    alert("아이디가 일치하지 않습니다.")
    location.reload;
}
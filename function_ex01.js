function CheckWeight(name, height, weight){
    this.userName = name;
    this.userHeight = height;
    this.userWeight = weight;
    this.minWeight;
    this.maxWeight;
    this.getInfo = function(){
        var str="";
        str += "이름:"+this.userName+", ";
        str += "키:"+this.userHeight+", ";
        str += "몸무게:"+this.userWeight+", ";
        return str;
    }
    this.getResult=function(){
        this.minWeight=(this.userHeight-100)*0.9-5;
        this.maxWeight=(this.userHeight-100)*0.9+5;
        if(this.userWeight>=this.minWeight&&this.userWeigt<=this.maxWeight){
            return "정상 몸무게입니다.";
        }else if(this.userWeight<this.minWeight){
             return "정상 몸무게보다 미달입니다."
        }else{
            return "정상 몸무게 보다 초과입니다."
        }
    }
}

var a = new CheckWeight("abc", 168, 62);
var b = new CheckWeight("b", 180, 88);
console.log(a);
console.log(b);

document.write(a.getInfo());
document.write(b.getInfo());

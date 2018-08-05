/*function type(target) {
    var template={
        "[object Array]" : "array",
        "[object Object]" : "object",
        "[object Number]" : "number-object",
        "[object Boolean]" : "boolean-object",
        "[object String]" : "string-object"
    }
    if(target===null){
        return null;
    }
    if(typeof (target)=='object'){
        var str=Object.prototype.toString.call(target);
        return template[str];
  }else {
        return typeof(target);
    }
}*/


/*for(var i=0;i<10;i++){
    var num=Math.floor(Math.random()*1000);
    console.log(num);
}*/

/*
Person.prototype.name ='sunny';
function Person(){
}
var person = new Person();

Person.prototype={
    name:'cherry'
}
*/

/*Person.prototype.lastName='deng';
function Person(name){
    this.name=name;
    }
    var person =new Person('xuming');*/

/*var str='abcd曾曾';
var num=str.length;
for( var i=0;i<str.length;i++){
    if(str.charCodeAt(i)>255){
        num+=1;
    }
}
console.log(num);*/

/*var mrdeng ={
    name:"MrDeng",
    age:30,
    sex:"male",
    health:100,
    smoke:function(){
        console.log('i am smoking ! cool!!');
        this.health--;
    },
    drink:function(){
        console.log('i am drink!!');
        this.health++;
    }
}

var deng ={
    preparewife:"xiaowang",
    name:"laodeng",
    sex:"male",
    wifee:"",
    gf:"xiaoli",
    divorce:function(){
        delete this.wifee;
        this.gf=this.preparewife;
    },
    getMarried:function(){
        this.wifee=this.gf;
    },
    changGF:function(someone){
        this.preparewife=someone;
    }
}*/
/*
function Car(color){
        this.color=color;
        this.name='BMW';
        this.height='1400';
        this.lang='4900';
        this.weight='1000';
        this.health=100;
        this.run=function(){
            this.health --;
        }
    }
        var car =new Car('red');
        var car1 =new Car();*/

// function Student(name,age,sex){
//     this.name=name;
//     this.age=age;
//     this.sex=sex;
//     this.grade=2017;
// }
//     var student = new Student('zhengsan',18,'male');

/*
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
/!* alert("天才的开始！"); *!/
function toolu() {
    alert("天才的开始！");
}

function myFunction() {
    x = document.getElementById("demo");
    x.innerHTML = "这是改变后的内容";
}

function changeImage() {
    Element = document.getElementById("myimage")
    if (Element.src.match("bulbon")) {
        Element.src = "/img/pic_bulboff.gif";
    }
    else {
        Element.src = "/img/pic_bulbon.gif";
    }
}
*/

/* var price=prompt("请输入价格：");
if(isNaN(price)){
	alert("请输入一个数字");
}else{

	if(price>=18){
		alert("大于等于18"+price);
	}else{
		alert("小于等于18")
	}
}
alert("价格是："+price); */

/* 第二杯半价 */
/* var price = 10, count;
count = prompt(price + "元一杯，请要多少杯：");
if (isNaN(count)) {
	document.write("必须是数字");
} else {
	if (isInteger(count)) {
		if (count % 2 == 0) {
			totalprice = count * price * 0.75;
		} else {
			totalprice = count * price * 0.75 + price / 4;
		}
		document.write("你共消费了：" + totalprice + "元");
	}else{
		document.write("必须整数杯。");
	}
	
} */

/* 判断是否整数 */
// function isInteger(c) {
// 	return c % 1 === 0
// }
/* 随机机生成 */
// var a = Math.random();
/* if(a>0.5){
	document.write("天行健！");
}else{
	document.write("停止!");
} */

// a = Math.floor(a * 6) + 1;
//document.write("数值是：" + a);

//document.write("<img src=\"img/" + a + ".png\"/>");

/*
function chengsz() {
	var a = Math.random();
	a = Math.floor(a * 6) + 1;
	//alert("随机数是："+a);
	//document.write("数值是：" + a);

	//document.write("<img src=\"img/" + a + ".png\"/>");

	document.getElementById("sz").src = "img/"+a+".png";
	document.getElementById("sjss").innerHTML="随机数据:"+a;
}
var isPlaying="true";
function control() {
	if (isPlaying)
	{
        document.getElementById("bgm").pause();
        isPlaying=!isPlaying;
	}else {
        document.getElementById("bgm").play();
        isPlaying=!isPlaying;
	}

}*/
/*
for(var i=0;i<10;i++){
	document.write("a" +" ");
}*/
// var str =false+1;
// document.write(str);
// var demo=false==1;
// document.write(demo);
// if(typeof(a)&&-true+(+undefined)+""){
//     document.write('基础扎实1');
// }
// if (11+'11'*2==33){
//     document.write('基础扎实2');
// }
// !!" "+!!""-!!false||document.write("基础扎实3");
/*14:事件文本事件*/
/*    var input = document.getElementsByTagName('input')[0];
   /!* input.oninput = function(e){
        console.log(this.value);
    }*!/
    input.onchange = function(e){
        console.log(this.value);
    }*/

/*14:计算键盘按下*/
 /*   document.onkeypress = function (e) {
        console.log(String.fromCharCode(e.charCode));
    }*/
  /*  document.onkeydown = function (e) {
        console.log(e);
    }
    document.onkeyup = function () {
        console.log('keyup');
    }*/

/*13:请算鼠标移动还是点击*/
 /*   var firstTime =0;
    var lastTime = 0;
    var key = false;
    document.onmousedown = function(){
        firstTime = new Date().getTime();
    }
    document.onmouseup =function(){
        lastTime = new Date().getTime();
        if(lastTime-firstTime<300){
            key =true;
        }
    }
    document.onclick = function(){
        if(key){
            console.log('click');
            key = false;
        }
    }*/

/*12:鼠标左右*/
   /* document.onmousedown = function(e){
        if(e.button == 0){
            console.log('左键');
        }else if(e.button ==2){
            console.log('右键');
        }else if(e.button == 1) {
            console.log('中键');
        }
    }*/

/*11:移动物体*/
/*        var div = document.getElementsByClassName('move')[0];
        var disX,
            disY;
        div.onmousedown = function(e){
            div.innerText="移动";
            disX = e.pageX -parseInt(div.style.left);
            disY = e.pageY -parseInt(div.style.top);
            document.onmousemove = function(e) {
                div.innerText="移动";
                var event = e || window.event;
                div.style.left = e.pageX - disX + "px";
                div.style.top = e.pageY - disY + "px";
            }
            document.onmouseup = function(){
                div.innerText="按下";
                console.log("up");
                document.onmousemove = null;
            }
        }*/

/*10:脚本化CSS-兼容事件处理模式*/
/*function  addEvent(elem,type,handle) {
    if(elem.addEventListener){
        elem.addEventListener(type,handle,false);
    }else if(elem.attachEvent){
        elem.attachEvent('on'+type,function () {
            handle.call(elem);
        })
    }else {
        elem['on' + type] = handle;
    }
}*/

/*10:脚本化CSS-取元素兼容模式*/
/*function getStyle(elem,prop){
    if(window.getComputedStyle){
        return window.getComputedStyle(elem,null)[prop];
    }else {
        return elem.currentStyle[prop];
    }
}
var div = document.getElementsByTagName('div')[0];
var timer =0;
 timer = setInterval(function () {
   div.style.left = parseInt(getStyle(div,'left'))+1+'px';
   if(parseInt(div.style.left)>500){
       clearInterval(timer);
    }
},10);*/
/*9:自动向下看文本 */
/*var start = document.getElementsByTagName('div')[0];
var timer = 0;
start.onclick = function () {
    if(start.innerText=="开始"){
       // console.log("开始");
        start.innerText="暂停";
      timer = setInterval(function(){
            window.scrollBy(0,10);
        },100);
    }else {
        start.innerText="开始";
    //    console.log("暂停");
        clearInterval(timer);
    }

}*/

/*8:innerWidth视口尺寸向后兼容 */
/*function getViewportoffset() {
  if(window.innerWidth){
          return{
              w :window.innerWidth,
              h :window.innerHeight
          }
  }else {
      if(document.compatMode == "BackCompat"){
          return{
              w:document.body.clientWidth,
              h:document.body.clientHeight
          }
      }else {
          return {
              w :document.documentElement.clientWidth,
              h :document.documentElement.clientHeight
          }
      }
  }
}*/

/*8:求滚动条滚动
 function getScrolloffset() {
       if(window.pageXOffset){
           return{
               x :window.pageXOffset,
               y :window.pageYOffset
           }
       }  else {}
       return{
           x :document.body.scrollLeft + document.documentElement.scrollLeft,
           y :document.body.scrollTop + document.documentElement.scrollTop
       }
 }       */


/*8:定时器 时间进位
var minutesNode = document.getElementsByTagName('input')[0];
var secondsNode = document.getElementsByTagName('input')[1];

var minutes  = 0,seconds = 0;

var time = setInterval(function(){
              seconds++;
              if(seconds==60){
                  seconds = 0;
                  minutes++;
              }
              secondsNode.value = seconds;
              minutesNode.value = minutes;
              if(minutes ==3){
                  clearInterval(time);
              }
},1000)*/

/*7:定时器*/
/*var date = new Date();
date.setMinutes(16);

setInterval(function () {
    if(new Date().getTime()-date.getTime()>1000)
    {
        Console.log('时间到了。');
    }
},1000);*/

/*6:将目标节点targetNode插到指定节点afterNode后面*/
/*Element.prototype.insertAfter = function (targetNode,afterNode) {
    var beforNode = afterNode.nextElementSibling;
    if(beforNode==null){
        this.appendChild(targetNode);
    }else {
        this.insertBefore(targetNode,beforNode);
    }
}
        var div = document.getElementsByTagName('div')[0];
        var b = document.getElementsByTagName('b')[0];
        var span = document.getElementsByTagName('span')[0];
        var i = document.getElementsByTagName('i')[0];
        var p =document.createElement('p');
        var a =document.createElement('a');*/
/*5:将目标节点顺序逆转*/
/*Element.prototype.invertedChild=function(){
  var child = this.children;
  var len = child.length;
    for(var j=len-2;j>=0;j--)
    {
        console.log(j);
        this.appendChild(child[j]);
    }
    return this;
}
var div =document.getElementsByTagName('div')[0];*/


/*4:扫雷格__多选择器*/
/*    var ul = document.getElementsByTagName('ul')[0];
    ul.onmouseover = function (e) {
        var event = e||window.event;
        var target = event.target||event.srcElement;

        target.style.backgroundColor = "rgb(0,255,"+ target.getAttribute('img-date')+")";
        target.setAttribute('img-date',parseInt(target.getAttribute('img-date'))+6);
}*/

/*3:移动DIV___多选择器*/
        /*var btn = document.getElementsByTagName('button')[0];
        var div =document.createElement('div');
        document.body.appendChild(div);
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.backgroundColor="red";
        div.style.position = "absolute";
        div.style.left = "0";
        div.style.top ="0";
        div.style.margin ="100px";
        var speed = 10;
        btn.onclick = function(){
            speed ++;
        }
        document.onkeydown = function (e) {
            // console.log(e); //打印按了什么键
            switch (e.which) {
                case 38:
                    div.style.top = parseInt(div.style.top) -speed + "px";
                    break;
                case 40:
                    div.style.top = parseInt(div.style.top) +speed + "px";
                    break;
                case 37:
                    div.style.left = parseInt(div.style.left) -speed + "px";
                    break;
                case 39:
                    div.style.left = parseInt(div.style.left)+ speed +"px";
                    break;
            }
        }
*/
/*2:移动DIV___多选择器*/
            /*var div =document.createElement('div');
            document.body.appendChild(div);
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.backgroundColor="red";
            div.style.position = "absolute";
            div.style.left = "0";
            div.style.top ="0";
            var speed = 1;
            var timer = setInterval(function(){
                speed += speed/7;
                div.style.left = parseInt(div.style.left) + speed +"px";
                div.style.top = parseInt(div.style.top) + speed +"px";
                if(parseInt(div.style.top) > 300 && parseInt(div.style.left) > 300){
                    clearInterval(timer);
                }
            },50);*/

/*2:选项卡___多选择器*/
/*var btn =document.getElementsByTagName('button');
var div=document.getElementsByClassName('content');
for(var i=0;i<btn.length;i++){
    (function(n){
        btn[n].onclick=function () {
            for(var j=0;j<btn.length;j++){
                btn[j].className="";
                div[j].style.display="none";
            }
            this.className="active";
            div[n].style.display="block";
        }
    }(i))
}*/

/*1:点击一次变红和绿*/
        /*var div =document.getElementsByTagName('div')[0];
        div.style.width='100px';
        div.style.height='100px';
        div.style.backgroundColor='red';

        var count =0;
        div.onclick=function () {
            count ++;
            if(count%2==1){
                this.style.backgroundColor='green';
            }else {
                this.style.backgroundColor='red';
            }
        }*/

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
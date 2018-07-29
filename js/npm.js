function displayDate() {
	document.getElementById("demo").innerHTML = Date();
}
/* alert("天才的开始！"); */
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
function isInteger(c) {
	return c % 1 === 0
}
/* 随机机生成 */
var a = Math.random();
/* if(a>0.5){
	document.write("天行健！");
}else{
	document.write("停止!");
} */

a = Math.floor(a * 6) + 1;
//document.write("数值是：" + a);

//document.write("<img src=\"img/" + a + ".png\"/>");

function chengsz() {
	var a = Math.random();
	a = Math.floor(a * 6) + 1;
	//alert("随机数是："+a);
	//document.write("数值是：" + a);

	//document.write("<img src=\"img/" + a + ".png\"/>");

	document.getElementById("sz").src = "img/"+a+".png";
	document.getElementById("sjss").innerHTML="随机数据:"+a;
}

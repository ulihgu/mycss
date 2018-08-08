/*2:数组去重*/
 // var arr=[1,1,1,1,2,2,2,2,1];
/*Array.prototype.unique=function(){
    var temp={};
    var arr=[];
    len = this.length;
    for(var i=0;i<len;i++){
        if(!temp[this[i]]){
            temp[this[i]]="abc";
            arr.push(this[i]);
        }
    }
    return arr;
}*/

/*1:检查数据类型*/
/*
function type(target) {
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

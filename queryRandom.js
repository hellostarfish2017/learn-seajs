/**
 * sea.js
 * URL地址后面增加随机参数
 */

define(function(require,exports,module){
    exports.queryRandom=function(url){
        var steQuertRandom='random='+Math.random();
        var arrQuery=url.split('?');
        if(arrQuery[1]!=undefined){
            //含查询字符
            if(url.slice(-1)==='&'){
                url=url+steQuertRandom;
            }else{
                url=url+'&'+steQuertRandom;
            }
        }else{
            //不含查询字符
            url=url+'?'+steQuertRandom;
        }
        return url;
    }
})
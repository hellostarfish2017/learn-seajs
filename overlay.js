/**
 * sea.js
 * 半透明背景遮罩层
 * 依赖:elementCreate.js
 */

define(function(require,exports,module){
    //模块代码
    
    var elementCreate=require('./elementCreate');//引入依赖
    var overlay=(function(){
        var element=elementCreate.create('div',{
            styles:{
                display:'none',
                width:'100%',
                backgroundColor:'#000',
                opacity:0.35,
                position:'absolute',
                zIndex:1,
                left:0,
                top:0,
                bottom:0
            }
        });
        document.body.appendChild(element);

        return{
            display:false,
            show:function(){
                element.style.display='block';
                this.display=true;
                return this;
            },
            hide:function(){
                element.style.display='none';
                this.display=false;
                return this;
            }
        };
    })();

    exports.overlay_func=overlay;//暴露出api
});



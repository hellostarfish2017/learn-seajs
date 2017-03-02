/**
 * sea.js学习项目
 * 创建元素
 */


//exports.create表示模块暴露在外的方法名为create；
//return element表示该方法返回的是创建的元素对象；
define(function(require,exports){
    exports.create=function(tagName,attr){
        var element =null;
        if(typeof tagName === 'string'){
            element=document.createElement(tagName);

            if(typeof attr === 'object'){
                var keyAttr,keyStyle;
                for(keyAttr in attr){
                    if(keyAttr === "styles" && typeof attr[keyAttr] === "object"){
                        for (keyStyle in attr[keyAttr]){
                            element.style[keyStyle]=attr[keyAttr][keyStyle];

                            //IE compatible
                            if(keyStyle == 'opacity' && window.innerWidth + '' == 'undefined'){
                                element.style.filter='alpha(opacity='+(attr[keyAttr][keyStyle]*100)+')';
                            }
                        }
                    }else{
                        if(keyAttr === 'class'){
                            keyAttr = 'className';
                        }
                        element[keyAttr]=attr['class'];
                    }
                }
            }
        }
        
        return element;
    };
});


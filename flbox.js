/**
 * sea.js
 * 弹窗模块
 */

define(function(require,exports){
    var funCreate=require('./elementCreate')
    ,   funOverlay=require('./overlay')
    ,   funAjax=require('./ajax_method');
    
    var eleWin=funCreate.create('div',{
        styles:{
            display:'none',
            position:'fixed',
            left:'50%',
            zIndex:2
        }
    })
    ,   eleBar=funCreate.create('div',{
        styles:{
            fontSize:'12px',
            padding:'8px',
            backgroundColor:'#eee'
        }
    })
    ,   eleClose = funCreate.create("a", {
            href: "javascript:",
            styles: {
                fontSize: "12px",
                color: "#34538b",
                textDecoration: "none",
                position: "absolute",
                margin: "-22px 0 0 85%"    
            }    
    })
    ,   eleBody = funCreate.create("div", {
            styles: {
                backgroundColor: "#fff",
                borderTop: "1px solid #ddd"
            }    
    })
    ,   eleOverlay=funOverlay.overlay_func;

    eleWin.appendChild(eleBar);
    eleWin.appendChild(eleClose);
    eleWin.appendChild(eleBody);
    document.body.appendChild(elewin);

    eleBar.innerHtml='弹出框一个';
    eleClose.innerHtml='[关闭]';
    eleClose.onclick=function(){
        flbox.close();
        return false;
    };

    var flbox={
        loading:function(){
            eleBody.innerHtml='<div style="width:200px;height:100px;padding:10px;">加载中...</div>';
            // eleBody.innerHtml='<div class="load_status">加载中...</div>';            
        },
        open:function(url){
            var self=flbox;
            funxAjax.get(url,function(html){
                eleBody.innerHtml=html;
                slef.postion();
            })
        },
        postion:function(){
            eleWin.style.display='block';
            eleOverlay.show();
            var widthWin = eleWin.clientWidth
            ,   heightWin = eleWin.clientHeight;

            // 定位
            eleWin.style.marginLeft =  "-" + widthWin / 2 + "px";
            eleWin.style.top = (screen.availHeight - heightWin - 100) / 2 + "px";
        },
        close:function(){
            eleOverlay.hide();
            eleWin.style.display='none';
            eleBody.innerHtml='';
        }
    }

    exports.fl_open=flbox.open;

})
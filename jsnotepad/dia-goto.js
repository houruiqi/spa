var $dlgGoto=(function(){
    var $dlg=$('<div class="notepad-dlg-goto"><div class="dialogbox"><div class="titlebar"><p class="title">转到指定行</p><span class="close-btn">×</span></div><div class="main"><label for="">行号（L）：</label><br><input class="txt-line-num" type="text"><br><input class="btn-goto" type="button" value="转到"><input class="btn-cancel" type="button" value="取消"></div></div></div>');
    var $btnClose = $dlg.find('.close-btn'),
        $btnCancel = $dlg.find('.btn-cancel'),
        $btnGoto = $dlg.find('.btn-goto'),
        $txtLineNum = $dlg.find('.txt-line-num'),
        $titleBar = $dlg.find('.notepad-dlg-titlebar');
    var cfg = {
        container:'body',
        line:6,
        totalLine:10,
        gotoHandler: null
    }; 
    function validate() {
        if($txtLineNum.val() === '') {
          alert('请输入要转到的行号！');
          return false;
        }
        var reg = new RegExp("^[0-9]*$");
        // console.log(reg.test($txtLineNum.val()));
        if(reg.test($txtLineNum.val())){
            var n = Number($txtLineNum.val());
            if(n === 0 || n > cfg.totalLine) {
              alert('行数超过了总行数！');    // TODO：需要改成自己的对话框
              return false;
            }
        }
        else{
            alert('请输入数字！');
            return false;
        }
        return true;
    }
    function show(conf){
        $(cfg.container).append($dlg);
        $.extend(cfg,conf);
        num = cfg.num;
        $btnClose.click(function(){
            $dlg.remove();
        })
        $btnCancel.click(function(){
            $dlg.remove();
        })
        $btnGoto.click(function(){
            if(!validate()) 
                return;
            else{
                console.log("转到了");
            }
            $dlg.remove();
        })
    }
     
    return{
        show:show
    }
}())
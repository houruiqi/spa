$(function(){
    var a=$("#range"),
    n=$("#age");
    n.html(a.val()),
    a.change(function(){
        n.html(a.val())
    })
});
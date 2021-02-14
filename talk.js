$(function() {
    $('#yes').click(function(event) {
        modal('buibuibuibui...(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('明人不说暗话！', A);
    });
    $('#lover1').click(function(event){
        window.open("lover1/index.html");
    });
    $("#lover2").click(function(event){
        window.open("lover2/index.html");
    });
});

function A() {
    modal('我喜欢你！', B);
}

function B() {
    modal('我知道你在等我这一句话', C);
}

function C() {
    modal('情人节快乐，宝贝！', D);
}

function D() {
    modal('不要看朋友圈，你也有！', E);
}

function E() {
    modal('虽然里的有点远，但我的心还是在你那！', F);
}

function F() {
    modal('我要给你相伴到老', G);
}

function G() {
    modal('房产证上写你名', H);
}

function H() {
    modal('我会做饭', I);
}

function I() {
    modal('亲亲亲亲亲~', J)
}

function J() {
    modal('爱你。么么哒！', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}

// btn up
let front_bar = document.querySelector('.front-bar');
(function ($) { 
    window.onload = function(){
        setTimeout(function () {
            $('.front-bar').addClass("hide");
        }, 2000);
    }
})(jQuery);

let btnup = document.querySelector('.btnup');
window.onscroll = function(){
    if(scrollY > 100){
        btnup.style.display = 'block';
    }else{
        btnup.style.display = 'none'
    }
}
btnup.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:'smooth'
    });
}
document.querySelector('#close_alert').onclick = function(){
    console.log('fahd');
    document.querySelector('.alert').style.display = 'none';
}

let open = document.querySelector('#open');
let close = document.querySelector('#close');
open.onclick = function(){
    (function ($) { 
        $(".menu").addClass("open");
        $(".unlockscreen").addClass("lockscreen");
        $("body").addClass("of-h");
    })(jQuery);
};
close.onclick = function(){
    (function ($) { 
        $(".menu").removeClass("open");
        $(".unlockscreen").removeClass("lockscreen");
        $("body").removeClass("of-h");
    })(jQuery);
};

document.querySelector("#btn-help").onclick = function(){
    (function ($) { 
        $("body").addClass("of-h");
    })(jQuery);
};
document.querySelector("#btn-of-h-close").onclick = function(){
    (function ($) { 
        $("body").removeClass("of-h");
    })(jQuery);
};

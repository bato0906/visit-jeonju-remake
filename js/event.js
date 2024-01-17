var mql = window.matchMedia("screen and (max-width: 800px)");

if (mql.matches) {
	console.log("모바일 버전 출력중.");
} else {
	console.log("데스크탑 버전 출력중.");
}


$("header").hover(
    function () {
        $("header").animate({ opacity: 1 }, 0);
        $(this).stop().animate({ height: 400 }, 500);
        $(this).css("background", "rgba(255,255,255,0.95)");
        $(this).css("color", "#181818");
        $(".logo img").attr("src", "./img/logo/logo-eng.png");
        $(".lang img").attr("src", "./img/icons/globe-black.png");
        $(".savesearch img:first-child").attr(
            "src",
            "./img/icons/heart-fill-black.png"
        );
        $(".savesearch img:last-child").attr(
            "src",
            "./img/icons/search-black.png"
        );
    },
    function () {
        $(this)
            .stop()
            .animate({ height: 128 }, 500, function () {
                $(this).css("background", "transparent");
                $(this).css("color", "#fff");
                $(".logo img").attr("src", "./img/logo/logo-eng-light.png");
                $(".lang img").attr("src", "./img/icons/globe-white.png");
                $(".savesearch img:first-child").attr(
                    "src",
                    "./img/icons/heart-fill-white.png"
                );
                $(".savesearch img:last-child").attr(
                    "src",
                    "./img/icons/search-white.png"
                );

                const st = $("html, body").scrollTop();
                if (st > 100) {
                    $("header").animate({ opacity: 0 }, 0);
                } else {
                    $("header").animate({ opacity: 1 }, 0);
                }
            });
    }
);

$(window).on("scroll", function () {
    const st = $("html, body").scrollTop();
    if (st > 100) {
        $("header").animate({ opacity: 0 }, 0);
    } else {
        $("header").animate({ opacity: 1 }, 0);
    }
});

$("aside img").hover(function(){
    $(this).attr("src","./img/icons/top-circle-fill.png");
},function(){
    $(this).attr("src","./img/icons/top-circle.png");
});

$(".btn-save").hover(function(){
    $(this).children("img").attr("src","./img/icons/heart-fill-purple.png");
}, function(){
    $(this).children("img").attr("src","./img/icons/heart-border-purple.png");
});


$(".other-video img").on("click",function(){
    const src= $(this).attr("data-src");
    $("#playing-video").attr("src", src);
    $(".other-video img").css("border","3px solid #fff");
    $(this).css("border","3px solid #7401b8");
});

$(".zoom-fx").hover(function(){

    $(this).css("transform","scale(1.1)");

}, function(){
    $(this).css("transform","scale(1.0)");
});
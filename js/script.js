$(document).ready(function() {
    reset();
    $(window).resize(function() {
        reset();
    });

    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop && !$("header .collapsed").hasClass("showed")){
            $(".header__wrapper").addClass("slideUp");
            if($(window).width() > 991) {
                $("header *").removeClass("active");
                $("header *").removeClass("showed");
            }
        } else {
            if($(".header__wrapper").hasClass("slideUp")) {
                $(".header__wrapper").removeClass("slideUp");
            }
        }
        lastScrollTop = st;
        if($(".header__wrapper").hasClass("slideUp")) {
            $('.main__menu').removeClass("has_box_shadow");
        }
        if($(this).scrollTop() <= 300) {
            $('.main__menu').removeClass("has_box_shadow");
        } else {
            if(!$(".header__wrapper").hasClass("slideUp")) {
                $('.main__menu').addClass("has_box_shadow");
            }
        }
    });

    $(".btn_language").click(function(e) {
        $(".flyout-container").toggleClass("open");
    });

    $(".navbar-collapse>ul>ul>li>a").click(function(e) {
        if(!$(this).hasClass("a_map_marker")) {
            e.preventDefault();
            var target = $(this).attr("data-target");
            if(!$(target).hasClass("showed")) {
                $(".main__menu").find(".showed").slideUp(0);
                $(".main__menu").find(".collapsed").removeClass("showed");
                $(".main__menu li").removeClass("active");
                if($(this).closest("ul").hasClass("nav_user") && $(".nav_category").hasClass("show")) {
                    $(".btn__controls").trigger("click");
                }
                $(".overlay").removeClass("open");
                $(this).closest("li").addClass("active");
                if($(window).width() > 991) {
                    $(".overlay").addClass("open");
                }
                var target = $(this).attr("data-target");
                $(target).addClass("showed");
                $(target).slideDown(400);
            } else {
                reset();
            }
        }
    });
    $(".overlay").click(function() {
        $(this).removeClass("open");
        reset();
    });
    $(".btn__controls").click(function(e) {
        if($(this).hasClass("btn_active")) {
            
            $(this).next().find(".active").removeClass("active");
            $(this).next().find(".showed").removeClass("showed");
            $(this).removeClass("btn_active");
        } else {
            $(this).addClass("btn_active");
            $(".main__menu").find(".showed").slideUp(0);
            $(".main__menu").find(".showed").removeClass("showed");
            $(".main__menu").find(".active").removeClass("active");
        }
        
    });

    $(".navbar-toggler").click(function(e) {
        if($(this).hasClass("collapsed")) {
            $(".main__menu *").removeClass("active");
            $(".main__menu *").removeClass("showed");
        } else {
            $(".overlay").removeClass("open");
            $(".nav_user>.active>a").trigger("click");
            if(!$(".btn__controls").hasClass("btn_active")) {
                $(".btn__controls").trigger("click");
            }
        }
    });

    $(".all_btn").click(function(e) {
        e.preventDefault();
        $(".all_btn").removeClass("active");
        $(this).addClass("active");
        var hash = this.hash;
        var delta = $(this).closest(".cate__wrapper.showed").offset().top;
			postion = $(hash).offset().top - delta;
			$(this).closest(".cate__wrapper.showed").animate({
			scrollTop: postion},
			400);
    });
});

function reset() {
    
    
    $(".overlay").removeClass("open");
    $("header *").removeClass("open");
    $("header *").removeClass("slideUp");
    $("header *").removeClass("active");
    $("header *").removeClass("showed");
    $("navbar-collapse .collapsed").slideUp(0);
    $(".nav_category .collapsed").outerWidth($(".main__menu").outerWidth());
    if($(window).width() > 991) {
        $(".nav_user .collapsed").width($(".nav_user").width());
    } else {
        $(".nav_user .collapsed").width($(".main__menu").width());
    }
}

function myFunction() {
    var start = document.getElementById("start");
    var moreText = document.getElementsByClassName("hide");
    var btnText = document.getElementById("myBtn");

    if (start.style.display === "none") {
      console.log("lần thứ 2 vào đây");
      start.style.display = "inline";
      btnText.innerHTML = "View All + ";
      for (var i = 0; i < moreText.length; i += 1) {
        moreText[i].style.display = "none";
      }
    } else {
      console.log("lần đầu vào đây");
      start.style.display = "none";
      btnText.innerHTML = "View Less -";
      for (var i = 0; i < moreText.length; i += 1) {
        moreText[i].style.display = "grid";
      }
      // moreText.style.display = "inline";
    }
  }
$(document).ready(function(){
    hoverMenu();
    hoverPostTitle();
    hoverPreNext();
    hoverPostTitle();
    slideShow();
    scrollTop();
    orderPost();
    hoverReadMore();
    hoverImg();
    hoverEffect()
});

$(document).on("mouseover", ".image a img", function(){
    $(this).css({"background-size":"150%", "transition":"all 0.5s ease"});
    	}).on("mouseout", ".image a img", function(){
    $(this).css({"background-size":"100%", "transition":"all 0.5s ease"});
    }); 

function hoverMenu(){
    $('.menu>ul>li>a').hover(function(){
        $(this).css('background-color','black');
        $(this).css('color','white');
        $(this).css('text-decoration','underline');
        $(this).fadeTo("slow(100)", 0.7); 
    },function(){
        $(this).css('background-color','white');
        $(this).css('color','black');
        $(this).css('text-decoration','none');
        $(this).fadeTo("slow(100)", 1); 
    });
}

function hoverPostTitle(){
    $('.post-title>a , .url, .entry-date, .link-right').hover(function(){
        $(this).css('text-decoration','underline');
        $(this).fadeTo("slow(100)", 0.6); 
    },function(){
        $(this).css('text-decoration','none');
        $(this).fadeTo("slow(100)", 1.0); 
    })
}

function hoverReadMore(){
    $('.content-post>a').hover(function(){
        $(this).css('background-color','#5cb85c');
    }, function(){
        $(this).css('background-color','green');
    })
}

function hoverImg(){
    $('.image a img').hover(function(){
//        $(this).transition({ scale: 2.2 });
    });
}

function hoverPreNext(){
    $('.slide-show > a.prev , .slide-show > a.next').hover(function(){
//        $(this).fadeTo("slow(100)", 1); 
//        $(this).css('background',"url('../images/prev.png') 8px 50% no-repeat #000")
//        $('.prev').slideUp(200);
//        $('.prev').slideDown(100);
    },function(){
//        $(this).css('text-decoration','none');
//        $(this).fadeTo("slow(100)", 0.4); 
//        $(this).slideDown(200);

    })
}

function hoverEffect(){
    $('.main-menu').hover(function () {
//		  $(this).effect("bounce", { direction:'down', times:5 }, 300);
	});
}


function slideShow(){
    $('.slide-show article').fadeOut();
    $('.slide-show article:eq(0)').fadeIn().addClass('active');
    $('.next').click(function(){
        next();
    });
    $('.prev').click(function(){
       prev(); 
    });
}

function next(){
    var id = $('.slide-show article.active').index();
    var next = id + 1;
    var leng = $('.slide-show article').length;
    //alert(next);
    if(next == leng){
        next = 0;    
    }
    $('.slide-show article:eq('+id+')').fadeOut().removeClass('active');
    $('.slide-show article:eq('+next+')').fadeIn().addClass('active');
}

setInterval(next,5000);

function prev(){
    var id = $('.slide-show article.active').index();
    var prev = id - 1;
    var leng = $('.slide-show article').length;
    if(prev < 0){
        prev = leng - 1;
    }
    //alert(leng);
    $('.slide-show article:eq('+id+')').fadeOut().removeClass('active');
    $('.slide-show article:eq('+prev+')').fadeIn().addClass('active');
}

//scroll Top
function scrollTop(){
    if ($('#back-to-top').length) {
        var scrollTrigger = 200, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e){
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
}

function orderPost(){
    $('.older_post').click(function(){
        $('.page1').css('display','block');
    })
}


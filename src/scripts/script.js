// Tudo que estiver aqui é javaScript

$(document).ready(function(){  
    $("#toggle-input").click(function(){  
        $("#search-animation").toggleClass("active");  

    });  
    $(".menu-toggle").click(function(){  
        $(this).toggleClass("active");  
        $(".ul-principal").toggleClass("active");  
    });  
    $(".botton-arrow-home").click(function(){  
        
        $(".pista-home").toggleClass("active");  
        $(".line-options-tab").toggleClass("active");  
        $(".buttons-tab-pista").toggleClass("active");  
    });  
});


$('.carousel-foote-js').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    items:4,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.banner-carrosel').owlCarousel({
    loop:true,
    nav:false,
    dots: true,
    items:1
})

var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

//Contador
function countdown(){
    var now = new Date();
    var eventDate = new Date("january 1,2021 00:00:00"); 

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;
    
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;


    setTimeout(countdown, 1000);
}

countdown()

//var now = new date(millseConds);
//var now = new Date(dateString);
//var now = new Date(year, month, date, h, m, s, ms);
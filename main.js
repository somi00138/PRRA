const arrowDownFill = document.querySelector('#arrow-down-fill');
AOS.init({
    offset: 250,
    duration: 700
});

// arrow hover and scroll
$('.arrow-down').mouseover( ()=>{
    arrowDownFill.style.fill = '#84ca1b';

}).mouseleave( ()=> {
    arrowDownFill.style.fill = 'white';

}).click( () => {
    $('html, body').animate({
        scrollTop: $("#omeni").offset().top
    }, "slow");

});

// nav smooth scroll
$('.nav-text a').click(function(event) {
    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    },"slow");

});

$('.btn-light').click( () => {
    $('html, body').animate({
        scrollTop: $('#scilab').offset().top
    },"slow");
});

$('.btn-dark').click( () => {
    $('html, body').animate({
        scrollTop: $('#kontakt').offset().top
    },"slow");
});

$('.backtotop, .backtotopSVG').mouseover(()=>{
    $('.backtotop').css({
        "color":"white",
        "cursor":"pointer"
    })
    $('.backtotopSVG').css({
        "stroke":"white",
        "cursor":"pointer"
    })
}).mouseleave(()=>{
    $('.backtotop').css("color","#989898")
    $('.backtotopSVG').css("stroke","#989898")
}).click(()=>{
    $("html, body").animate({scrollTop: 0}, 800);
});

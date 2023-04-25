//scrolltop//
$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
        $('#scrolltop').fadeIn();
    } else {
        $('#scrolltop').fadeOut();
    }
});
$('#scrolltop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
});

//scrolltojs
$('.js-scrollTo').on('click', function () {
    let page = $(this).attr('href');
    let speed = 750;
    $('html, body').animate({
        scrollTop: $(page).offset().top
    }, speed);
    return false;
});




let seiya = document.getElementById('flechegauche');
let mha = document.getElementById('flechedroite');

mha.addEventListener('click', function(){
    document.getElementById('video1').src = 'img/videomha1.mp4';
    document.getElementById('video2').src = 'img/videomha2.mp4';
    document.getElementById('seiyapart1').style.display = "none";
    document.getElementById('seiyapart2').style.display = "none";
    document.getElementById('mhapart1').style.display = "block";
    document.getElementById('mhapart2').style.display = "block";
    document.getElementById('flechegauche').style.opacity = '100';
    document.getElementById('flechegauche').style.cursor ='pointer';
    document.getElementById('flechedroite').style.opacity = '0';
    document.getElementById('flechedroite').style.cursor ='default'
    document.getElementById('boutonseiya').src ='img/MHALOGO.png';
});



seiya.addEventListener('click', function(){
    document.getElementById('video1').src = 'img/videosaintseiya2.mp4';
    document.getElementById('video2').src = 'img/videosaintseiya.mp4';
    document.getElementById('seiyapart1').style.display = "block";
    document.getElementById('seiyapart2').style.display = "block";
    document.getElementById('mhapart1').style.display = "none";
    document.getElementById('mhapart2').style.display = "none";
    document.getElementById('flechegauche').style.opacity = '0';
    document.getElementById('flechegauche').style.cursor ='default';
    document.getElementById('flechedroite').style.opacity = '100';
    document.getElementById('flechedroite').style.cursor ='pointer';
    document.getElementById('boutonseiya').src ='img/logosaintseiyaavenir.png';
});


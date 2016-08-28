/*  visualizar y ocultar menu */
$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()< 80){
			$('.navbar').css({
				'margin-top': '-100px',
				'opacity': '0'
			});

			$('.navbar-default').css({
				'background-color':'rgba(59,59,59,0)'
			});
		}else {
			$('.navbar').css({
				'margin-top': '0',
				'opacity': '1'
			});

			$('.navbar-default').css({
				'background-color':'rgba(59,59,59,.7)',
				'border-color':'#444'
			});

			$('navbar-brand img').css({
				'height':'35px',
				'padding-top':'0'
			});

			$('.navbar-nav > li > a').css({
				'padding-top':'15px'
			})
		}
	});
});

// Añadiendo Smooth Scrolling
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(document).ready(function(){
	$('.nav-item').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
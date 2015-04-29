/*-----------------------------------------------------------------------------------*/
/*	Header
/*-----------------------------------------------------------------------------------*/

/* Starting Animation on Load */
$('<img/>').attr('src', '../images/background.jpg').load(function() {
	jQuery('#logo').fadeIn(600, function() {
		jQuery('h1').animate({opacity: '1', 'padding-top': '0'}, 500,function() {
			jQuery('h2').animate({opacity: '1', 'padding-top': '0'}, 500,function() {
				if(jQuery(window).width()<767){	
					jQuery('#explore').animate({opacity: '1', 'margin-top': '2em'}, 1000);
				} else {
					jQuery('#explore').animate({opacity: '1', 'margin-top': '4em'}, 1000);
				}
			});
		});
	});
});

textCenter();

	function textCenter()
{
	$('.text-container').css({
        position:'absolute'
    });

    $('.text-container').css({
 
        left: ($(window).width() - $('.text-container').outerWidth())/2,
        top: ($(window).height() - $('.text-container').outerHeight())/2

    });

}
	
jQuery(document).ready(function() {

	/*-----------------------------------------------------------------------------------*/
	/*	Navigation
	/*-----------------------------------------------------------------------------------*/
	
	var animate='down';
	
	jQuery(window).bind('scroll', function () {
	
		/* Animation for Top Navigation */
		var scrollTop = jQuery(window).scrollTop();
		
		if (scrollTop > jQuery('#services').offset().top-60 && animate == 'down') {
			animate='up';
			jQuery('#top-bar').stop().animate({top:'0'}, 300);
		} else if(scrollTop < jQuery('#services').offset().top-60 && animate == 'up'){
			animate='down';
			jQuery('#top-bar').stop().animate({top:'-75px'}, 300);
		}
		
		/* Update Section on Top-Bar */
		jQuery('section').each(function(){
			if (scrollTop > jQuery(this).offset().top-60){
				var section = jQuery(this).attr('id');
				$("#top-navigation ul li").each(function(){
					if(section == jQuery(this).find('a').attr('href').replace("#","") && jQuery(this).not('.active')){
						$("#top-navigation ul li").removeClass('active');
						jQuery(this).addClass('active');
					}
				});
			}
		});
	});
	
	/* Responsive Menu Click */
	jQuery('#menu-mobile').click(function(){
		if ( jQuery("#top-navigation ul").is(":visible") ) {
		    jQuery("#top-navigation ul").slideUp(500);
		   	jQuery('#menu-mobile').removeClass('active');
		} else { 
		   	jQuery("#top-navigation ul").slideDown(500);
		   	jQuery('#menu-mobile').addClass('active');
		}
	});
	
	/* On Resize show menu on desktop if hidden */
	jQuery(window).resize(function() {
		textCenter();
	    if(jQuery(window).width()>992){	
			if (jQuery("#top-navigation ul").is(":hidden") ) {
			    jQuery("#top-navigation ul").show();
			   	jQuery('#menu-mobile').removeClass('active');		
			}
	    } else {
	    	if (jQuery("#top-navigation ul").is(":visible") ) {
			    jQuery("#top-navigation ul").hide();
			   	jQuery('#menu-mobile').removeClass('active');		
			}


	    }
	});
	
	/*-----------------------------------------------------------------------------------*/
	/*	Smooth Scroll - Navigation + .scroll items
	/*-----------------------------------------------------------------------------------*/
	
	jQuery('#top-navigation li').bind('click',function(event){
	    var anchor = jQuery(this).find('a');
	    
	    jQuery('#top-navigation li').removeClass('active');
	    jQuery(this).addClass('active');
	
	    jQuery('html, body').stop().animate({
	        scrollTop: jQuery(anchor.attr('href')).offset().top-50
	    }, 1500,'easeInOutExpo');
	    
	    /* If Mobile hide menu on select */
	    if(jQuery(window).width()<=767){	
		    jQuery("#top-navigation ul").slideUp(500);
			jQuery('#menu-mobile').removeClass('active');
	    }
	    
	    event.preventDefault();
	});
	
	jQuery('.scroll').bind('click',function(event){
	    var anchor = jQuery(this);
	
	    jQuery('html, body').stop().animate({
	        scrollTop: jQuery(anchor.attr('href')).offset().top-50
	    }, 1500,'easeInOutExpo');
	    
	    /* If Mobile hide menu on select */
	    if(jQuery(window).width()<=767){	
		    jQuery("#top-navigation ul").slideUp(500);
			jQuery('#menu-mobile').removeClass('active');
	    }
	    
	    event.preventDefault();
	});
	
	/*-----------------------------------------------------------------------------------*/
	/*	Studio
	/*-----------------------------------------------------------------------------------*/
	
	/* Initialize Slider */	
	var swiper = jQuery('#swiper').swiper({
		loop:true,
		grabCursor: true,
		autoPlay: 4000
	});
	
	/* On Load swiper height should adjust to img size */
	jQuery('.swiper-slide img').load(function() {
		jQuery('#swiper').height(jQuery('.swiper-slide img').height());
		jQuery('.swiper-wrapper').height(jQuery('.swiper-slide img').height());
	});
	
	/* On Resize swiper height should adjust to img size */
	jQuery(window).resize(function() {
		jQuery('#swiper').height(jQuery('.swiper-slide img').height());
		jQuery('.swiper-wrapper').height(jQuery('.swiper-slide img').height());
	});
	
	/*-----------------------------------------------------------------------------------*/
	/*	Services
	/*-----------------------------------------------------------------------------------*/
	
	var curSkills="branding";
	
	/* Services Animations */
	jQuery('.service').click(function(){
		jQuery('.service').removeClass('active');
		jQuery(this).addClass('active');
		var target = jQuery(this).attr('id');
		jQuery("#"+curSkills+"-skills").slideUp(750, 'easeInOutExpo',function(){jQuery("#"+target+"-skills").slideDown(750, 'easeInOutExpo')});
		curSkills =jQuery(this).attr('id');
		jQuery('html, body').stop().animate({
		    scrollTop: jQuery('#services-list').offset().top-100
		}, 1000,'easeInOutExpo');
		
		jQuery("#"+target+"-skills .expand").each(function() {
			jQuery(this).css({width:0}).animate({width:jQuery(this).attr('data-width')}, 2000);
		});
	});
	
	/*-----------------------------------------------------------------------------------*/
	/*	Works
	/*-----------------------------------------------------------------------------------*/
	
	/*var curWork,nextWork,previousWork,offsetWork;

	/* Function to load project */
	/*jQuery('.work').click(function(){
		curWork = jQuery(this).attr("id");
		offsetWork = jQuery("#"+curWork).offset().top;
		var cur = curWork.split('-');
		cur=parseInt(cur[1]);
		nextWork=cur+1;
		previousWork=cur-1;
		if (previousWork == 0){
			previousWork=jQuery('.work').length;
		}
		if (nextWork == jQuery('.work').length+1){
			nextWork=1;
		}
		jQuery("#page").fadeOut(750, function(){
			window.scrollTo(0,0);
			jQuery("#project-page").fadeIn(750);
		});
	    jQuery('#project').load(curWork+".html");
		jQuery("#previous-project-name").load("work-"+previousWork+".html #project-title");
		jQuery("#next-project-name").load("work-"+nextWork+".html #project-title");
	
	});
	
	/* Function to close project */
	/*jQuery('#close-project').click(function(){
		jQuery('iframe').attr('src', jQuery('iframe').attr('src')); // required to stop video's on exit project
		jQuery("#project-page").fadeOut(500, function(){
			jQuery("#page").fadeIn(500);
			window.scrollTo(0,offsetWork-75);
		});
		
	});
	
	/* Function to load next project */
	/*jQuery('#next-project').click(function(){
		var cur = nextWork;
		jQuery("#next-project-name").animate({"right":"8em","opacity":"0"}, 500, function(){
			jQuery("#project").fadeOut(500,function(){
				jQuery('#project').load("work-"+cur+".html");	
				nextWork=cur+1;
				previousWork=cur-1;
				if (previousWork == 0){
					previousWork=jQuery('.work').length;
				}
				if (nextWork == jQuery('.work').length+1){
					nextWork=1;
				}
				jQuery("#previous-project-name").load("work-"+previousWork+".html #project-title");
				jQuery("#next-project-name").load("work-"+nextWork+".html #project-title");
				jQuery("#project").fadeIn(500);
			});
		});
	});
	
	/* Function to load previous project */
	/*jQuery('#previous-project').click(function(){
		var cur = previousWork;
		jQuery("#previous-project-name").animate({"left":"8em","opacity":"0"}, 500, function(){
			jQuery("#project").fadeOut(500,function(){
				jQuery('#project').load("work-"+cur+".html");	
				nextWork=cur+1;
				previousWork=cur-1;
				if (previousWork == 0){
					previousWork=jQuery('.work').length;
				}
				if (nextWork == jQuery('.work').length+1){
					nextWork=1;
				}
				jQuery("#previous-project-name").load("work-"+previousWork+".html #project-title");
				jQuery("#next-project-name").load("work-"+nextWork+".html #project-title");	
				jQuery("#project").fadeIn(500);
			});
		});
	});*/
	
	/* Works Top Bar */
	jQuery(window).bind('scroll', function () {
		if(jQuery(window).width()<767 && jQuery("#project-page").is(":visible")){	
			var scrollTop = jQuery(window).scrollTop();
			
			if (scrollTop > jQuery('#project-details').offset().top-125) {
				jQuery('#project-top-bar').addClass('fixed').stop().animate({top:0},500);
			} else if(scrollTop < jQuery('#project-details').offset().top-125){
				jQuery('#project-top-bar').stop().animate({top:'-60px'},500,function(){
					jQuery('#project-top-bar').removeClass('fixed');
				});
			}
		
		}
	});
	
	/* Filter for Works */
	jQuery('#work-container').mixitup({
		targetDisplayGrid: 'block' // required to fix bug in Chrome with images height
	});

	/* If we're on medium or large device animate next and previous project name while hovering arrow's */
	if(jQuery(window).width()>767){	
		jQuery('#next-project').mouseenter(function() {
			jQuery("#next-project-name").stop().animate({"right":"4em","opacity":"1"}, 500);
		}).mouseleave(function() {
			jQuery("#next-project-name").animate({"right":"8em","opacity":"0"}, 500);
		});
		jQuery('#previous-project').mouseenter(function() {
			jQuery("#previous-project-name").stop().animate({"left":"4em","opacity":"1"}, 500);
		}).mouseleave(function() {
			jQuery("#previous-project-name").animate({"left":"8em","opacity":"0"}, 500);
		});
	}
	
	/* Creates the filter menu for mobile version */
	$('#work-filter ul').each(function(){
		var select=$(document.createElement('select')).insertBefore($(this).parent()).addClass('visible-xs');;
		$('>li', this).each(function(){
			option=$(document.createElement('option')).appendTo(select).val(this.href).html($(this).html()).addClass($(this).attr('data-filter'));
		});
	});
	
	/* Filtering for Select */
	$('select').on('change',function(){
		jQuery('#work-container').mixitup('filter',jQuery(this).find('option:selected').attr('class'));
	});

});
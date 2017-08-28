
$(document).ready(function() 
{
	//move user to the projects section
	/*****************************************************************
	Button to scroll to the education section
	*****************************************************************/
	var menu_displayed   = false; //mobile menu visible 
	var window_height	 = $(window).height();
	var window_width     = $(window).width();
	var container_height = (window_height * (1.5));

	$(function(){
	    $(".education_button").click(function() {
	    	var size             = 0;
	    	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
			{ 
				size = container_height * 1.2;
				$("#menu_wrapper").toggleClass("hidden");
				menu_displayed = false;
			}
			else
				//enhance scrolling for small screen
				if (window_width > 651) 
				{
					size = container_height * 1.15;
				}
				else
					if (window_width > 590)
					{ 
						size = container_height * 1.2;
						$("#menu_wrapper").toggleClass("hidden");
						menu_displayed = false;
					}	
					else 
						if (window_width > 425)
						{
							size = container_height * 1.15;
							$("#menu_wrapper").toggleClass("hidden");
							menu_displayed = false;
						}
						else
						{
							size = container_height;
							$("#menu_wrapper").toggleClass("hidden");
							menu_displayed = false;
						}
			
		    $('html, body').animate({
		        scrollTop: size
		    }, 500);
		    return false;
		});
	});

	/*****************************************************************
	Button to scroll to the experience section
	*****************************************************************/
	$(function(){
	    $(".experience_button").click(function() {
	    	var size             = 0;
	    	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
			{ 
				size = container_height * 2.2;
				$("#menu_wrapper").toggleClass("hidden");
				menu_displayed = false;

			}

			else 
				//enhance scrolling for large screen
				if (window_width > 651) 
				{
					size = container_height * 2.2;
				}
				else 
					if (window_width > 590)
					{ 
						size = container_height * 2.2;
						$("#menu_wrapper").toggleClass("hidden");
						menu_displayed = false;
					}	
					//enhance scrolling for medium sized screen
					else if (window_width > 425) 
						{
							size = container_height * 2.15;
							$("#menu_wrapper").toggleClass("hidden");
							menu_displayed = false;
						}
						else //enhance scrolling for small  screen
						{
							size = container_height * 2;
							$("#menu_wrapper").toggleClass("hidden");
							menu_displayed = false;
						}

		    $('html, body').animate({
		        scrollTop: size
		    }, 500);
		    return false;
		});
	});

	/*****************************************************************
	Button to scroll to the activities section
	*****************************************************************/
	$(function(){
	    $(".activities_button").click(function() {
	    	var size             = 0;
	    	
	    	//hides the menu on mobile when the top button is clicked
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
			{ 
				size = container_height * 6.2;
				$("#menu_wrapper").toggleClass("hidden");
				menu_displayed = false;
			}	
			else 
				//enhance scrolling for large screen
				if (window_width > 651) 
				{
					size = container_height * 6.2;
				}
				else
					if (window_width > 590)
					{ 
						size = container_height * 6.2;
						$("#menu_wrapper").toggleClass("hidden");
						menu_displayed = false;
					}	
					//enhance scrolling for medium sized screen
					else if (window_width > 500) 
						{
							size = container_height * 6.15;
							$("#menu_wrapper").toggleClass("hidden");
							menu_displayed = false;
						}
						else //enhance scrolling for small  screen
						{
							size = container_height * 6.1;
							$("#menu_wrapper").toggleClass("hidden");
							menu_displayed = false;
						}
				
		    $('html, body').animate({
		        scrollTop: size
		    }, 500);
		    return false;
		});
	});

	/*****************************************************************
	Button to scroll to the top
	*****************************************************************/
	$(function(){
	    $(".header_top_button").click(function() {
		    if($(window).scrollTop() > 0) 
		    {
		    	//makes the menu slide off screen when the top button is clicked
		    	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
				{	
		    		$("#menu_wrapper").toggleClass("hidden");
		    		menu_displayed = false;
		    	}
	   			$('html, body').animate({
			        scrollTop: 0
			    }, 500);
			    return false;
			}
		});
	});


	var vh_height = $(window).height() * (1.5);
	//hide or show the 'top' button when the user is at the top of the page
	$(window).scroll( function(){

		var scrollY = $(window).scrollTop();

		/*****************************************************************
		hid the top button when at the top of the page
		*****************************************************************/
		if(scrollY > 0) 
			$(".header_top_button").fadeIn(250);
		else
			$(".header_top_button").fadeOut(250);

		if(menu_displayed)
		{
			$("#menu_wrapper").toggleClass("hidden");
			menu_displayed = false;
		}

		
		/*****************************************************************
		Display the backgrounds correctly so they have a fixed position on mobile devices as well as computers
		This changes the backgrounds from relative to fixed so we can have a fixed background while you scroll through the site
		*****************************************************************/

  //       if(scrollY < (vh_height)) {
  //           $('#container_photo_2').css({'position': 'relative', 'margin-top': (vh_height) +'px'});
  //       }
  //       if(scrollY >= (vh_height)){
		// 	$('#container_photo_2').css({'position': 'fixed', 'margin-top': 0});
		// }
  //       if(scrollY < (3 * vh_height)) { 
		// 	$('#container_photo_3').css({'position': 'relative','margin-top': (3 * vh_height) +'px'});
			
  //       }    
		// if(scrollY >= (3 * vh_height)){
		// 	$('#container_photo_3').css({'position': 'fixed', 'margin-top': 0});
		// }
		// if(scrollY < (5 * vh_height)) { 
		// 	$('#container_photo_4').css({'position': 'relative','margin-top': (5 * vh_height) +'px'});
			
  //       }    
		// if(scrollY >= (5 * vh_height)){
		// 	$('#container_photo_4').css({'position': 'fixed', 'margin-top': 0});
		// }
	});//end scroll listener


	/*****************************************************************
	Button to show and hide the menu button: toggling classes
	*****************************************************************/
	var body_clicked = false;
	$(document).on("click", "#right_side_menu", function()
	{
		console.log("menu click Display?: " + menu_displayed);
		

		if (!menu_displayed && !body_clicked)
		{
  			$("#menu_wrapper").toggleClass("hidden");
  			menu_displayed = true;
		}
  		body_clicked = false;		
	});

	$("body").click(function(e) {
		console.log("body click Display?: " + menu_displayed);
		if (menu_displayed)
		{
  			$("#menu_wrapper").toggleClass("hidden");
  			menu_displayed = false;
  			body_clicked = true;
  		}
  		setTimeout(function(){
		    body_clicked = false;
		}, 250);
  	});


	
	/*****************************************************************
	THIS IS USED TO SET THE BACKGROUND HEIGHT ONCE WHEN THE PAGE LOAD.  
	IF THIS IS NOT DONE THEN THE WEBISTE WILL FEEL GLITCHY ON MOBILE DEVICES
	set the containers to the height of the window.  If this is done using vh, on mobile it will be messed up
	/his has to be done only once
	*****************************************************************/

	$(function(){
		var window_height                                  = $(window).height();
		var height_for_contacts                            = window_height * (.9);
		var height_for_background_photos                   = window_height * (1.2);
		var height_for_container_with_and_without_photo    = window_height * (1.5);

		$(".container_nobackground_height").css("height", height_for_container_with_and_without_photo + "px");
		$(".container_height").css("height", height_for_container_with_and_without_photo + "px");	
		$(".container_picture_height").css("height", height_for_background_photos + "px");
		$(".contact_wrapper").css("top", height_for_contacts + "px");	
			
	});

});




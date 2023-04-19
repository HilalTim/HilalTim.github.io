'use strict';
// var mainDocument = $(document);

// init foundation
// $(document).foundation();

// Init all plugin when document is ready 
$(document).on('ready', function () {
'use strict';


	// 3. Show/hide menu when icon is clicked
	var menuItems = $('.all-menu-wrapper .nav-link');
	var menuIcon = $('.menu-icon, #navMenuIcon');
	var menuBlock = $('.all-menu-wrapper');
	var reactToMenu = $ ('.page-main, .navbar-sidebar, .page-cover')
	var menuLinks = $(".navbar-mainmenu a, .navbar-sidebar a");
	// Menu icon clicked
	menuIcon.on('click', function () {
		menuIcon.toggleClass('menu-visible');
		menuBlock.toggleClass('menu-visible');
		menuItems.toggleClass('menu-visible');
		reactToMenu.toggleClass('menu-visible');
		return false;
	});

	// Hide menu after a menu item clicked
	menuLinks.on('click', function () {
		menuIcon.removeClass('menu-visible');
		menuBlock.removeClass('menu-visible');
		menuItems.removeClass('menu-visible');
		reactToMenu.removeClass('menu-visible');
		return true;
	});




	
	
	

	// 10. cursor position
	var shadowBall = $(".cursor-ball");
	$(".body-page").mousemove(function(e) {
		shadowBall.css("transform", "translateX(" + e.pageX + "px)");
		// shadowBall.css("transform", "translate(" + e.pageX + "px," + e.pageY +"px)");
		// shadowBall.posx.value = e.pageX;
		// shadowBall.posy.value = e.pageY;
	});
	
	
	
	var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;
    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 200);
        form.find('input:not([type="submit"]), textarea').val('');
    }
    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-danger');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 200);
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
	
	var formkontrol = $('#formkontrol');
	var ikaz = $('#alert_message');
	formkontrol.on('submit', function(e) {
		e.preventDefault();
		$.ajax({
			type: 'POST',
			dataType: 'html',
			data:  $("#formkontrol").serialize(),
			
			success: function(data) {
				var res = data.substr(0, 1);
				if(res==2) {
					data = data.substr(2);
					ikaz.removeClass("alert-danger");
					ikaz.addClass("alert-success").html(data).fadeIn();
					formkontrol.trigger('reset');
				} else if(res==1) {
					data = data.substr(2);
					ikaz.removeClass("alert-success");
					ikaz.addClass("alert-danger").html(data).fadeIn();
				}
				
			},
			error: function(e) {
				console.log(e)
			}
		});
	});
	
	$("#ekle").click(function() {
	  alert( "Handler for .click() called." );
	});


});




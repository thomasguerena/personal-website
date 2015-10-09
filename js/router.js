(function () {
	'use strict';

	var routeHandler = function () {
		var hash = window.location.hash;
		var route = hash.slice(1, hash.length).replace(/\//g, '_');

		// default route
		if (!window.templates[route]) route = 'about';

		var navButton = $('nav a[href="#' + route + '"]');
		navButton.addClass('active');
		$('nav a').not(navButton).removeClass('active');

		if (templates[route]) {
			$('.content-box').html(window.templates[route]())
				.append(window.templates['download_resume']);
			// Allow binding after render.
			if (views[route]) views[route]();
		}
	};

	routeHandler(); // Render initial template.
	$(window).on('hashchange', routeHandler);
	$('body').addClass('loaded'); // Fade in content.
})();
(function () {
	'use strict';

	// Provide super simple view intialization for binding UI events after
	// rendering a template.
	window.views = {};

	/* Supposedly rot13, or Rotate 13 (variation of Caesar Cipher), works
	 * fairly well against spam bots combing for emails addresses. Since
	 * obfuscating with ATs and DOTs doesn't actually work, I'm giving
	 * this a try...
	 * My actual email address [ guerena.t@gmail.com ].
	 * My email address rot13'd [ threran.g@tznvy.pbz ].
	*/
	var addr = 'guerena.t@gmail.com';
	views.contact = function () {
		var link = $('#rot13-addr');
		link.on('click, mouseover', function () {
			$(this).attr('href', 'mailto:' + addr);
			$(this).html(addr);
		});
	}
})();
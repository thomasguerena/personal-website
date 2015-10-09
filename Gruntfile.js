module.exports = function (grunt) {

	grunt.initConfig({

		// Compile SASS
		sass: {
			dist: {
				files: { 'css/main.css': 'css/sass/main.scss' }
			}
		},

		// Compile Underscore templates
		jst: {
			compile: {
				files: {
					'templates/templates.js': ['templates/*.html']
				},
				options: {
					prettify: true,
					namespace: 'templates',
					processName: function (f) {
						return f.slice(f.lastIndexOf('/') + 1, f.lastIndexOf('.'));
					}
				}
			}
		},

		// Run tasks on change
		watch: {
			options: { spawn: false },
			// Recompile templates
			templates: {
				files: ['templates/*.html'],
				tasks: ['jst'],
			},
			// Rediscover comment markers
			js: {
				files: ['js/*.js'],
				tasks: ['todo'],
			},
			// Recompile sass
			sass: {
				files: ['css/sass/*.scss'],
				tasks: ['sass']
			}
		},

		// Find comment markers
		todo: {
			options: {
				file: 'report.md',
				githubBoxes: true,
				colophon: true,
				usePackage: true
			},
			src: ['js/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-todo');

	grunt.registerTask('default', ['jst', 'todo']);

	grunt.event.on('watch', function (action, filepath, target) {
		grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});
};
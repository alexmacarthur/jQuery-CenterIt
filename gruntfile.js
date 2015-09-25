module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// concat and minify our JavaScript
		uglify: {
			dist: {
				files: {
					'js/jquery.centerit.min.js': [
						'js/jquery.centerit.js'
					]
				}
			}
		},

		// watch for changes
		watch: {
			grunt: {
				files: ['gruntfile.js'],
			},
			js: {
				files: [
					'js/jquery.centerit.js'
				],
				tasks: [
					'uglify'
				],
				options: {
					port: 8000,
					livereload: true
				}
			},
		}
	});

	// Load NPM's via matchdep
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', [
		'uglify',
	]);
};

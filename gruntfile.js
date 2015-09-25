module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// concat and minify our JavaScript
		uglify: {
			dist: {
				files: {
					'jquery.centerit.min.js': [
						'jquery.centerit.js'
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
					'jquery.centerit.js'
				],
				tasks: [
					'uglify'
				]
			},
		}
	});

	// Load NPM's via matchdep
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', [
		'uglify',
	]);
};

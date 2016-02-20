module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ["www"],
		concat: {
			js: {
				src: 'src/js/**/*.js',
				dest: 'www/js/main.js'
			},
			css: {
				src: 'src/css/*.css',
				dest: 'www/css/main.css'
			}
		},
		uglify: {
			'www/js/main.min.js': ['www/js/main.js']
		},
		copy: {
			img: {
				expand: true,
				src: 'src/img/*',
				dest: 'www/img/',
				flatten: true
			},
			html: {
				cwd: 'src/js/',
				src: '**/*.html',
				dest: 'www/templates/',
				expand: true
			},
			index: {
				expand: true,
				src: ['src/*.html'],
				dest: 'www/',
				filter: 'isFile',
				flatten: true
			}
		},
		cssmin: {
			'www/css/main.min.css': 'www/css/main.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['clean', 'copy', 'concat', 'uglify', 'cssmin']);

};

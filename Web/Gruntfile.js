module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			js: {
				src: 'src/js/**/*.js',
				dest: '../../Web/js/main.js'
			},
			css: {
				src: 'src/css/*.css',
				dest: '../../Web/css/main.css'
			}
		},
		uglify: {
			'../../Web/js/main.min.js': ['../../Web/js/main.js']
		},
		copy: {
			img: {
				expand: true,
				src: 'src/img/*',
				dest: '../../Web/img',
				flatten: true
			},
			html: {
				cwd: 'src/js/',
				src: '**/*.html',
				dest: '../../Web/templates/',
				expand: true
			},
			index: {
				expand: true,
				src: ['src/*.html'],
				dest: '../../Web/',
				filter: 'isFile',
				flatten: true
			}
		},
		cssmin: {
			'../../Web/css/main.min.css': '../../Web/css/main.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['copy', 'concat', 'uglify', 'cssmin']);

};

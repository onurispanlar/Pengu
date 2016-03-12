module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			js: {
				src: 'src/js/**/*.js',
				dest: 'target/js/main.js'
			},
			css: {
				src: 'src/css/*.css',
				dest: 'target/css/main.css'
			}
		},
		web_server: {
		    options: {
		      cors: true,
		      port: 8000,
		      nevercache: true,
		      logRequests: true
		    },
		    foo: 'bar' // For some reason an extra key with a non-object value is necessary
  	},
		uglify: {
			'target/js/main.min.js': ['target/js/main.js']
		},
		copy: {
			img: {
				expand: true,
				src: 'src/img/*',
				dest: 'target/img',
				flatten: true
			},
			html: {
				cwd: 'src/js/',
				src: '**/*.html',
				dest: 'target/templates/',
				expand: true
			},
			index: {
				expand: true,
				src: ['src/*.html'],
				dest: 'target/',
				filter: 'isFile',
				flatten: true
			}
		},
		cssmin: {
			'target/css/main.min.css': 'target/css/main.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-web-server');

	grunt.registerTask('default', ['copy', 'concat', 'uglify', 'cssmin', 'web_server']);

};

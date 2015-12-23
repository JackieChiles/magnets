module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        bower_concat: {
            lib: {
                dest: 'dist/lib.js',
                cssDest: 'dist/lib.css'
            }
        },
        concat: {
            js: {
                src: 'public/**/*.js',
                dest: 'dist/app.js'
            },
            css: {
                src: 'public/**/*.css',
                dest: 'dist/app.css'
            }
        },
        copy: {
            views: {
                files: [
                    {
                        expand: true,
                        cwd: 'public/views/',
                        src: ['*.*', '**/*.*'],
                        dest: 'dist'
                    }
                ]
            },
            fonts: {
                expand: true,
                cwd: 'bower_components/Materialize',
                src: ['font/**/*.{woff2,woff,ttf}'],
                dest: 'dist'
            }
        },
	clean: ['dist'],
        watch: {
            js: {
                files: 'public/**/*.js',
                tasks: 'concat:js'
            },
            css: {
                files: 'public/**/*.css',
                tasks: 'concat:css'
            },
            html: {
                files: 'public/views/*.{ejs,html}',
                tasks: 'copy:views'
            }
        }
    });

    grunt.registerTask('build', function(target) {
        grunt.task.run([
	    'clean',
            'concat',
            'bower_concat',
            'copy'
        ]);
    });

    grunt.registerTask('run', function(target) {
        grunt.task.run([
            'build',
            'watch'
        ]);
    });
};

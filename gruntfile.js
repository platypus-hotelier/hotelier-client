'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        copy: {
            html: {
                files: [
                    { expand: true, cwd: 'src/', src: 'index.html', dest: 'build/' }
                ]
            }
        },

        sass: {
          options: {
            sourceMap: true
          },
          dist: {
            files: {
              'build/styles.css' : 'src/sass/main.scss'
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('build', [ 'copy', 'sass' ]);
};

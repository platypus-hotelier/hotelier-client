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

        karma: {
          all: {
            options: {
              frameworks: [ 'mocha', 'chai' ],
              browsers: [ 'Chrome' ],
              files: [
                'node_modlues/angular/angular.js',
                'src/js/hotel.module.js',
                'src/js/**/*.js'
              ],
              singleRun: true
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', [ 'karma', 'copy' ]);
};

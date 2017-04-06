'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    clean: ['build/'],

    copy: {
      html: {
        files: [
          {
            cwd: 'src/',
            src: 'index.html',
            dest: 'build/',
            expand: true,

          },
          {
            cwd: 'src/',
            src: 'views/**/*.template.html',
            dest: 'build/',
            expand: true
          }
        ]
      },
      images: {
        files: [
          {
            cwd:'src/img',
            src:['*.jpg'],
            dest:'build/img/',
            expand: true
          }
        ]
      },
      angular: {
        files: [
          {
            cwd: 'node_modules/angular',
            src: ['angular.js'],
            dest: 'build/',
            expand: true
          }
        ]
      }
    },
    sass: {
      allSass: {
        files:{
          'build/style.css' : 'src/sass/main.scss'
        }
      }
    },
    babel: {
      all: {
        options: {
          sourceMap: true,
          presets: ['es2015']
        },
        files: {
          'build/js/app.js' : 'build/js/app.js'
        }
      }
    },
    concat: {
      dist: {
        src: ['src/js/hotel.module.js', 'src/js/**/*.js'],
        dest: 'build/js/app.js'
      }
    },
    watch: {
      css: {
        files:['style.css'],
        tasks: ['default']
      }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', [ 'clean', 'concat', 'babel', 'copy', 'sass']);
};

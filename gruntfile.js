'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    clean: ['build/'],

    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: 'index.html',
            dest: 'build/'
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
        files:['src/sass/*.scss'],
        tasks: ['sass']
      },
      html: {
        files:['src/index.html'],
        tasks: ['copy']
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

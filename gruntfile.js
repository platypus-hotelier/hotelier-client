'use strict';

module.exports = function(grunt) {

  grunt.initConfig({


    copy: {
      html: {
        files: [
          { expand: true, cwd: 'src/', src: 'index.html', dest: 'build/' }
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

  grunt.registerTask('default', [ 'copy', 'sass']);
};

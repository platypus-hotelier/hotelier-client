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
            cwd:'src/images',
            src:['*.jpg'],
            dest:'build/images/',
            expand: true
          }
        ]
      }
    },
    sass: {
      allSASS: {
        files: {
          'build/style.css':'src/sass/main.scss'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', [ 'copy', 'sass']);
};

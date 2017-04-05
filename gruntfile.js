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


    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', [ 'karma', 'copy' ]);
};

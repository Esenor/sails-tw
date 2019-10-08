
const sass = require('node-sass');

module.exports = function (grunt) {

  grunt.config.set('sass', {
    dev: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      files: [{
        expand: true,
        cwd: 'assets/styles/',
        src: ['styles.scss'],
        dest: '.tmp/public/styles/',
        ext: '.css'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-sass');
};

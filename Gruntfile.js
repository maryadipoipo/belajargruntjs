module.exports = function(grunt) {
    const sass = require('node-sass');
    // require('load-grunt-tasks')(grunt);
    // Configuration
    grunt.initConfig({
        // pass in options to plugins
        // refenrece to files etc
        sass: {
            options: {
                implementation: sass
            },
            dist: {
                files: [{
                    'css/main.css': 'sass/*.scss'
                }]
            }
        }
    });

    
    // Load plugins
    grunt.loadNpmTasks('grunt-sass');

    
    // Register tasks
    grunt.registerTask('convert-sass', 'sass');
    grunt.registerTask('run', function() {
        console.log('running task from grunt');
    });

    grunt.registerTask('testajjah', function() {
        console.log('running test task from grunt');
    });

    grunt.registerTask('allTasks', ['run', 'testajjah'])
}
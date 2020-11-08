module.exports = (grunt) => {
    grunt.initConfig({
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: ['node_modules/bootstrap/dist/css/*.min.css'],
                        dest: 'public/css/',
                        filter: 'isFile',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['node_modules/bootstrap/dist/js/*.min.js', 'node_modules/jquery/dist/*.min.js'],
                        dest: 'public/js/',
                        filter: 'isFile',
                        flatten: true
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
}
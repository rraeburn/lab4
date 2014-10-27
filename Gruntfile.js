module.exports = function(grunt) {

  var srcFiles = [ "exercises/*.js", "tests/*.js" ];
  grunt.initConfig({
    jshint: {
      files: srcFiles
    },
    jscs: {
      src: srcFiles,
      options: {
        preset: "jquery"
      }
    },
    mochaTest: {
      src: [ "tests/*.js" ]
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-jscs");
  grunt.loadNpmTasks("grunt-mocha-test");

  grunt.registerTask("test", "mochaTest");
  grunt.registerTask("default", [ "jshint", "jscs", "test" ]);

};

module.exports = function(config) {
    config.set({

      basePath:'../',

      frameworks: ['jasmine'],

      files: [
          'bower_components/angular/angular.js',
          'bower_components/angular-route/angular-route.js',
          'bower_components/angular-resource/angular-resource.js',
          'bower_components/angular-mocks/angular-mocks.js',
          'js/**/*.js',
          'test/**/*.spec.js'
      ],

      exclude: [],

      preprocessors: {},

      reporters: ['progress'],
      // progress wil show the number of tests executed, skipped and total.

      port: 9876,

      colors: true,

      logLevel: config.LOG_INFO,

      autoWatch: true,

      browsers: ['PhantomJS'],

      singleRun: false

    });
};

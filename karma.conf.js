// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['progress', 'coverage'],
    files: ['client/tests.webpack.js'],
    preprocessors: {
      'client/tests.webpack.js': ['webpack', 'sourcemap']
    },
    browsers: ['PhantomJS'],
    singleRun: true,
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    },
    webpack: require('./webpack.config'),
    webpackMiddleware: {
      noInfo: 'errors-only'
    }
  });
};

var webpackConfig = require('./webpack.test');

module.exports = function(config) {
    config.set({
        basePath: '',
        files: [
            {
                pattern: './karma-test-shim.js',
                watched: false
            }
        ],
        preprocessors: {
            './karma-test-shim.js': [
                'webpack', 'sourcemap'
            ]
        },
        frameworks: [ 'jasmine' ],
        plugins: [
            require('karma-jasmine'),
            require('karma-phantomjs-launcher'),
            require('karma-webpack'),
            require('karma-sourcemap-loader')
        ],
        client:{
            clearContext: false,
            args: [ '--coverage', config.coverage ]
        },
        webpack: webpackConfig,
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [ 'PhantomJS' ],
        singleRun: config.coverage
    });
};
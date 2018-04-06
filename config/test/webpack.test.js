var webpack = require('webpack');
var helpers = require('../helpers');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: [ '.ts', '.js' ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader?configFileName=config/tsconfig.json', 'angular2-template-loader' ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [ 'to-string-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('src'),
            {}
        )
    ]
};
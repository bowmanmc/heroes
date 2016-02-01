'use strict';

var webpack = require('webpack');
var NODE_MODULES = __dirname + '/node_modules';

module.exports = {
    context: __dirname + '/src/modules',
    entry: './app.js',
    output: {
        path: __dirname + '/src/scripts',
        filename: 'site.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                stage: 0
            }
        }]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     minimize: false
        // })
    ],
    resolve: {
        alias: {
        }
    }
};

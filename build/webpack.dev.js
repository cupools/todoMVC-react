'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:3000',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    output: {
        path: path.join(process.cwd(), 'build/asserts/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'react-hot!babel?presets[]=es2015&presets[]=react',
            exclude: /node_modules/
        }, {
            test: /\.(css)$/,
            loader: 'style!css'
        }, {
            test: /\.(styl)$/,
            loader: 'style!css!stylus',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'eval'
};

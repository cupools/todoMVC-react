'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: path.join(process.cwd(), 'dist/'),
        filename: 'bundle.js',
        publicPath: '/todoMVC-react/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'react-hot!babel?presets[]=es2015&presets[]=react&plugins[]=antd',
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: '#source-map'
};

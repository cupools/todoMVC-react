'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.js');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
        noInfo: true,
        quiet: true,
        chunks: false
    }
}).listen(3000, '127.0.0.1', function(err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at http://127.0.0.1:3000');
});

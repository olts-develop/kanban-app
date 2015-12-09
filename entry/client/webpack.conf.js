/**
 * Created by Martin on 23.11.2015.
 */
var webpack = require('webpack');

var babelSettings = { stage: 0 };
//var plugins = [];

babelSettings.plugins = ['react-transform'];
babelSettings.extra = {
    'react-transform': {
        transforms: [{
            transform: 'react-transform-hmr',
            imports: ['react'],
            locals: ['module']
        }, {
            transform: 'react-transform-catch-errors',
            imports: ['react', 'redbox-react']
        }]
        // redbox-react is breaking the line numbers :-(
        // you might want to disable it
    }
};


module.exports={
    entry:'./entry',
    output: {path:'./build', //Build path
        filename:"bundle.js"},
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel', query: babelSettings, exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8182' },
            { test: /\.(svg|ttf|woff|eot)(\?.*)?$/, loader: 'file' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.less$/, loader: 'style!css!less' }
        ]
    }
};
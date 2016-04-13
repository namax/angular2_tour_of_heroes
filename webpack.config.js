/**
 * Created by namax on 4/12/16.
 */

var path = require("path");
var webpack = require("webpack");
module.exports = {
    entry: "./app/main",
    output: {
        path: "dist",
        publicPath: "dist/",
        filename: "bundle.js"
    },
    stats: {
        colors: true,
        reasons: true
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            {test: /\.ts/, loaders: ['ts-loader'], exclude: ['/node_modules/' ]},
            {test: /\.css/, loader: "style-loader!css-loader"}
        ]
    }
};

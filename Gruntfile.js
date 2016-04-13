/**
 * Created by namax on 4/12/16.
 */
module.exports = function (grunt) {

    "use strict";

    var webpack = require("webpack");
    var webpackConfig = require("./webpack.config.js");

    grunt.loadTasks("tasks");
    grunt.initConfig({
        webpack: {
            options: webpackConfig,
            build: {
                plugins: [
                  //  new webpack.optimize.DedupePlugin()
                   // new webpack.optimize.UglifyJsPlugin()
                ]
            },
            "build-dev": {
                devtool: "sourcemap",
                debug: true
            }

        },
        "webpack-dev-server": {
            options: {
                webpack: webpackConfig,
                publicPath: '/dist/'
            },
            start: {
                keepAlive: true,
                webpack: {
                    devtool: "sourcemap",
                    debug: true
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-webpack");

    grunt.registerTask("dev", ["webpack-dev-server:start"]);
    // Production build
    grunt.registerTask("build", ["webpack:build"]);

};


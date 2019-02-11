const path = require('path');
const webpack = require('webpack');
const loadersConf = require('./webpack.loaders');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

module.exports = {
    entry: {
        app: './src/index.js',
        test: './src/test.js'
    },
    module: {
        rules: loadersConf
    },
    devServer: {
        contentBase: "./dist",
        noInfo: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: PORT,
        host: HOST
      },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].entry.js",
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
          path.join(__dirname, "src"),
          path.join(__dirname, "node_modules"),
        ],
        alias: {
            "styles": path.resolve(__dirname, 'styles/'),
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['app']
        }),
        new HtmlWebPackPlugin({
            filename: 'test.html',
            template: 'src/test.html',
            chunks: ['test']
        }),
    ]
};

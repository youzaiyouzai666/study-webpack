/**
 * Created by CAOYI on 2018/1/8.
 */
const path               = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    entry  : './src/index.js',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Caching'
        })
    ],
    output : {
        filename: '[name].[chunkhash].js',
        path    : path.resolve(__dirname, 'dist'),
        publicPath: "https://cdn.example.com/assets/"
    }
};
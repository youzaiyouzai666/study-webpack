const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            alias:{
                                './Assets': path.resolve(__dirname, 'assets/')
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader:'file-loader'
                    }
                ]
            }
        ]
    },
    resolve:{
        alias: {
            Assets: path.resolve(__dirname, 'assets/')
        }
    },
    plugins: [
        // new CleanWebpackPlugin(['dist'])
    ],
};
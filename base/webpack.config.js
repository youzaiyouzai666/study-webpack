const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // mode: 'production',
    devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist'
    // },
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [  //数组对象，可以是字符串|对象（一般对象是有配置信息的）
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            root: '.' //参数
                        }
                    }
                ]
            }
        ]
    }


};
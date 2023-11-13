const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, './public/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'bundle')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(handlebars|hbs)$/,
                use: 'handlebars-loader',
            },
            {
                test: /\.(css|sass)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: path.resolve(__dirname, 'bundle/index.html'),
            cache: false,
        }),
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        port: 80,
        historyApiFallback: true,
    },
};
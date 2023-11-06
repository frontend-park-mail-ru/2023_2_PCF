const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './public/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
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
                test: /\.precompiled.js$/,
                include: /public/,
                loader: 'handlebars-loader',
            },
            {
                test: /\.(sass|scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    }
};
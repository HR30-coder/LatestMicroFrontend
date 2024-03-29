// const HtmlWebpackPlugin = require("html-webpack-plugin");

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: '[name].[contenthash].js'
    },
    resolve: {
      extensions: ['.js','.vue']  
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
                use: [
                    {loader : 'file-loader'}
          ]      
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.scss|\.css$/,
                use: ['css-loader','style-loader','vue-style-loader','sass-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
        // new HtmlWebpackPlugin({
        //     template: "./public/index.html"
        // }),
    ]
}
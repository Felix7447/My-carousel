const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/** @type {import('webpack').Configuration} */

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[name].[contenthash].[ext]',
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@templates': path.resolve(__dirname, 'src/Templates'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({// To add html plugin config
            inject: true,
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "assets/[name].[contenthash].css"
        }),
        new Dotenv(),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new TerserPlugin(),
        ]
    }
}
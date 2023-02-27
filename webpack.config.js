const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),
        new FaviconsWebpackPlugin({
            logo: './public/assets/favicon.png',
            inject: false,
        }),
    ],
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".d.ts"],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        preferRelative: true,
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: { limit: false },
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules|\.d\.ts$/,
            },
            {
                test: /\.(woff|woff2|ttf|eot|png|jpg|svg|gif)$/i,
                use: ['file-loader']
            }
        ],
    },
};
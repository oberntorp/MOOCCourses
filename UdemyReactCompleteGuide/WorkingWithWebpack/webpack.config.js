const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        chunkFilename: '[id].js',
        publicPath: ""
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: "cheap-module-exal-source-map",
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: "[name]__[local]__[hash:base]"
                        } 
                    },
                    { 
                        loader: "postcss-loader", options: {
                        ident: "postcss",
                        plugins: () => [autoprefixer({
                            browsers: [
                                "> 1%",
                                "last 2 versions"
                             ]
                        })]
                        } 
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: "url-loader?limit=8000&name=images/[name].[ext]"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            filename: "index.html",
            inject: "body"
        })
    ]
};
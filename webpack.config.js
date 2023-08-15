// webpack.config.js

const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfiguration = env => require(`./build-utils/webpack.${env}`);


module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return merge(
    {
            mode,
            entry: "./src/index.js",            
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "bundle.js"
            },            
            module: {
                rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.(jpg|jpeg|png|ico)$/,
                    use: {
                     loader: 'url-loader'
                    }
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                     {
                       loader: 'file-loader',
                       options: {
                         limit: 10_000,
                         mimetype: 'application/octet-stream',
                       },
                     },
                    ],
                  },
                {
                    test: /\.(gif|svg |ico  )$/i,
                    loader: 'file-loader',
                    options: {
                      name: '/assets/images/[name].[ext]'
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                    ],
                },
                ]
            },
            devServer: {
                historyApiFallback: true,
                open: true,
                hot: true
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html",
                    // filename: './index.html',
                    favicon: './public/favicon.ico'
                }),
                new webpack.DefinePlugin({
                   'process.env.API_GATEWAY_URL': JSON.stringify(process.env.API_GATEWAY_URL),
                    
                }),
                new webpack.HotModuleReplacementPlugin()

            ]
        },
        modeConfiguration(mode)

);
};

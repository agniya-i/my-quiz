const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                    // {
                    //     loader: 'css-loader',
                    //     options: {

                    //         // modules: true,
                    //         // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    //         modules: {
                    //             localIdentName: '[local]__[hash:base64:5]'
                    //         }

                    //     }
                    // }
                ],
            },


            {
                test: /\.less$/i,
                // use: [
                //     // compiles Less to CSS
                //     "style-loader",
                //     "css-loader",
                //     "less-loader",
                // ],
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                    // {
                    //     loader: "css-loader",
                    // options: {
                    //     modules: {
                    //         localIdentName: '[local]__[hash:base64:5]'
                    //     }
                    // }
                    // }
                ]

            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
        publicPath: '/'

    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './public/index.html'),
        }),
    ],
    stats: 'errors-only',
}
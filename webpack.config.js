const path = require('path');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './frontend/zenterest.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'source-map',
    // plugins: [
    //     new BrowserSyncPlugin({
    //             host: 'localhost',
    //             port: 3000,
    //             files: ['./app/assets/stylesheets/components/*.scss']
    //         })
    // ],
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};
const path = require('path')
/**
 * @type {import('webpack').Configuration}
*/
module.exports = {
    mode: 'development',
    entry: {
        main: ["@babel/polyfill", path.resolve(__dirname,'../src/main.js')]
    },
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[hash:8].js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: '/\.jsx?$/',
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    }
}
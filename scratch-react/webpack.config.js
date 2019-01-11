const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry : './app/UserDetails1.js',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module:{
        rules:[
            //babel - babel loader
            {test: /\.(js)$/, use:'babel-loader'},
            //style - css loader
            {test:/\.(css)$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode: 'development',
    plugins : [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
}
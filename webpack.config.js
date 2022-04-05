const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //  mode: 'production',
    entry:'./src/app/index.js',
    output:{
        path: path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    devServer:{
        port:4000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
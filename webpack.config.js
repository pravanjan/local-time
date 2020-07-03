const path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        path:  path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
            { 
              test: /\.css$/,
              loader: ['style-loader','css-loader']
            }
          ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public')
    }

};
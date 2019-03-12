const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
    mode:'development',
    output:{
       filename:'app.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
        new VueLoaderPlugin()
    ]
}
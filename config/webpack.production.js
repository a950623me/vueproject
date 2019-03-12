const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
    mode:'production',
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'app.js'
    },
    devtool:'source-map',
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
        new VueLoaderPlugin()
    ]
}
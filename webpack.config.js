const path = require('path');

module.exports = function(env,argv){
    env = env||{};
    return{
        entry:{
           app:'./src/main.js'
        },
        module:{
           rules:[
               {
                   test:/\.css$/i,
                   use:['vue-style-loader','css-loader']
               },
               {
                   test:/\.vue$/i,
                   use:'vue-loader'
               },
               {
                   test:/\.(png|jpe?g|gif|svg)/i,
                   use:[
                        {
                            loader:'url-loader',
                            options:{
                                limit:10000
                            }
                        }
                   ]
               },
               {
                   test:/\.js$/i,
                   exclude:/(node_modules|bowser_components)/,
                   use:{
                       loader:'babel-loader',
                       options:{
                           presets:['@babel/preset-env']
                       }
                   }
               }
           ]
        },
        resolve:{
            extensions: ['.js', '.vue', '.json'],
            alias:{
                'vue':'vue/dist/vue.esm',
                '@':path.resolve(__dirname,'./src')
            }
        },
        ...env.development?require('./config/webpack.development'):require('./config/webpack.production')
    }
   
}
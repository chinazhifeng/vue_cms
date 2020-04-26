const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const htmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:path.join(__dirname,'./src/main.js'),//入口
    output:{
        path:path.join(__dirname,'./dist'),
        filename: 'bundle.js'  //这是指定输出的文件的名称
    },
    devServer:{
        open: true,     //自动打开浏览器
        port: 3000,     //设置启动时候运行的窗口
        contentBase:'src',
        hot:true        //启用热更新的第一步
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({         //创建一个在内存中生成HTML页面的插件
            //指定HTML模板页面，将来会根据指定的页面路径，去生成内存中的页面
            template:path.join(__dirname,'./src/index.html'),   
            filename:'index.html'       //指定生成的页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module:{         //这个节点，用于配置所有第三方模块加载器
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.vue$/,use:'vue-loader'},
            {
                test:/.(png|gif|jpg|svg|ttf)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    resolve:{
        alias:{
            /* "vue$":"vue/dist/vue.js" */
        }
    }
}
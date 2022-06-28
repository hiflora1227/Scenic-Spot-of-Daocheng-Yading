const path = require('path')
//导入：给插件是 能够在内存中生成html页面及其外部引入的插件
const htmlWebpackPlugin = require('html-webpack-plugin')
// const { clear } = require('console')
// 导入：eslint插件
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    // 入口：webpack要打包的文件
    entry: path.join(__dirname, './src/main.js'),
    // 出口：指定打包到哪去 打包好后输出文件的路径
    output: {
        path: path.resolve(__dirname, 'dist'),//指定目录
        filename: 'static/js/bundle.js',//指定输出的文件名
        clean:true  //自动清空上次的打包文件dist
    },
    //配置插件
    plugins: [
        // new 一个在内存中生成html的插件
        new htmlWebpackPlugin({
            // 指定模板页面
            template: path.join(__dirname, './public/index.html'),
            // 指定在内存中生成的页面
            filename: 'index.html'
        }),
        // 实例化插件 用于检测src下的js文件
        new ESLintPlugin({
            context:path.resolve(__dirname,'src')
        })
    ],
    performance:{
        hints:false
    },
    module: {//此节点 用于配置所有第三方模块加载器
        rules: [
            // 配置 .css文件的第三方loader规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 配置 .scss文件的第三方loader规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/i,
                type: "asset",
                parser: {
                    // 通过base64加密打包图片文件，转换为字符串
                    dataUrlCondition: {
                        maxSize: 30 * 1024 // 30kb
                    }
                },
                generator: {
                    // 图片文件的输出目录路径和文件名
                    filename: 'static/images/[hash:10][ext][query]'
                }
            },
            {//针对字体文件的匹配规则
                test: /\.(ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'static/media/[hash:10][ext][query]'
                }
            },
            { //babel匹配规则
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                //   options: {
                //     presets: ['@babel/preset-env']
                //   }
                }
              },
              {test: /\.vue$/,use: 'vue-loader' }//处理vue文件的规则
            // {
            //     test: /\.(htm|html)$/,
            //     loader: 'html-withimg-loader'
            // }
        ]
    },
    resolve:{//做解释用
        // alias:{//起别名
        //     "vue$":"vue/dist/vue.js"
        // }
    },
    devServer: {
        port: 3000,
        open: true
    },
    mode: 'production'
}
module.exports = {
    // 继承eslint规则
    "extends": ["eslint:recommended"],
    "env": {
        "node":true,//启动node的全局变量
        "browser": true//启用浏览器的全局变量
    },
    "parserOptions": { 
        "ecmaVersion": 6 ,//支持es6
        "sourceType": "module"//es6模式
     },
    "rules": {
        'no-var':2//不能使用var定义变量   0：不起用  1：黄色警告  2：红色错误
    }
}
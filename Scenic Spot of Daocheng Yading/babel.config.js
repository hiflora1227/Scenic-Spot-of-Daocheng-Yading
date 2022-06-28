module.exports = {
    // 智能预设，编译ES6语法
    presets: [
        // '@babel/preset-env',
        ["@babel/preset-env",{"modules":false}]
    ],
    plugins: [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    // "plugins":[["component",[
    //     {
    //         "libraryName":"mint-ui",
    //         "style":true
    //     }
    // ]]]
}
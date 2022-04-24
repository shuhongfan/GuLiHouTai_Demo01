const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    // 针对antd实现按需打包，根据import来打包
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
        lessOptions:{
            javascriptEnabled:true ,
            ModifyVars:{  '@primary-color':'#1DA57A'  }
        }
    })

)

/*配置跨域请求，配置基础请求*/
module.exports = {
    baseUrl:'./',  //根路径 vue cli3.0 打包并在本地查看的话是./
  /*  outputDir:"dist",//构建输出目录
    assetsDir:'assets',//静态资源目录（js，css,img,fonts）
    lintOnSave:false, //是否开启eslint保存检测，有效值：true || false || 'error'
    devServer:{
        open:false,//启动之后是否自动打开浏览器
        host:'localhost',
        port:8080,
        https:false,
        hotOnly:false,/!*热更新*!/
        proxy:{
            //配置跨域
            '/api':{
                target:"http://172.16.18.25:12321/",
                ws:true,//是否跨域
                changeOrigin:true,
                logLevel:'debug',
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }*/
}
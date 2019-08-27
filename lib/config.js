let gConfig = {}


if (undefined == window.env) {
  window.env = "local"
}


let magic = localStorage.getItem("env")
if (undefined != magic && magic.length > 3) {
  window.env = magic
}


switch (window.env) {

  case "local" :
    gConfig = {
      ip: "zhangfei.fullstack.club",
      port: 19090,
    }
    break

  case "shuihu" :

    gConfig = {
      ip: "apicloud",
      port: 80
    }

    break

  case "test" :

    gConfig = {
      ip: "p000001.cloud.shuihu.fullstack.club/apicloud",
      port: 80
    }

    break

  case "debug" :
    gConfig = {
      ip: "localhost",
      port: 9090
    }
    break

  case "france" :
    gConfig = {
      ip: "www.sydtech.com.cn",
      port: 90
    }
    break
}


gConfig.platforms = ["sunedu", "shuihu", "local"]
gConfig.curPlatform = window.env
export default gConfig

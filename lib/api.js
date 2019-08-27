/*import axios from 'axios'*/
import ac from './apicloud'
import gConfig from './config'

/*axios.defaults.withCredentials = true*/
// const ip = "zhangfei.fullstack.club"
// const port = 19090

const ip = gConfig.ip
let port = gConfig.port

if ( "80" == port ){
  port = ""
}else {
  port = ":" + port
}



var imgServer = {
  up : "http://" + ip +  port + "/file/upload",
  down : "http://" + ip +  port + "/file/download?file="
}


var proto = (function () {
  try{
    return document.location.protocol;
  }catch (e){
    return "http:"
  }
})()

/*var $http = axios.create({
  baseURL: proto + "//" + ip  + port + "",
})*/


/*ac.api.setHttp( $http )*/

let api = Object.assign({}, ac.api)
api.ac = ac
api.cfg = {
  app : 12,
  imgServer : imgServer
}
/*api.http = $http*/


let config = new api.ac.Kv(api.cfg.app, "iZk6ADVD")
let footPrint = new api.ac.List(api.cfg.app, "D7dt33Cn")
let develop = new api.ac.Kv(api.cfg.app, "WGgRVYjO")
let infoSafe = new api.ac.List(api.cfg.app, "IlZSk0HZ")
let financialTerminal = new api.ac.List(api.cfg.app, "GEVNJ4xu")
let safeInfo = new api.ac.List(api.cfg.app, "6eaMESe5")
let safeTerminal = new api.ac.List(api.cfg.app, "dIEUlkbm")
let mobileMarketing = new api.ac.List(api.cfg.app, "WQUr7lgj")
let activity = new api.ac.List(api.cfg.app, "nhlxDqtc")
let news = new api.ac.List(api.cfg.app, "u0CnPQ8h")
let bannerImg = new api.ac.List(api.cfg.app, "LN8Pet7e")
let paySys = new api.ac.List(api.cfg.app, "DxdXUe7H")
let infoSafeSys = new api.ac.List(api.cfg.app, "ppuELpkb")
let doc = new api.ac.List(api.cfg.app, "9FfAT1eG")
let recruit = new api.ac.List(api.cfg.app, "uNU0MHy9")
let hr = new api.ac.List(api.cfg.app, "iXu30jVF")


let machine = new api.ac.machine(api.cfg.app, "iXu30ggg")

api.obj = {
  config,
  footPrint,
  develop,
  infoSafe,
  financialTerminal,
  safeInfo,
  safeTerminal,
  mobileMarketing,
  activity,
  news,
  bannerImg,
  paySys,
  infoSafeSys,
  doc,
  recruit,
  hr, machine
}


/*api.upload = async function ( file ) {

  let formData = new FormData();
  formData.append('file', file);

  let client = axios.create()

  let config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return await client.post( imgServer.up , formData, config)
}*/


export default api





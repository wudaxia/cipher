import axios from 'axios'
import qs from 'qs'
let api = {}


/* axios.create({
    baseURL: proto + "//" + ip  + port + "",
})*/
const $axios = axios.create({
    baseURL: 'http://172.16.18.25:12321/',
    timeout: 5000,
   /* headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    }*/
});
// 初始化默认post header
/*axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'*/

let $http = {
    async get (vue,url, data) {
        let res=''
        try {
             res = await $axios.get(url, {params: data})
            return new Promise((resolve) => {
                resolve(res.data)
            })
        } catch (err) {
            vue.$Message.error('服务器出错')
            reject(res)
            console.log(err)
        }
    },
    async post (vue,url, data) {
        let res=''
        try {
             res = await $axios.post(url, qs.stringify(data))
            return new Promise((resolve, reject) => {
                resolve(res.data)
               /* console.log(res)
                if (res.data.msg === 0) {

                } else if(res.data.msg > 0) {

                } else {
                    reject(res)
                }*/
            })
        } catch (err) {
            vue.$Message.error('服务器出错')
            reject(res)
            console.log(err)
        }
    },
}

api.machine={}
api.developer={}

api.developer.checkHeartBeat = async function (vue,params) {
    return await $http.post(vue,"/HeartBeat", params )
}
api.developer.CheckCOMPort = async function (vue,params) {
    return await $http.post(vue,"/CheckCOMPort", params )
}

api.machine.GetMachineNO = async function (vue,params) {
    return await $http.post(vue,"/GetMachineNO", params )
}

api.machine.returnErrorMsg = async function (vue,params) {
    return await $http.post(vue,"/ErrOut", params )
}


api.machine.initMachine = async function (vue,params) {
    return await $http.post(vue,"/MachineInit", params )
}


class machineApp {
    constructor (com){
        this.com = com
    }
    async returnErrorMsg(vue,retmsg){//公有方法是返回错误信息
        let ret1 = await api.machine.returnErrorMsg(vue,{ErrCode:retmsg} )
        if(ret1.msg==0){
            vue.$Notice.error({
                desc: ret1.data,
            });
            return undefined
        }
    }
    async readMachineId(vue){//读机具号 限制验证name是formValidate
      /*  console.log(process.env.VUE_APP_URL )
        console.log(process.env.NODE_ENV)*/
        let ret = await api.machine.GetMachineNO(vue,{} )
        if(ret.msg>0){
            this.returnErrorMsg(vue,ret.msg)
        }else  if(ret.msg==0){
            vue.formValidate.machineId=ret.data
        }else{
           throw '传参错误'
        }
    }
     bar(vue,validateName,barType,params){//根据操作类型操作，要求是会返回信息的弹出框的最后一步
        let ret =""
           vue.$refs[validateName].validate( async (valid) => {
            if (valid) {
                switch(barType){
                    case 'init' :
                        ret =  await api.machine.initMachine(vue,params)
                    case 'start' :

                    case 'unlock':

                    case 'stop' :

                    case 'invalidate' :

                }
                console.log(ret)
                if(ret.msg>0){
                    this.returnErrorMsg(vue,ret.msg)
                }else  if(ret.msg==0){
                    vue.$Notice.success({
                        desc: ret.data,
                    });
                }else{
                    throw '传参错误'
                }

            } else {

            }
        })

    }
}


let machine = new machineApp(3)

api.obj = {
    machine,
}





export default api





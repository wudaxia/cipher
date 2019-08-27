var api = {}
var $http = {
    post(){
        console.error("setHttp first")
    },
    get(){
        console.error("setHttp first")
    }
}


api.setHttp = function (http){
    $http = http
}

api.app = {}

api.developer = {}

api.user = {}

api.func = {}

api.func.kv = {}

api.func.list = {}

api.func.tree = {}



api.developer.login = async function ( info ) {
    return await $http.post("/developer/login", info )
}

api.developer.regin = async function ( info ) {
    return await $http.post("/developer/regin", info )
}

api.developer.check = async function ( info ) {
    return await $http.post("/developer/check", info )
}


api.app.list = async function () {
    return await $http.post("/app/list", {

    })
}

api.app.add = async function ( params ) {
    return await $http.post("/app/add", params )
}

api.app.delete = async function ( params ) {
    return await $http.post("/app/delete", params )
}

api.func.list = async function (params) {
    return await $http.post("/func/list", params )
}



api.func.add = async function (params) {
    return await $http.post("/func/add", params )
}


api.func.delete = async function (params) {
    return await $http.post("/func/delete", params )
}


api.func.delete = async function (params) {
    return await $http.post("/func/delete", params )
}


api.func.kv.delete = async function (params) {
    return await $http.post("/func/kv/delete", params )
}

api.func.kv.get = async function (params) {
    return await $http.post("/func/kv/get", params )
}


api.func.kv.list = async function (params) {
    return await $http.post("/func/kv/list", params )
}


api.func.kv.set = async function (params) {
    return await $http.post("/func/kv/set", params )
}

api.func.kv.delete = async function (params) {
    return await $http.post("/func/kv/delete", params )
}

api.func.kv.get = async function (params) {
    return await $http.post("/func/kv/get", params )
}


api.func.kv.list = async function (params) {
    return await $http.post("/func/kv/list", params )
}


api.func.kv.set = async function (params) {
    return await $http.post("/func/kv/set", params )
}






api.func.list.delete = async function (params) {
    return await $http.post("/func/ll/delete", params )
}

api.func.list.page = async function (params) {
    return await $http.post("/func/ll/page", params )
}


api.func.list.update = async function (params) {
    return await $http.post("/func/ll/update", params )
}


api.func.list.add = async function (params) {
    return await $http.post("/func/ll/add", params )
}



api.func.tree.delete = async function (params) {
    return await $http.post("/func/tree/delete", params )
}

api.func.tree.list = async function (params) {
    return await $http.post("/func/tree/list", params )
}


api.func.tree.update = async function (params) {
    return await $http.post("/func/tree/update", params )
}


api.func.tree.add = async function (params) {
    return await $http.post("/func/tree/add", params )
}

api.user.check = async function (params) {
    return await $http.post("/user/check", params )
}


api.user.close = async function (params) {
    return await $http.post("/user/close", params )
}

api.user.open = async function (params) {
    return await $http.post("/user/open", params )
}


api.user.login = async function (params) {
    return await $http.post("/user/login", params )
}


api.user.regin = async function (params) {
    return await $http.post("/user/regin", params )
}

api.user.resetpwd = async function (params) {
    return await $http.post("/user/resetpwd", params )
}


api.user.page = async function (params) {
    return await $http.post("/user/page", params )
}



class Kv {

    constructor (app, target, config){
        this.app = app
        this.target = target
        this.config = config || {}
        this.cache = {}
    }

    async get(key){
        let params = {
            app : this.app,
            target : this.target,
            key : key
        }

        if ( this.config.user ){
            params.user = this.config.user
        }

        let ret = await api.func.kv.get( params )
        if( "ok" != ret.data.status ){
            throw ret
        }

        if( 0 == ret.data.data.length ){
            return undefined
        }

        if( 1 == ret.data.data.length ){
            return ret.data.data[0].value
        }

        if( this.config.useGlobal ){
            for ( let d of ret.data.data ){
                if( ! d.user ){
                    return d.value
                }
            }
        }

        for ( let d of ret.data.data ){
            if( d.user ){
                return d.value
            }
        }

        return ret.data.data[ret.data.data.length -1].value
    }

    async set(key , value){
        let params = {
            app : this.app,
            target : this.target,
            key : key,
            value : value
        }

        if ( this.config.user ){
            params.user = this.config.user
        }

        let ret = await api.func.kv.set( params )
        if( "ok" != ret.data.status ){
            throw ret
        }

        this.cache[key] = value
    }

    async list(){
        let params = {
            app : this.app,
            target : this.target
        }

        if ( this.config.user ){
            params.user = this.config.user
        }

        let ret = await api.func.kv.list( params )
        if( "ok" != ret.data.status ){
            throw ret
        }

        if( 0 == ret.data.data.length ){
            return []
        }

        if( 1 == ret.data.data.length ){
            return ret.data.data.length[0].value
        }

        if( this.config.useGlobal ){
            for ( let d of ret.data.data ){
                if( ! d.user ){
                    return d.value
                }
            }
        }

        for ( let d of ret.data.data ){
            if( d.user ){
                return d.value
            }
        }

        return ret.data.data[ret.data.data.length -1].value
    }

    async delete(key , value){
        let params = {
            app : this.app,
            target : this.target
        }

        if ( !(this.config.useGlobal) && this.config.user ){
            params.user = this.config.user
        }

        let ret = await api.func.kv.delete( params )
        if( "ok" != ret.data.status ){
            throw ret
        }

    }
}


class List {

    constructor (app, target, config){
        this.app = app
        this.target = target
        this.config = config
        this.cache = {}
    }


    async one(id){
        let params = {
            id : id
        }
        params.app = this.app
        params.target = this.target
        params.data = JSON.stringify( params.data )
        let ret = await $http.post("/func/ll/one", params )
        if ( "ok" == ret.data.status ){

            return JSON.parse( ret.data.data.data )

        } else {
            return undefined
        }
    }

    async add(params){
        params.app = this.app
        params.target = this.target
        params.data = JSON.stringify( params.data )
        return await $http.post("/func/ll/add", params )
    }

    async delete(id){
        let params = {}
        params.id = id
        return await $http.post("/func/ll/delete", params )
    }

    async update(id, data){
        let params = {}
        params.id = id
        params.data = JSON.stringify(data)
        return await $http.post("/func/ll/update", params )
    }

    async page(params){

        if ( undefined == params ){
            params = {}
        }

        params.app = this.app
        params.target = this.target


        let ret = await $http.post("/func/ll/page", params )
        let list = ret.data.data.list
        this.cache = ret.data.data
        this.cache.list = []

        for ( let u of list){
            let o = JSON.parse( u.data )
            o._id = u.id
            this.cache.list.push(o)
        }
        return this.cache
    }
}


class Tree {

    constructor (app, target, config){
        this.app = app
        this.target = target
        this.config = config
        this._index = {}
        this.tree = []
    }


    getIndex(){
        return this._index
    }

    getTree(){
        return this.tree
    }

    /**
     * obj 不能包含 id pid
     * @param pid
     * @param obj
     * @returns {Promise.<id>}
     */
    async add(pid, obj){
        // delete obj.id
        // delete obj.pid

        console.log("ddddd")

        try {


            let params = {
                app : this.app,
                target : this.target,
                data : JSON.stringify(obj),
            }
            if( pid ){
                params.pid = pid
            }
            let ret = await api.func.tree.add(params)

            if( "ok" != ret.data.status ){
                throw ret
            }

            return ret.data.data
        }catch (e){
            console.log(e)
        }
    }

    async list(){
        let ret = await api.func.tree.list({
            app : this.app,
            target : this.target
        })

        if( "ok" != ret.data.status ){
            throw ret
        }

        let l = this.tree = []
        let index = this._index = {}

        for( let d of ret.data.data ){
            // 整理 d
            let data = {}
            try{
                data = JSON.parse(d.data)
            }catch ( e ){ }

            data.id = d.id
            data.pid = d.pid

            index[ d.id ] = data
        }

        for ( let id in index ){
            let d = index[ id ]
            let p = index[ d.pid ]
            if( p ){
                if( ! p.children ){
                    p.children = []
                }
                p.push( d )
            }
        }
        return l

    }
}


class machine {

    constructor (app, target, config){
        this.app = app
        this.target = target
        this.config = config || {}
        this.cache = {}
        console.log(this.app)
    }
    readMachineId(machinedId){
          console.log(11111111)
    }
    async bar(vue,validateName,params){
        vue.$refs[validateName].validate((valid) => {
                     if (valid) {
                         vue.$Notice.success({
                             desc: '密码器作废成功',
                         });
                     } else {
                         /*   this.returnCode="失败"*/
                     }
                 })
      console.log(vue)
      console.log(validateName,params)
    }

    async get(key){
        let params = {
            app : this.app,
            target : this.target,
            key : key
        }

        if ( this.config.user ){
            params.user = this.config.user
        }

        let ret = await api.func.kv.get( params )
        if( "ok" != ret.data.status ){
            throw ret
        }

        if( 0 == ret.data.data.length ){
            return undefined
        }

        if( 1 == ret.data.data.length ){
            return ret.data.data[0].value
        }

        if( this.config.useGlobal ){
            for ( let d of ret.data.data ){
                if( ! d.user ){
                    return d.value
                }
            }
        }

        for ( let d of ret.data.data ){
            if( d.user ){
                return d.value
            }
        }

        return ret.data.data[ret.data.data.length -1].value
    }

    async set(key , value){
        let params = {
            app : this.app,
            target : this.target,
            key : key,
            value : value
        }

        if ( this.config.user ){
            params.user = this.config.user
        }

        let ret = await api.func.kv.set( params )
        if( "ok" != ret.data.status ){
            throw ret
        }

        this.cache[key] = value
    }

    async list(){
        let params = {
            app : this.app,
            target : this.target
        }

        if ( this.config.user ){
            params.user = this.config.user
        }

        let ret = await api.func.kv.list( params )
        if( "ok" != ret.data.status ){
            throw ret
        }

        if( 0 == ret.data.data.length ){
            return []
        }

        if( 1 == ret.data.data.length ){
            return ret.data.data.length[0].value
        }

        if( this.config.useGlobal ){
            for ( let d of ret.data.data ){
                if( ! d.user ){
                    return d.value
                }
            }
        }

        for ( let d of ret.data.data ){
            if( d.user ){
                return d.value
            }
        }

        return ret.data.data[ret.data.data.length -1].value
    }

    async delete(key , value){
        let params = {
            app : this.app,
            target : this.target
        }

        if ( !(this.config.useGlobal) && this.config.user ){
            params.user = this.config.user
        }

        let ret = await api.func.kv.delete( params )
        if( "ok" != ret.data.status ){
            throw ret
        }

    }
}

export default {api, Kv, List, Tree,machine }










<template>
    <div>
       <p class="texC st-Title">首次使用系统设置</p>
        <div class="st-contentBody ">
            <p><span class="st-colorRed">请您先完成第一步</span>（若已完成点击下一步）：</p>
            <Steps :current="current" direction="vertical" status="wait" >
                <Step title="下载控件"   :content="content1"  ref="content1"></Step>
                <Step title="启用服务器"  :content="content2"  ref="content2"></Step>
                <Step title="获取串口号"  :content="content3"  ref="content3"></Step>
                <Step title="测试是否能正确读取机具号"  :content="content4" ref="content4"></Step>
                <Step title="完成"></Step>
            </Steps>
           <Button type="primary" @click="next" v-if="current==4?false:true" style="margin-right: 20px">下一步</Button>
            <router-link to="/"><Button type="success" v-if="current==4?true:false" style="margin-right: 20px">进入欢迎页</Button></router-link>
            <Button  v-if="current==0?false:true" @click="prev" >上一步</Button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Setting",
        data(){
            return{
                current: 0,
                content1:"密码器的一系列操作都需先安装一个应用程序",
                content2:"点击",
                content3:"请您先连接密码器并保持通讯状态再点击下一步。",
                content4:"请您先连接密码器并保持通讯状态再点击下一步。",
            }
        },
       /* directives:{
            changeContent1:{
                bind: function (el,bindings) {
                    let a = document.createElement("span")
                    a.innerHTML=`，请您点击<a class="st-downLoad">这里</a>下载`;
                    let html = el.getElementsByClassName("ivu-steps-content")[0]
                    html.appendChild(a)
                }
            },
        },*/
        methods: {
            async next (){
                if (this.current == 0) {
                    this.current += 1;
                }else if(this.current == 1){
                   let res =  await this.$api.developer.checkHeartBeat(this,{})
                        if(res.msg==0){
                        this.current += 1;
                    }else{
                        this.$Message.warning({
                            content:"请您先开启服务器！",
                            duration: 5
                        })
                    }
                }else if(this.current == 2) {
                    let res = await this.$api.developer.CheckCOMPort(this, {})
                    console.log(res)
                    if (res.msg == 0) {
                        this.$Message.warning({
                            content:"没有可使用的端口！尝试重新连接",
                            duration: 5
                        })
                    } else {
                        document.getElementById("readCom").value ='COM' + res.msg
                        this.current += 1;
                    }
                }else if(this.current == 3) {

                    let ret =  await this.$api.machine.GetMachineNO(this,{})
                    console.log(ret)
                    if(ret.msg>0){
                        let ret1 = await this.$api.machine.returnErrorMsg(this,{ErrCode:ret.msg} )
                        console.log(ret1)
                        if(ret1.msg==0){
                            this.$Message.warning({
                                content:ret1.data,
                                duration: 5
                            })
                        }
                    }else  if(ret.msg==0){
                        document.getElementById("readMachineNo").value =ret.data
                        this.current += 1;
                    }else{
                        throw '传参错误'
                    }
                }else  if (this.current == 4) {
                    this.current = 4;
                }
            },
            prev () {
                this.current -= 1;
            }
        },
        mounted(){
            let a = document.createElement("span")
            a.innerHTML=`，请您点击<a class="st-downLoad" href="../../files/SETUP.EXE" download="SETUP.exe">这里</a>下载。`;

            let b = document.createElement("span")
            b.innerHTML=`<a class="st-downLoad" href="Sunyard://">open</a>开启服务器。`;

            let c = document.createElement("div")
            c.innerHTML= `<span>串口号：</span><input  type="text" id="readCom" placeholder="获取串口号" class="ivu-input ivu-input-default divInline" disabled="">`;

            let d = document.createElement("div")
            d.innerHTML=`<span>机具号：</span><input  type="text" id="readMachineNo"  placeholder="读取机具号" class="ivu-input ivu-input-default" disabled="">`;

            this.$refs.content1.$el.getElementsByClassName("ivu-steps-content")[0].appendChild(a)
            this.$refs.content2.$el.getElementsByClassName("ivu-steps-content")[0].appendChild(b)
            this.$refs.content3.$el.getElementsByClassName("ivu-steps-content")[0].appendChild(c)
            this.$refs.content4.$el.getElementsByClassName("ivu-steps-content")[0].appendChild(d)
        }
    }
</script>

<style lang="stylus">
    .divInline
        display inline-block
    .st-Title
        font-size 26px;
        color #333
        margin 30px auto 20px auto
    .st-contentBody
        width 50%
        margin 0px auto
        padding 20px 8% 20px 8%
        min-width 373px
        .ivu-steps .ivu-steps-head
            background none
        .ivu-steps .ivu-steps-title
            background none
        .st-downLoad
            color #27AAFD!important
            text-decoration underline
        .ivu-input
            width 60%;
            margin-top 15px
        .ivu-steps .ivu-steps-content
            font-size 13px
        .ivu-steps .ivu-steps-title
            font-size 15px
        .st-colorRed
            color red
            display inline-block
            margin-bottom 15px
       /* .st-Btn
            width 50%*/

</style>
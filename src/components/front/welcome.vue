<template>
    <div>
        <p :class="isAnimate==0?'wl-Title bounceIn animated animateT':'wl-Title'" id="aa">欢迎使用支付密码器系统</p>

        <Card class="wl-gailanDiv">
            <div class=""><a><Button type="primary" class="fr">下载操作说明文档</Button></a></div>
            <p class="wl-listT">部分功能概览</p>
            <div class="wl-gailanList">
                <li @click="changeCipherTab">
                    <div class="wl-gailanPad clearfix">
                        <p class="fl texC">密码器</p>
                        <div class="fr wl-tabLiDiv">
                            <div class="wl-tabLi tabBlue"><span>5</span>个</div>
                        </div>
                    </div>
                </li>

                <li @click="changeAccountTab">
                    <div class="wl-gailanPad clearfix">
                        <p class="fl texC">密码器账号</p>
                        <div class="fr wl-tabLiDiv">
                            <div class="wl-tabLi tabGreen"><span>7</span>个</div>
                        </div>
                    </div>
                </li>

                <li @click="changeCheckTab">
                    <div class="wl-gailanPad clearfix">
                        <p class="fl texC">支付密码核验</p>
                        <div class="fr wl-tabLiDiv">
                            <div class="wl-tabLi tabYellow"><span>1</span>个</div>
                        </div>
                    </div>
                </li>

            </div>
        </Card>

        <Card class="wl-listDiv">
            <p class="wl-listT">{{tabTitle}}</p>
            <div class="clearfix">
                <li  v-for="(item,key) in tabList">
                    <div class="wl-detailDiv clearfix">
                        <div class="wl-imgDiv">
                            <img :src="item.showImg">
                        </div>

                        <div class="wl-listRight fl">
                            <p>{{item.name}}</p>
                            <p class="wl-yulanP">点击<a class="wl-previewDoc" @click="modal1 = true">预览操作说明</a></p>
                        </div>
                    </div>
                </li>
            </div>
        </Card>

        <Modal title="添加人员" id="welcomeModal" v-model="modal1" class-name="vertical-center-modal" width="500" :closable="false"  >
            <div slot="header" class="wl-previewT">
                <p>效果图：</p>
                <img src="../../assets/image/preview.jpg">
            </div>

            <div class="wl-preContent">
                <p class="im-infoT">功能:</p>
                <div class="im-content">
                    本交易适用于支付密码器正式使用前进行注册发行。本行支付密码器在注册发行成功后，方可继续做其他操作，例如增删账号等功能性操作。
                </div>

                <p class="im-infoT">操作步骤:</p>
                <div class="im-content">
                    <p>1、连接密码器并保持通讯状态。</p>
                    <p>2、点击初始化按钮。</p>
                </div>

                <p class="im-infoT">操作说明:</p>
                <div class="im-content">
                    <p>1、此交易连接支付密码器后，需点击读机具号来读取机具号码。</p>
                    <p>2、此交易仅限于新的支付密码器或者账号已经全部删除的支付密码器。</p>
                    <p>3、交易成功后，系统将产生“解锁密码”，将其写入支付密码器中并在支付密码系统后台记录，同时系统弹出“密码器初始化成功”信息框。</p>
                    <p>4、如果因支付密码器未与系统连接或密码器未进入通讯状态导致交易失败，则提示“串口通讯失败请连接线及参数设置”，以提示柜员本交易需连接支付密码器，并进入通讯状态。</p>
                </div>

            </div>
            <div slot="footer"  class="wl-previewFooter texC">
                <Button type="primary" size="large" long  @click="closeModal">确定</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
    export default {
        name: "welcome" ,
        data(){
            return{
                isAnimate:"0",
                tabList:this.getCipherList,
                tabTitle:"密码器具体功能列表",
                modal1:false,
            }
        },
        methods:{
            changeCipherTab(){
                this.tabList = this.getCipherList
                this.tabTitle = "密码器具体功能列表"
            },
            changeAccountTab(){
                this.tabList = this.getCipherAccountList
                this.tabTitle = "密码器账号具体功能列表"
            },
            changeCheckTab(){
                this.tabList = this.getCheckList
                this.tabTitle = "支付密码核验功能"
            },
            closeModal(){
                this.modal1=false
            }
        },
        destroyed(){
            this.isAnimate="1"
        }
    }

</script>

<style lang="stylus">
    #welcomeModal
        .ivu-modal-body
            max-height 250px
            overflow-y scroll
    .wl-preContent
        .im-infoT
            font-size 16px
            color: #6b6767;
            font-weight: 600;
        .im-content
            margin-left 30px
            text-indent: 2em;
            font-size 14px
            margin-bottom 10px
    .wl-previewT
        p
            font-size 16px
            color: #6b6767;
            margin-bottom 10px
        img
            width 100%
    .wl-Title
        text-align center
        color: #f35626;
        font-size 30px
        margin 30px auto 30px auto
    .animateT
        animation-duration 3s
        animation-delay 0.5s
        animation-iteration-count 1
    .wl-gailanDiv,.wl-listDiv
        padding 24px
        & .wl-listT
            font-size: 16px;
            color: #888383;
            margin-bottom 40px
    .wl-gailanDiv
        margin-bottom 15px
        .wl-gailanList
            .wl-gailanPad
                border: 1px solid #ece8e8;
                border-radius 5px
                &:hover
                    background-color: #f1f5f9;
            li
                width 33.3%
                padding  0px 32px
                list-style none
                display inline-block
                cursor pointer
                p
                    width 60%
                    margin-top 28px
                .wl-tabLiDiv
                    padding  5px
                    max-width 40%
                .wl-tabLi
                    width 66px
                    height 66px
                    padding-top 12px
                .tabBlue,.tabGreen,.tabYellow
                    color #fff
                    text-align center
                    border-radius 5px
                    span
                        font-size 28px
                .tabBlue,.tabGreen,.tabYellow
                    background-color #72BBF7
                .tabGreen
                    background-color #68D295
                .tabYellow
                    background-color #F4D059



    .wl-listDiv
        li
            list-style none
            padding 0px 20px
            float left
            margin-bottom 30px
            .wl-detailDiv
                background-color #f1f5f9
                border-radius 5px
                &:hover
                    box-shadow: 2px 2px 4px rgba(0,0,0,0.3)
                .wl-imgDiv
                    max-width 40%
                    padding  10px
                    float left
                    img
                        width 80px
                        height 80px
                        border-radius 3px
                .wl-listRight
                    width 60%
                    padding-left 10px
                    padding-top 26px
                    .wl-yulanP
                        color #3f3f3f
                        font-size 12px
                        margin-top 5px
                        .wl-previewDoc
                            color #27aafd!important
                            text-decoration underline
        li
            width 33.3%
            @media screen and (max-width: 1152px)
                width 50%


</style>
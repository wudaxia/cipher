<template>
    <div  class="appHheader clearfix">
        <div class="hd-TopDiv clearfix">
            <div class="hd-oneNav">
                <Tabs v-model="activeTab" @on-click="getCurrentTab" :animated="false">
                    <TabPane :label="typeList.title" v-for="(typeList,key) in firstNavList" :name="typeList.title">
                        <ul class="hd-twoNav">
                            <li :class="activeClass == index ? 'active':''" v-for="(item,index) in typeList.twoNavList" :key="index" @click="getItme(item,index)">
                                <router-link :to="item.url" class="nav-link">
                                    <img :src="activeClass == index ? item.activeImg:item.img">
                                   <!-- <img :src="item.img">-->
                                    <p>{{item.name}}</p>
                                </router-link>
                            </li>
                        </ul>
                    </TabPane>
                  <!--  <TabPane label="账号">  <ul class="hd-twoNav">
                        <li class="active">
                            <router-link to="/menu" class="nav-link">
                                <img src="../../assets/image/init.png">
                                <p>添加账号</p>
                            </router-link>
                        </li>
                    </ul></TabPane>
                    <TabPane label="日志"> 11</TabPane>
                    <TabPane label="核验"> 22</TabPane>-->
                </Tabs>
            </div>

            <div class="hd-logoDiv">
                <router-link to="/"><img src="../../assets/image/logo2.png"></router-link>
            </div>

            <div class="hd-leftTopDiv">
                <div class="hd-searchDiv divInline"  v-if="minWidth>=1250">
                    <i-col style="padding-right:10px">
                        <i-select :model="model11" :filterable="true" :label-in-value="true" ref="selectedData" :clearable="true" @on-change="change_statu"  placeholder="请选择功能" not-found-text="没有找到相关功能">
                            <i-option v-for="item in searchList" :value="item.value" :key="item.label">{{ item.label }}</i-option>
                        </i-select>
                    </i-col>
                </div>
                <div class="divInline">
                    <Tooltip content="引导设置修改" placement="bottom">
                        <router-link to="/setting"><Icon type="md-settings"  class="cursP" size="24" /></router-link>
                    </Tooltip>

                </div>
                <div class="hd-userInfo divInline">
                    欢迎，Admin
                    <Dropdown >
                        <a href="javascript:void(0)" style="margin-bottom: 10px">
                            <img src="../../assets/image/headImg.jpg"  class="cursP" >
                            <Icon type="md-arrow-dropdown" size="24"/>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem><Icon type="md-person"  size="24" />我的信息</DropdownItem>
                            <router-link to="/editPass"><DropdownItem><Icon type="md-lock" size="24" />密码修改</DropdownItem></router-link>
                           <router-link to="/login"><DropdownItem><Icon type="md-power"  size="22" style="margin-right: 5px"/>退出</DropdownItem></router-link>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>
        <div class="hd-line"></div>
    </div>
</template>
<script>
    import {mapState} from "vuex"; // 引入mapState
    export default {
        name: "Header",
        props:["activeClassTest","activeTabTest"],
        data(){
            return {
                searchList : this.getUrlList,
                model11: '',
                activeClass:this.activeClassTest, // 0为默认选择第一个，-1为不选择
                activeTab:this.activeTabTest,//默认激活第一个tab页密码器
                firstNavList: this.getNavList,
                minWidth:window.innerWidth
            }
        },
        watch: {
            activeClassTest: {
                handler(newValue, oldValue) {
                    this.activeClass  = newValue;
                },
                deep: true
            },
            activeTabTest: {
                handler(newValue, oldValue) {
                    this.activeTab  = newValue;
                },
                deep: true
            }
        },
        methods:{
            change_statu(select){
                if(select){
                    this.$router.push(select.value);
                }
            },
            getCurrentTab(name){
                if(name==this.firstNavList[4].title){
                     //通过push进行跳转
                    this.$router.push('/Verificate');
                    this.$store.commit('$_setContTwoNav', 0)
                }else  if(name==this.firstNavList[5].title){
                    //通过push进行跳转
                    this.$router.push('/user');
                    this.$store.commit('$_setContTwoNav', 0)
                }else{
                    this.$store.commit('$_setContTwoNav', -1)

                }
                this.$store.commit('$_setCurrentTab', name)
            },
            getItme(item,index) {
                this.activeClass = index;  // 把当前点击元素的index，赋值给activeClass
                this.$store.commit('$_setContTwoNav', index)
            },
            getWidth(){
                this.minWidth = window.innerWidth;
            }
        },
        created(){
            window.addEventListener('resize', this.getWidth);
            this.getWidth()
        },
        mounted(){
            /*console.log(this.getNavList2)
            console.log(this.getUrlList2)*/
        }
    }
</script>

<style  lang='stylus'>
    .appHheader
        left: 0px;
        overflow: visible;
        width: 100%;
        background: #fff;
        position: fixed;
        top: 0;
        right: 0;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);
        z-index: 11;
    .hd-logoDiv
        position absolute
        top -1px
        left 7%
        img
            width 150px;
            margin-top: 14px;
    .cursP{
        cursor pointer
    }
    .hd-leftTopDiv
        position absolute
        top -1px
        .divInline
            display inline-block
            margin-right 10px
        .ivu-icon-ios-arrow-down:before
            content: "\F2A7"!important
            font-size 125%
        .ivu-select-visible .ivu-select-arrow
            transform: rotate(0deg)
    .hd-userInfo
        img
            width 36px
            height 36px
            border-radius 50%
            position relative
            top 12px
            margin 0 5px 0px 10px
        .ivu-dropdown-rel
            padding-bottom 6px
        .ivu-dropdown-item i
            position: relative;top:-1px
    a
        color #3e3a39!important
    a:hover
        color #3e3a39!important

    .ivu-tabs-nav .ivu-tabs-tab-active
        color: #27AAFD!important
    .hd-TopDiv
        background-color #fff
        padding 0px 7%
    .hd-oneNav
        .ivu-tabs-nav .ivu-tabs-tab-active
            color: #27AAFD
        .ivu-tabs-nav .ivu-tabs-tab
            height 60px
            line-height 44px
        .ivu-tabs-ink-bar
            height: 2px;
            background-color: #27AAFD;
            position: absolute;
            left: 0;
            bottom: 2px;
        .ivu-tabs-nav .ivu-tabs-tab:active,.ivu-tabs-nav .ivu-tabs-tab:hover
            color: #27AAFD;
        .ivu-tabs-bar
            border-bottom 0px solid #dcdee2
            position relative
            left 175px
        .ivu-tabs-nav-container
            font-size 16px
        img
            width 25px
            height 25px
    .hd-twoNav
        li
            display inline-block
            text-align center
            margin-bottom 15px
            width 125px;
            height 50px;
            color #838383
        .active p
            color #27AAFD
        a
            display block
        p
            color #838383
        p:hover
            color #27AAFD
    .hd-line
        height 1px
        width 100%
        background-color #9f9f9f
        position absolute
        top 57px

    .hd-leftTopDiv
        right 7%
        @media screen and (max-width: 1080px)
            right 0%
        @media screen and (max-width: 1312px)
            right 2%
</style>
<template>
    <div>
        <p class="im-Title texC">业务人员管理</p>
        <div class="um-bigDiv clearfix">
            <div class="leftDiv">
                <div class="texC" v-if="isSearch==0&&userList.length==0" style="margin-top: 100px">
                    <img src="../../../assets/image/nopeople.png">
                    <p>目前还没有人员哦~</p>
                </div>
                <div class="texC" v-if="isSearch==1&&userList.length==0" style="margin-top: 170px;font-size: 20px">
                    <p>对不起，没有查到相关数据！</p>
                </div>
                <div v-if="userList.length!=0">
                    <li class="um-userInfo" v-for="(item,index) in userList" :key="item.id">
                        <div class="um-userDiv clearfix">
                            <div class="um-userLeft"><img :src="item.userLevel=='主管'? require('../../../assets/image/zhu4.jpg'):require('../../../assets/image/gui4.jpg')"></div>
                            <div class="um-userRight">
                                <p class="um-userName">{{item.name}}</p>
                                <Poptip word-wrap width="200"  trigger="hover" :content="item.branchName">
                                    <p class="um-jigou">{{item.branchName}}</p>
                                </Poptip>
                                <ul>
                                    <li class="um-otherDiv">
                                        <Poptip word-wrap width="200"  trigger="hover" :content="item.account" placement="bottom">
                                            <p class="um-account">{{item.account}}</p>
                                        </Poptip>

                                        <p class="um-accountP">登录账号</p>
                                    </li>
                                </ul>

                                <Tooltip content="重置密码" placement="bottom" class="um-deleteImg1">
                                    <img src="../../../assets/image/resetPass.png"   @click="resetPass(item.account)">
                                </Tooltip>

                            </div>


                            <img src="../../../assets/image/delete.png" class="um-deleteImg"  @click="deleteStaff(item.id)">
                        </div>
                    </li>

                    <Modal v-model="modal3" width="360" class-name="vertical-center-modal">
                        <p slot="header" style="color:#f60;text-align:center;font-size: 15px;height: 21px">
                            <Icon type="ios-information-circle" size="24"></Icon>
                            <span>删除确认</span>
                        </p>
                        <div style="text-align:center;font-size: 16px">
                            <p>您确定要删除该人员吗？</p>
                        </div>
                        <div slot="footer">
                            <Button type="error" size="large" long  @click="confirmdelete(userId)">删除</Button>
                        </div>
                    </Modal>
                </div>
            </div>

            <div class="um-pageDiv" v-if="userList.length!=0">
                <Page :total="total" show-total show-sizer :page-size-opts="[6,12,18]" :page-size="pageSize"  @on-change="changePage" @on-page-size-change="changePageSize"/>
            </div>

            <div class="rightDiv">
                <div class="um-searchDiv">
                    <div class="um-searchInfo">
                        <Input search placeholder="输入用户名称" style="margin-bottom: 15px"/>
                        <Select v-model="model1" placeholder="选择机构名称">
                            <Option v-for="item in jigouList" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                        </Select>
                    </div>
                    <div class="um-levelDiv" ref="userLevel">
                        <p>用户级别</p>
                        <li :class="type==1?'active':''" @click="changeType(1)">全部</li>
                        <li :class="type==2?'active':''" @click="changeType(2)">主管</li>
                        <li :class="type==3?'active':''" @click="changeType(3)">柜员</li>
                    </div>
                </div>
                <div>
                    <Button type="primary"  size="large" @click="modal2 = true">
                        <Icon type="md-add" style="margin-right: 5px;"/>添加人员
                    </Button>

                    <Modal title="添加人员" v-model="modal2" class-name="vertical-center-modal" :loading="loading"  @on-ok="handleSubmit('formValidate')" @on-visible-change="changeModalStatu">
                        <div>
                            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                                <FormItem label="登录账号" prop="account">
                                    <Input v-model="formValidate.account" placeholder="输入登录账号"></Input>
                                </FormItem>
                                <FormItem label="登录密码" prop="passwd">
                                    <Input type="password" v-model="formValidate.passwd" placeholder="输入登录密码"></Input>
                                </FormItem>
                                <FormItem label="确认密码" prop="passwdCheck">
                                    <Input type="password" v-model="formValidate.passwdCheck" placeholder="确认密码"></Input>
                                </FormItem>
                                <FormItem label="柜员名称" prop="name">
                                    <Input v-model="formValidate.name" placeholder="输入柜员名称"></Input>
                                </FormItem>
                                <FormItem label="柜员编号" prop="staffNumber">
                                    <Input v-model="formValidate.staffNumber" placeholder="输入柜员编号"></Input>
                                </FormItem>
                            </Form>
                        </div>
                    </Modal>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "userMana",
        data () {
            const validatePass = (rule, value, callback) => {
                if (this.formValidate.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.formValidate.validateField('passwdCheck');
                }
                callback();
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value !== this.formValidate.passwd) {
                    callback(new Error('两次输入的密码不一致！'));
                }else{
                    callback()
                }
            }
            return {
                userList:[
                    {id:"1",name:"张三",branchName:"浙江分行",account:"Admin",userLevel:"主管"},
                    {id:"2",name:"李四",branchName:"浙江分行",account:"Admin",userLevel:"柜员"},
                    {id:"3",name:"成龙",branchName:"浙江分行",account:"Admin",userLevel:"柜员"},
                    {id:"4",name:"易烊千玺",branchName:"浙江分行",account:"Admin",userLevel:"主管"},
                    {id:"5",name:"本草纲目",branchName:"浙江分行",account:"Admin",userLevel:"柜员"},
                   /* {id:"6",name:"胡歌",branchName:"浙江分行",account:"Admin",userLevel:"主管"},*/
                   /* {id:"7",name:"张三",branchName:"浙江分行",account:"Admin",userLevel:"主管"},
                    {id:"8",name:"李四",branchName:"浙江分行",account:"Admin",userLevel:"柜员"},
                    {id:"9",name:"成龙",branchName:"浙江分行",account:"Admin",userLevel:"柜员"},
                    {id:"10",name:"易烊千玺",branchName:"浙江分行",account:"Admin",userLevel:"主管"},
                    {id:"11",name:"本草纲目",branchName:"浙江分行",account:"Admin",userLevel:"柜员"},
                    {id:"12",name:"胡歌",branchName:"浙江分行",account:"Admin",userLevel:"主管"},*/
                    ],
                jigouList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: '',
                modal2:false,
                modal3:false,
                userId:"",
                total:6,
                page:1,
                pageSize:6,
                loading:true,
                type:1,
                isSearch:0,
                formValidate: {
                    account: '',
                    passwd: '',
                    passwdCheck: '',
                    name: '',
                    staffNumber: ''
                },
                ruleValidate: {
                    account: [
                        { required: true, message: '登录账号不能为空', trigger: 'blur' }
                    ],
                    passwd: [
                        {required: true, message: '新密码不能为空', trigger: 'blur'},
                        { min:6, max:32, message: '长度在6-32个字符以内', trigger: 'blur' },
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    passwdCheck: [
                        {required: true, message: '确认密码不能为空', trigger: 'blur'},
                        { min:6, max:32, message: '长度在6-32个字符以内', trigger: 'blur' },
                        {validator: validatePassCheck, trigger: 'blur'}
                    ],
                    name: [
                        { required: true, message: '名称不能为空', trigger: 'blur' }
                    ],
                    staffNumber: [
                        { required: true, message: '编号不能为空', trigger: 'blur' },
                        {validator: this.limitNumber, trigger: 'blur'}
                    ],
                }
            }
        },
        methods:{
            addPerson(){

            },
            changePage(page){
                this.page = page
            },
            changePageSize(pageSize){
                this.pageSize=pageSize
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.modal2 = false;
                        this.$Message.success('Success!');
                    } else {
                        this.loading = false;
                        this.$Message.error('Fail!');
                    }
                })
            },
            changeModalStatu(statu){
                if(statu == true){
                    this.$refs['formValidate'].resetFields();
                }
            },
            deleteStaff(userId){
                this.modal3 = true;
                this.userId = userId;
            },
            resetPass(loginAccount){
                this.$Message.success('重置密码成功！');
            },
            confirmdelete(userId){
                let list = this.userList
                list.splice(list.findIndex(v => v.id === userId), 1)
                this.total -=1
                console.log(list)
                this.modal3=false;
            },
            changeType(index){
                this.type=index
                this.isSearch = 1
             /*   this.userList=[]*/
                console.log(index)
                console.log(event.target.innerText)
            }
        },
        mounted(){
            console.log(this)
           /* this.$refs.userLevel*/
        }
    }
</script>

<style lang="stylus">
    .um-pageDiv
        position absolute
        bottom 25px
        right 26%
    .um-bigDiv
        position relative
        width 100%;
        margin 0px auto
        background-color #fff
        padding 25px 10px 57px 10px
        .leftDiv,.rightDiv,.um-userRight,.um-userLeft
            float left
        .leftDiv
            width 75%
            .um-userInfo
                display inline-block
                padding 0px 10px
                margin-bottom 20px
                .um-userDiv
                    border 1px solid #ece8e8
                    padding 10px 0px
                    position relative
                    .um-deleteImg
                        position absolute
                        top 10px
                        right 6px
                        width 23px
                        height 23px
                        cursor pointer
                    .um-userLeft
                        max-width 30%
                        padding 10px
                        position relative
                        top 15px
                        & img
                            width 58px
                            height 58px
                            border-radius 50%
                    .um-userRight
                        width 70%
                        padding 10px 20px 10px 20px
                        border-left 1px solid #ece8e8
                        .um-deleteImg1
                            position absolute
                            top 10px
                            right 32px
                            img
                                width 26px
                                height 26px
                                cursor pointer
                        .um-userName
                            color #27aafd
                            font-size 15px
                            padding-right 37px
                        .um-jigou
                            cursor pointer
                            font-size 13px
                            color: #313131
                            overflow: hidden;
                            height 36px
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        .um-otherDiv
                            margin-top -3px
                            list-style none
                            .um-account
                                cursor pointer
                                color #333
                                overflow: hidden;
                                white-space nowrap;
                                text-overflow ellipsis
                            .um-accountP
                                color #9e9c9c
                                margin-top: -6px;
                    &:hover
                        background-color #f5f5f5
        .rightDiv
            width 25%
            padding 0px 10px 50px 10px
            .um-searchDiv
                border 1px solid #ece8e8
                margin-bottom 30px
                .um-searchInfo
                    padding 10px
                    border-bottom 1px solid #ece8e8
                    background-color #F6F6F6
                .um-levelDiv
                    padding 20px 10px
                    p,li
                        color #313131
                        font-size 13px
                    li
                        margin-left 20px
                        margin-top 10px
                        cursor pointer
                        &.active,&:hover
                            color #27aafd
        .um-userInfo
            width 33.3%
            @media screen and (max-width: 1200px)
                width 50%
       /* .leftDiv
            min-height 450px*/
         /*   @media screen and (max-width: 1200px)
                min-height 550px*/
</style>
<template>
    <div id="Login">
        <div class="split left">
            <div class="info-holder">
                <h3>支付密码器系统</h3>
                <p>支付密码系统利用现代计算机网络技术、密码学原理和单片机技术等高科技手段，克服了传统票据鉴定方式的种种弊端，可极大提高银行业务处理能力和安全性。</p>
                <img src="../../assets/image/login_art.png" alt="">
            </div>
        </div>
        <div class="split right">
            <div class="form-content login-form">
                <div class="form-items">
                    <div class="login-logo">
                        <img src="../../assets/image/logo2.png">
                    </div>
                    <div class="login-nav">
                        <span>Login</span>
                    </div>
                    <Form ref="loginForm" :model="loginForm" :rules="ruleValidate" :label-width="60" label-position="left" >
                        <FormItem label="用户名" prop="name">
                            <Input v-model="loginForm.name" placeholder="用户名"></Input>
                        </FormItem>
                        <FormItem label="密码" prop="passwd">
                            <Input type="password" v-model="loginForm.passwd"></Input>
                        </FormItem>

                        <FormItem label="机构" prop="jigouSelect">
                            <Select v-model="loginForm.jigouSelect">
                                <Option v-for="item in loginForm.jigouList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </FormItem>

                        <FormItem class="marT45">
                            <Button type="primary" @click="handleSubmit('loginForm')">登录</Button>
                        </FormItem>
                    </Form>
                    <div class="login-copyright">
                        © 2019 杭州信雅达科技有限公司
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return {
                loginForm: {
                    name: '',
                    passwd: '',
                    jigouList: [
                        {
                            value: '上海支行',
                            label: '上海支行'
                        },
                        {
                            value: '浙江杭州分行',
                            label: '浙江杭州分行'
                        },
                        {
                            value: '北京朝阳分行',
                            label: '北京朝阳分行'
                        },
                        {
                            value: '山东烟台分行',
                            label: '山东烟台分行'
                        },
                        {
                            value: '上海静安支行',
                            label: '上海静安支行'
                        },
                    ],
                    jigouSelect:""
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '用户名不能为空', trigger: 'blur'},
                    ],
                    passwd: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                    ],
                    jigouSelect: [
                        { required: true, message: '请选择机构', trigger: 'change' },
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$store.commit('$_setStorage', {user: this.loginForm.name})
                        this.$store.commit('$_setLogin', '1')
                        if(this.$store.state.isSet=='-1'){
                            this.$router.push('/setting')
                        }else  if(this.$store.state.isSet=='1'){
                            this.$router.push({name: 'Home'})
                        }
                        this.$store.state.showHead = true;
                        this.$store.state.showContT = false;
                    } else {
                        /*   this.returnCode="失败"*/
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },
        async  mounted(){
            this.$store.state.showHead = false
            this.$store.state.showContT = false;
            this.$forceUpdate()
        },
    }
</script>

<style scoped lang="stylus">
    #Login
        .split
            height: 100%;
            position: fixed;
            z-index: 1;
            top: 0;
            overflow-x: hidden;
            padding: 20px;
            &.left
                left: 0;
                width: 550px;
                background-color: #0092FE;
                text-align: center;
                -webkit-transition: width 150ms ease-in-out;
                -moz-transition: width 150ms ease-in-out;
                -o-transition: width 150ms ease-in-out;
                -ms-transition: width 150ms ease-in-out;
                transition: width 150ms ease-in-out;
            .info-holder
                position: relative;
                top: 50%;
                -webkit-transform: translateY(-50%);
                -moz-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                h3
                    font-size: 25px;
                    font-weight: 500;
                    letter-spacing 8px
                    margin-bottom: 30px;
                    width: 100%;
                p
                    font-size: 16px;
                    font-weight: 300;
                    line-height: 26px;
                    margin-bottom: 50px;
                    width: 100%;
                & h3, & p {
                    display: inline-block;
                    color: #fff;
                    text-align: left;
                    max-width: 400px;
                }
                img
                    width: 100%;
                    max-width: 400px;


            &.right
                right: 0;
                left: 550px;
                background-color: #FFF;
                -webkit-transition: left 150ms ease-in-out;
                -moz-transition: left 150ms ease-in-out;
                -o-transition: left 150ms ease-in-out;
                -ms-transition: left 150ms ease-in-out;
                transition: left 150ms ease-in-out;
                .form-content
                    position: relative;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 60px;
                    min-height: 100%;
                    .login-nav
                        margin-bottom: 34px;
                        span
                            font-weight: 700;
                            cursor: default;
                            display: inline-block;
                            color: #000;
                            font-size: 15px;
                            transition: all .3s ease;
                            padding-bottom 10px
                            border-bottom 2px solid #27aafd
                .form-items
                    display: inline-block;
                    width: 100%;
                    max-width: 400px;
                    text-align: left;
                    transition: all .4s ease;
                .login-logo
                    position: fixed;
                    right: 50px;
                    top: 50px;
                    img
                        width: 153px;
                form
                    margin-bottom 58px


</style>
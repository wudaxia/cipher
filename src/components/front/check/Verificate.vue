<template>
    <div class="vf-bigDiv">
        <p class="im-Title texC">支付密码核验</p>
        <Card class="vf-contentBody clearfix">
            <div class="vf-LeftDiv fl">
                <p class="vf-resultP">核验结果:</p>
                <div class="texC " v-if="returnCode != '0'">
                    <div :class="returnCode == '成功' ? 'bounce animated':''">
                         <img :src="returnCode == '成功' ? require('../../../assets/image/success.png'):require('../../../assets/image/fail.png')" >
                    </div>
                    <p class="vf-msgP">{{returnMessage}}</p>
                </div>
            </div>
            <div class="vf-RightDiv fl">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="付方账号" prop="payAccount" >
                        <Input  v-model="formValidate.payAccount" placeholder="请输入付方账号" @on-focus="deleteAnimate"></Input>
                    </FormItem>
                    <FormItem label="凭证种类" prop="checkType">
                        <Select v-model="formValidate.checkType" placeholder="凭证种类" @on-change="deleteAnimate">
                            <Option value="beijing">支票</Option>
                            <Option value="shanghai">银行汇票申请书</Option>
                            <Option value="shenzhen">银行本票申请书</Option>
                            <Option value="shenzhen">汇兑凭证</Option>
                            <Option value="shenzhen">其他</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="凭证号码" prop="checkNum">
                        <Input  v-model="formValidate.checkNum" placeholder="请输入凭证号码" @on-focus="deleteAnimate"></Input>
                    </FormItem>
                    <FormItem label="开票日期">
                        <Row>
                            <Col span="11">
                                <FormItem prop="date">
                                    <DatePicker type="date" placeholder="开票日期" v-model="formValidate.date" @on-focus="deleteAnimate"></DatePicker>
                                </FormItem>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="金额" prop="money">
                        <Input  v-model="formValidate.money" placeholder="请输入金额" @on-focus="deleteAnimate"></Input>
                    </FormItem>
                    <FormItem label="支付密码" prop="payPwd">
                        <Input v-model="formValidate.payPwd" placeholder="请输入支付密码" @on-focus="deleteAnimate"></Input>
                    </FormItem>
                    <FormItem class="marT45">
                        <Button type="primary" @click="handleSubmit('formValidate')">核验</Button>
                        <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                    </FormItem>
                </Form>
            </div>
        </Card>
    </div>
</template>

<script>
    import animate from 'animate.css';

    export default {
        name: "Verificate",
        data () {
            return {
                returnMessage:"恭喜您，支付密码核验成功！",
                returnCode:"0",
                formValidate: {
                    payAccount: '',
                    checkType: '',
                    checkNum: '',
                    date: '',
                    money: '',
                    payPwd: ''
                },
                ruleValidate: {
                    payAccount: [
                        { required: true, message: '付方账号不能为空', trigger: 'blur'},
                        {validator: this.limitNumber, trigger: 'blur'},
                        /*{ type: 'number', message: '请输入数字格式', trigger: 'blur', transform(value) {
                                return Number(value);
                            }}*/
                    ],
                    checkType: [
                        { required: true, message: '请选择凭证种类', trigger: 'change' }
                    ],
                    checkNum: [
                        { required: true, message: '凭证号码不能为空', trigger: 'blur' },
                        {validator: this.limitNumber, trigger: 'blur'},
                        { min:8, max:8, message: '长度是8个字符', trigger: 'blur' },

                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    money: [
                        { required: true,  message: '金额不能为空', trigger: 'blur' },
                        {validator: this.limitNumber, trigger: 'blur'}
                    ],
                    payPwd: [
                        { required: true,  message: '支付密码不能为空', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.returnCode="成功";
                    } else {
                     /*   this.returnCode="失败"*/
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            deleteAnimate(){
                this.returnCode='0'
            }
        }
    }

  /*  function once(dom, type, callback) {
        var handle = function () {
            callback()
            dom.removeEventListener(type, handle)
        }
        dom.addEventListener(type, handle)
    }*/
</script>

<style  lang='stylus'>
    .vf-resultP
        font-size 16px
        font-weight 600
        margin-bottom 50px
    .vf-contentBody
        padding 30px 10px 10px 10px
        .ivu-card-body
            clear both
            overflow hidden
    .vf-LeftDiv
        width 40%
        padding-right 10px
        img
            width 100px
            height 100px
        .vf-msgP
            margin-top 20px
            font-size 16px
    .vf-RightDiv
        padding-left 3%
        border-left 1px solid #eee
        width 55%
        .ivu-date-picker,.ivu-col-span-11
            width 100%
        .ivu-input,.ivu-select,.ivu-date-picker
            width 100%
            max-width 345px
    .vf-bigDiv
        width 80%
        margin 0px auto
</style>
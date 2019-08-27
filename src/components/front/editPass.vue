<template>
    <div>
        <p class="im-Title texC">修改密码</p>
        <Card class="ep-contentDiv">
            <p class="ep-myInfo">我的信息</p>
            <div class="ep-editBigDiv">
                <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                    <FormItem label="原密码" prop="oldpasswd">
                        <Input type="password" v-model="formCustom.oldpasswd"></Input>
                    </FormItem>

                    <FormItem label="新密码" prop="passwd">
                        <Input type="password" v-model="formCustom.passwd"></Input>
                    </FormItem>
                    <FormItem label="确认密码" prop="passwdCheck">
                        <Input type="password" v-model="formCustom.passwdCheck"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formCustom')">确认修改</Button>
                        <Button @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
                    </FormItem>
                </Form>
            </div>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "editPass",
        data() {
            const validatePass = (rule, value, callback) => {
                if (this.formCustom.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.formCustom.validateField('passwdCheck');
                }
                callback();
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value !== this.formCustom.passwd) {
                    callback(new Error('两次输入的密码不一致！'));
                }else{
                    callback()
                }
            }
            return {
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    oldpasswd: ''
                },
                ruleCustom: {
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
                    oldpasswd: [
                        {required: true, message: '原密码不能为空', trigger: 'blur'},
                        { min:6, max:32, message: '长度在6-32个字符以内', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {

            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<style lang="stylus" >
    .ep-contentDiv
        width 60%
        margin 0px auto
        max-width 775px
    .ep-myInfo
        font-size 14px;
        color #4c4b4b
        padding-bottom 8px
        border-bottom 1px solid #27aafd
    .ep-editBigDiv
        width 50%
        margin 0px auto
        padding-top 30px
        min-width 300px
</style>
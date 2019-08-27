<template>
    <div class="im-BigDiv">
        <p class="im-Title texC">同账号增发密码器</p>
        <Card class="im-contentDiv clearfix">
            <div class="im-leftDiv fl">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                    <FormItem label="签名机具号" prop="machineId">
                        <Input v-model="formValidate.machineId" placeholder="签名机具号" disabled></Input>
                    </FormItem>
                    <FormItem label="增发机具号" prop="newmachineId">
                        <Input v-model="formValidate.newmachineId" placeholder="增发机具号" disabled></Input>
                    </FormItem>
                    <FormItem label="账号" prop="account">
                        <Input v-model="formValidate.account" placeholder="账号"></Input>
                    </FormItem>
                    <FormItem class="marT45">
                        <Button type="primary"  @click="$api.obj.machine.readMachineId(this1)">读机具号</Button>
                        <Button style="margin-left: 8px">增发</Button>
                    </FormItem>
                </Form>
            </div>
            <div>
                <introduce></introduce>
            </div>
        </Card>


    </div>
</template>

<script>
    import introduce from './../introduce'

    export default {
        name: "initMachine",
        data () {
            return {
                this1:this,
                formValidate: {
                    machineId: '',
                    newmachineId:'',
                    account:''
                },
                ruleValidate: {
                    machineId: [
                        { required: true, message: '签名机具号不能为空', trigger: 'blur' }
                    ],
                    newmachineId: [
                        { required: true, message: '增发机具号不能为空', trigger: 'blur' }
                    ],
                    account: [
                        { required: true, message: '账号不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        components:{
            introduce
        }
    }
</script>

<style  lang='stylus'>

</style>
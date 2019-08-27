<template>
    <div class="im-BigDiv">
        <p class="im-Title texC">单独删除前台账号</p>
        <Card class="im-contentDiv clearfix">
            <div class="im-leftDiv fl">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="机具号" prop="machineId">
                        <Input v-model="formValidate.machineId" placeholder="机具号" disabled></Input>
                    </FormItem>
                    <FormItem label="账号" prop="account">
                        <Input v-model="formValidate.account" placeholder="账号"></Input>
                    </FormItem>
                    <FormItem class="marT45">
                        <Button type="primary"  @click="$api.obj.machine.readMachineId(this1)">读机具号</Button>
                        <Button style="margin-left: 8px"  @click="deleteQianAccount('formValidate')">删除账号</Button>
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
                    account:''
                },
                ruleValidate: {
                    machineId:  this.machineIdLimit,
                    account: this.machineAccountLimit
                }
            }
        },
        methods:{
            deleteQianAccount (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Notice.success({
                            desc: '密码器作废成功',
                        });
                    } else {
                        /*   this.returnCode="失败"*/
                    }
                })
            },
        },
        components:{
            introduce
        }
    }
</script>

<style  lang='stylus'>

</style>
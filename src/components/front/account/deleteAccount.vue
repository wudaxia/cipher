<template>
    <div class="im-BigDiv">
        <p class="im-Title texC">删除账号</p>
        <Card class="im-contentDiv clearfix">
            <div class="im-leftDiv fl">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="机具号" prop="machineId">
                        <Input v-model="formValidate.machineId" placeholder="机具号" disabled></Input>
                    </FormItem>
                    <FormItem label="账号" prop="accountSelect">
                        <Select v-model="formValidate.accountSelect">
                            <Option v-for="item in formValidate.accountList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </FormItem>
                    <FormItem class="marT45">
                        <Button type="primary"  @click="$api.obj.machine.readMachineId(this1)">读机具号</Button>
                        <Button style="margin-left: 8px"  @click="deleteAccount('formValidate')">删除账号</Button>
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
                    accountList: [
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
                        },
                        {
                            value: 'aa',
                            label: 'aa'
                        }
                    ],
                    accountSelect:""
                },
                ruleValidate: {
                    machineId: this.machineIdLimit,
                    accountSelect:this.machineAccountLimit
                }
            }
        },
        methods:{
            deleteAccount (name) {
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
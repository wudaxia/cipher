<template>
    <div class="im-BigDiv">
        <p class="im-Title texC">指定账号签名密码器</p>
        <Card class="im-contentDiv clearfix">
            <div class="im-leftDiv fl">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="机具号" prop="machineId">
                        <Input v-model="formValidate.machineId" placeholder="机具号" disabled  ref="machineId"></Input>
                    </FormItem>
                    <FormItem label="账号" prop="accountSelect">
                        <Select v-model="formValidate.accountSelect">
                            <Option v-for="item in formValidate.accountList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </FormItem>
                    <FormItem class="marT45">
                        <Button type="primary"  @click="$api.obj.machine.readMachineId(this1)">读机具号</Button>
                        <Button style="margin-left: 8px" @click="setMainAccount()">指签</Button>
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
            async readMachineId () {
               /* this.$api.obj.machine.readMachineId(this)*/
               let res = await this.$api.obj.machine.readMachineId(this)
                if(res){
                    this.formValidate.machineId=res.data
                }

            },
        },
        components:{
            introduce
        }
    }
</script>

<style  lang='stylus'>

</style>
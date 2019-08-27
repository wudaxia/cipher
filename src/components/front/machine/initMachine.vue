<template>
    <div class="im-BigDiv">
        <p class="im-Title texC">密码器初始化</p>
        <Card class="im-contentDiv clearfix">
            <div class="im-leftDiv fl">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="机具号" prop="machineId">
                        <Input v-model="formValidate.machineId" placeholder="机具号" disabled></Input>
                    </FormItem>
                    <FormItem class="marT45">
                        <Button type="primary"  @click="$api.obj.machine.readMachineId(this1)" >读机具号</Button>
                        <Button style="margin-left: 8px" @click="init('formValidate')">初始化</Button>
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
                },
                ruleValidate: {
                    machineId: this.machineIdLimit
                }
            }
        },
        components:{
            introduce
        },
        methods: {
            init (name) {
                this.$api.obj.machine.bar(this,name,'init',{COM:4,machineId:'0442680657'})
            }
        },
    }
</script>

<style  lang='stylus'>

</style>
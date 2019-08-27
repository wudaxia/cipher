<template>
    <div>
        <div class="mz-SXlistDiv fl">
            <p class="fl">账号：</p>
            <Input type="text"  class="selectfixWidth" placeholder="账号" v-model="account"></Input>
        </div>
    </div>
</template>

<script>
    export default {
        name: "accountSearch",
        data(){
          return{
              account:""
          }
        },
        watch:{
            account(newValue, oldValue){
                console.log(this.$route.name)
                //密码器账号日志查询
                if(this.$route.name=='machineAcoountLog'){

                }else if(this.$route.name=='accountZhQuery'){ //账号综合查询

                }
            }
        },
        mounted(){
            //绑定全局事件globalEvent
            this.bus.$on('globalEvent',(val)=>{
                this.account="";
            })
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <div class="mz-SXlistDiv fl">
            <p class="fl">经办账号：</p>
            <Input type="text"  class="selectfixWidth" placeholder="经办账号" v-model="loginAccount"></Input>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loginAccSearch",
        data(){
          return{
              loginAccount:""
          }
        },
        mounted(){
            //绑定全局事件globalEvent
            this.bus.$on('globalEvent',(val)=>{
                this.loginAccount="";
            })
        }
    }
</script>

<style scoped>

</style>
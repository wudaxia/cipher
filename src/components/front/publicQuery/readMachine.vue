<template>
    <div class="clearfix">
        <div class="mz-SXlistDiv fl">
            <p class="fl">机具号：</p>
            <Input type="text"  class="selectfixWidth" placeholder="机具号" v-model="machineId"></Input>
            <Button type="primary">读机具号</Button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "readMachine",
        data(){
            return{
                machineId:"",
            }
        },
        mounted(){
            //绑定全局事件globalEvent
            this.bus.$on('globalEvent',(val)=>{
                this.machineId="";
            })
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <div class="mz-SXlistDiv clearfix">
            <p class="fl">操作结果：</p>
            <div class="mz-SXlists fl">
                <li :class="activeClass6 == index ? 'active':''" v-for="(item,index) in list6" :key="index" @click="getItem6(item,index)">
                    {{item}}
                </li>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "barResultS",
        data(){
            return{
                activeClass6:0, // 0为默认选择第一个，-1为不选择
                list6:["全部","成功","失败"],
            }
        },
        methods:{
            getItem6(item,index){
                this.activeClass6= index;
            },
        },
        mounted(){
            //绑定全局事件globalEvent
            this.bus.$on('globalEvent',(val)=>{
                this.activeClass6="";
            })
        }
    }
</script>

<style scoped>

</style>
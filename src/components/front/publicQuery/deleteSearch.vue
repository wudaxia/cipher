<template>
    <div>
        <div class="mz-SXlistDiv clearfix" >
            <p class="fl">删除状态：</p>
            <div class="mz-SXlists fl">
                <li :class="activeClass3 == index ? 'active':''" v-for="(item,index) in list3" :key="index" @click="getItem3(item,index)">
                    {{item}}
                </li>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "deleteSearch",
        data(){
            return{
                activeClass3:0, // 0为默认选择第一个，-1为不选择
                list3:["全部","已删除","未删除"],
            }
        },
        methods:{
            getItem3(item,index){
                this.activeClass3= index;
            },
        },
        mounted(){
            //绑定全局事件globalEvent
            this.bus.$on('globalEvent',(val)=>{
                this.activeClass3=0;
            })
        }
    }
</script>

<style scoped>

</style>
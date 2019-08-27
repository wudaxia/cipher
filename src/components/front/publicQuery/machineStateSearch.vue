<template>
    <div>
        <div class="mz-SXlistDiv clearfix">
            <p class="fl">机具状态：</p>
            <div class="mz-SXlists fl">
                <li :class="activeClass2 == index ? 'active':''" v-for="(item,index) in list2" :key="index" @click="getItem2(item,index)">
                    {{item}}
                </li>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "machineStateSearch",
        data(){
            return{
                activeClass2:0, // 0为默认选择第一个，-1为不选择
                list2:["全部","正常","停用","作废"],
            }
        },
        methods:{
            getItem2(item,index){
                this.activeClass2= index;
            },
        },
        mounted(){
            //绑定全局事件globalEvent
            this.bus.$on('globalEvent',(val)=>{
                this.activeClass2=0;
            })
        }
    }
</script>

<style scoped>

</style>
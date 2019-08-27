<template>
    <div>
        <div class="mz-SXlistDiv fl">
            <p class="fl">起止日期：</p>
            <DatePicker type="daterange" v-model="currentDate" @on-change="chooseDate" :options="options2" placement="bottom-end" placeholder="请选择日期" class="selectfixWidth"></DatePicker>
        </div>
    </div>
</template>

<script>
    export default {
        name: "barDateS",
        data(){
            return{
                currentDate:'',
                options2: {
                    shortcuts: [
                        {
                            text: '1 week',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '1 month',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '3 months',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                }
            }
        },
        methods:{
            chooseDate(date){
                console.log(date)
                if(this.$route.name=='accountZhQuery'){ //账号综合查询

                }else if(this.$route.name=='machineLog'){ //操作日志查询

                }else if(this.$route.name=='machineAcoountLog') { //账号日志查询

                }else if(this.$route.name=='checkLog') { //核验日志查询

                }
            }
        },
        mounted(){
            //绑定全局事件globalEvent
            this.bus.$on('globalEvent',(val)=>{
                this.currentDate="";
            })
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <div class="mz-SXlistDiv clearfix" style="display: inline-block">
            <p class="fl">筛选机构：</p>
            <div class="fl">
                <Select v-model="jigouSelect" filterable placeholder="全部" class="selectfixWidth">
                    <Option v-for="item in jigouList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
        </div>

        <div class="mz-SXlistDiv clearfix"  style="display: inline-block">
            <p class="fl">筛选地区：</p>
            <div class="fl">
                <Select v-model="areaSelect" filterable placeholder="全部"  class="selectfixWidth">
                    <Option v-for="item in areaList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchAreaJigou",
        data(){
            return {
                jigouList: [
                    {
                        value: '全部',
                        label: '全部'
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
                jigouSelect:"全部",
                areaList: [
                    {
                        value: '全部',
                        label: '全部'
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
                areaSelect:"全部",
            }
        },
        mounted(){
            //绑定全局事件globalEvent
            this.bus.$on('globalEvent',(val)=>{
                this.areaSelect="全部";
                this.jigouSelect="全部";
            })
        }
    }
</script>

<style scoped>

</style>
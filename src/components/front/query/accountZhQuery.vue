<template>
    <div>
        <p class="im-Title texC">账号综合查询</p>
        <Card class="mz-SXcontentDiv">
            <public-sx v-bind:showSX2="showSX2"></public-sx>
        </Card>
        <Card class="mz-tableDiv" ref="tableDiv">
            <div style="margin-bottom: 20px" class="clearfix">
                <Button type="primary" class="fr" >导出表格</Button>
            </div>

            <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="100" show-total show-sizer :page-size-opts="[5,10,15]" :current="1"  @on-change="changePage"/>
                </div>
            </div>
        </Card>
    </div>
</template>

<script>
    import publicSx from './../publicQuery/publicSX'

    export default {
        name: "machineZhQuery",
        components: {
            publicSx
        },
        data(){
            return{
                showSX2:true,
                /*   tableWidth:550,*/
                tableData1: this.mockTableData1(),
                tableColumns1: [
                    {
                        title: '机具号',
                        key: 'name'
                    },
                    {
                        title: '机具状态',
                        key: 'status',
                        render: (h, params) => {
                            const row = params.row;
                            const color = row.status === 1 ? 'primary' : row.status === 2 ? 'success' : 'error';
                            const text = row.status === 1 ? '停用' : row.status === 2 ? '正常' : '作废';

                            return h('Tag', {
                                props: {
                                    type: 'dot',
                                    color: color
                                }
                            }, text);
                        }
                    },
                    {
                        title: '机构',
                        key: 'branch',
                    },
                    {
                        title: '地区',
                        key: 'area',
                    },
                    {
                        title: '银行标识',
                        key: 'time',
                    },
                    {
                        title: '操作时间',
                        key: 'update',
                        render: (h, params) => {
                            return h('div', this.formatDate(this.tableData1[params.index].update));
                        }
                    }
                ]
            }
        },
        methods:{
            mockTableData1 () {
                let data = [];
                for (let i = 0; i < 5; i++) {
                    data.push({
                        name: '044268065' + Math.floor(Math.random () * 100 + 1),
                        status: Math.floor(Math.random () * 3 + 1),
                        branch: '江西分行',
                        area: '江西',
                        time: '本行发行',
                        update: new Date()
                    })
                }
                return data;
            },
            formatDate (date) {
                const y = date.getFullYear();
                let m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
            },
            changePage () {
                // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
                this.tableData1 = this.mockTableData1();
            }
        },
        mounted() {

        }
    }
</script>

<style lang='stylus'>


</style>
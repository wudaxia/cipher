<template>
    <div>
        <!--密码器信息条件筛选1-->
        <div  v-if="showSX1==true">
            <div class="mz-SXlistDiv clearfix" >
                <p class="fl">银行标识：</p>
                <div class="mz-SXlists fl">
                    <li :class="activeClass1 == index ? 'active':''" v-for="(item,index) in list1" :key="index" @click="getItem1(item,index)">
                        {{item}}
                    </li>
                </div>
            </div>
            <machine-state></machine-state>
            <div class="mz-wrapDiv" v-if="showSX==true">
                <delete-search></delete-search>
                <search-area-jigou></search-area-jigou>
                <read-machine></read-machine>
            </div>

        </div>

        <!--账号信息条件筛选1-->
        <div  v-if="showSX2==true">
            <div class="mz-SXlistDiv clearfix">
                <p class="fl">密码器类型：</p>
                <div class="mz-SXlists fl">
                    <li :class="activeClass4 == index ? 'active':''" v-for="(item,index) in list4" :key="index" @click="getItem4(item,index)">
                        {{item}}
                    </li>
                </div>
            </div>
            <delete-search></delete-search>
            <div class="mz-wrapDiv" v-if="showSX==true">
                <search-area-jigou></search-area-jigou>
                <div class="clearfix">
                    <account-search></account-search>
                    <login-acc-search></login-acc-search>
                </div>

                <div class="clearfix">
                    <bar-date-s></bar-date-s>
                    <read-machine></read-machine>
                </div>
            </div>

        </div>

        <!--密码器操作日志条件筛选1-->
        <div  v-if="showSX3==true">
            <machine-state></machine-state>
            <div class="mz-SXlistDiv clearfix">
                <p class="fl">操作类型：</p>
                <div class="mz-SXlists fl">
                    <li :class="activeClass5== index ? 'active':''" v-for="(item,index) in list5" :key="index" @click="getItem5(item,index)">
                        {{item}}
                    </li>
                </div>
            </div>
            <div class="mz-wrapDiv" v-if="showSX==true">
                <bar-result-s></bar-result-s>
                    <div class="clearfix">
                       <login-acc-search></login-acc-search>
                        <bar-date-s></bar-date-s>
                    </div>
                    <read-machine></read-machine>

            </div>

        </div>

        <!--密码器账号操作日志条件筛选1-->
        <div  v-if="showSX4==true">
          <!--  <bar-result-s></bar-result-s>-->
            <div class="clearfix">
                <div class="mz-SXlistDiv fl">
                    <p class="fl">操作类型：</p>
                    <div class="fl">
                        <Select v-model="barType2"  placeholder="全部" class="selectfixWidth">
                            <Option v-for="item in list7" :value="item">{{ item }}</Option>
                        </Select>
                    </div>
                </div>

                <div class="mz-SXlistDiv fl">
                    <p class="fl">操作结果：</p>
                    <div class="fl">
                        <Select v-model="barResult"  placeholder="全部" class="selectfixWidth">
                            <Option v-for="item in list8" :value="item">{{ item }}</Option>
                        </Select>
                    </div>
                </div>
            </div>
            <div class="clearfix">
                <account-search></account-search>
                <login-acc-search></login-acc-search>
            </div>

            <div class="mz-wrapDiv" v-if="showSX==true">
                <div class="clearfix">
                    <bar-date-s></bar-date-s>
                    <read-machine></read-machine>
                </div>
            </div>

        </div>

        <!--核验日志条件筛选1-->
        <div  v-if="showSX5==true">
            <!--  <bar-result-s></bar-result-s>-->
            <div class="clearfix">
                <div class="mz-SXlistDiv fl">
                    <p class="fl">凭证种类：</p>
                    <div class="fl">
                        <Select v-model="pingZtype" filterable placeholder="全部"  class="selectfixWidth">
                            <Option v-for="item in list9" :value="item">{{ item }}</Option>
                        </Select>
                    </div>
                </div>

                <div class="mz-SXlistDiv fl">
                    <p class="fl">操作结果：</p>
                    <div class="fl">
                        <Select v-model="barResult"  placeholder="全部" class="selectfixWidth">
                            <Option v-for="item in list8" :value="item">{{ item }}</Option>
                        </Select>
                    </div>
                </div>
            </div>

            <div class="clearfix">
                <div class="mz-SXlistDiv fl">
                    <p class="fl">付方账号：</p>
                    <Input type="text"  class="selectfixWidth" placeholder="付方账号" v-model="payAccount"></Input>
                </div>
                <div class="mz-SXlistDiv fl">
                    <p class="fl">凭证号码：</p>
                    <Input type="text"  class="selectfixWidth" placeholder="凭证号码" v-model="pingZNumber"></Input>
                </div>
            </div>

            <div class="mz-wrapDiv" v-if="showSX==true">
                <div class="clearfix">
                    <bar-date-s></bar-date-s>
                    <div class="mz-SXlistDiv fl">
                        <p class="fl">开票起止日期：</p>
                        <DatePicker type="daterange" :options="options3" v-model="kaipiaoDate" placement="bottom-end" placeholder="请选择日期" class="selectfixWidth"></DatePicker>
                    </div>
                </div>
                <div class="clearfix">
                    <login-acc-search></login-acc-search>
                </div>

            </div>

        </div>

        <div class="mz-SXbarDiv">
            <Button @click="reset">重置</Button>
            <span @click="showSX = !showSX" class="mz-barBtn">{{isshowText}}</span>
        </div>
    </div>
</template>

<script>
    import accountSearch from './accountSearch'
    import barDateS from './barDateS'
    import barResultS from './barResultS'
    import loginAccSearch from './loginAccSearch'
    import searchAreaJigou from './searchAreaJigou'
    import deleteSearch from './deleteSearch'
    import machineState from './machineStateSearch'
    import readMachine from './readMachine'

    export default {
        name: "publicSX",
        props:["showSX1","showSX2","showSX3","showSX4","showSX5","showSX6"],
        components: {
            accountSearch,
            barDateS,
            barResultS,
            loginAccSearch,
            searchAreaJigou,
            deleteSearch,
            machineState,
            readMachine
        },
        data(){
            return{
                kaipiaoDate:'',
                showSX:false,
                barType1:'全部',
                barType2:'全部',
                pingZtype:'支票',
                pingZNumber:'',
                payAccount:'',
                isshowText:"展开",
                activeClass1:0, // 0为默认选择第一个，-1为不选择
                activeClass4:0, // 0为默认选择第一个，-1为不选择
                activeClass5:0, // 0为默认选择第一个，-1为不选择
                list1:["全部","本行发行","非本行发行"],
                list4:["全部","签名密码器","非签名密码器"],
                list5:["全部","密码器初始化","密码器启用","密码器停用","密码器解锁"],
                list7:["全部","添加账号","删除账号","单独删除后台账号","更改账号秘钥删除","更改账号秘钥添加","同账号增发签名校验","同账号增发增发添加","指定签名密码器"],
                list8:["全部","成功","失败"],
                list9:["支票","汇兑凭证"],
                barResult:"全部",
                options3: {
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
            getItem1(item,index){
                console.log(item)
                this.activeClass1 = index;
            },
            getItem4(item,index){
                console.log(item)
                this.activeClass4 = index;
            },
            getItem5(item,index){
                console.log(item)
                this.activeClass5 = index;
            },
            reset(){
                this.activeClass1=0;
                this.activeClass4=0;
                this.activeClass5=0;
                this.barType1='全部';
                this.barType2='全部';
                this.barResult='全部';
                this.pingZtype='支票';
                this.kaipiaoDate='';
                this.payAccount='';
                this.pingZNumber='';
                this.bus.$emit('globalEvent')
            }
        },
        watch:{
            showSX(newValue, oldValue) {
                if(newValue==true){
                    this.isshowText='收起'
                }else{
                    this.isshowText='展开'
                }
            }
        },
    }
</script>

<style scoped>

</style>
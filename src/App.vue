<template>
  <div id="app" :style="contentStyleObj"  ref="app" class="clearfix">
      <app-header   v-if="$store.state.showHead" v-bind:activeClassTest="newClass" v-bind:activeTabTest="newTab"></app-header>
      <div :class="isContent==true?'container':''">
      <!--    <p class="im-Title texC" v-if="newConT">{{conTitle}}</p>-->
          <router-view ></router-view>
      </div>
  </div>
</template>

<script>
import Header from './components/front/Header'

export default {
    name: 'app',
    components: {
        appHeader: Header,
    },
    data() {
        return {
            contentStyleObj: {
                height: '',
                background:'#F1F5F9'
            },
            isContent:true,
          /*  conTitle:window.localStorage.conTitle*/
        }
    },
    methods: {
        getHeight() {
            if(this.isContent==true){
               /* console.log(document.body.scrollHeight)
                console.log(window.innerHeight)*/
                this.contentStyleObj.height = (window.innerHeight)+'px';
            }

        },
      /*  changeT: function (msg) { //回调方法，接收子组件传的参数
            this.conTitle = msg;
            localStorage.setItem("conTitle",msg)
        }*/
    },
    watch:{
        $route(to,from){
            if(to.path=='/login'){
                this.contentStyleObj.background = "#fff";
                this.isContent=false;
            }
            if(from.path=='/login'){
                this.contentStyleObj.background = "#F1F5F9";
                this.isContent=true;
            }
        }
    },
    computed:{
      /* newConT:function () {
           return this.$store.state.showContT
       },*/
        newTab:function () {
           return this.$store.state.currentTab
        },
        newClass:function () {
           return this.$store.state.currentTwoNav
        }
    },
    created(){
        window.addEventListener('resize', this.getHeight);
        this.getHeight()
    },
    mounted(){
       /* console.log(11)
        this.getHeight()*/
    },
    destroyed(){
        window.removeEventListener('resize', this.getHeight)
    }

}

</script>

<style lang="stylus" scoped>
.container
    padding 0px 9% 30px 9%
    background #F1F5F9
    position: relative;
    top: 139px;
</style>

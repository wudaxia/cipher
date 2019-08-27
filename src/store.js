import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const key = 'user'
const isLogin = 'isLogin'
const state ={
    navShow:true,
    maychangeShow:true,
    showHead:true,
  /*  showContT:true,*/
    user: null,
    currentTwoNav:-1,
    isSet:-1,
    currentTab:"密码器",
    isLogin: '0'
};

export default new Vuex.Store({
   state,
    getters: {
        getStorage: function (state) {
            if (!state.user) {
                state.user = JSON.parse(localStorage.getItem(key))
                state.isLogin = localStorage.getItem(isLogin)
            }
            return state.user
        },
     /*   getContT: function (state) {
            if (!state.showContT) {
                state.showContT = JSON.parse(localStorage.getItem("showContT"))
            }
            return state.showContT
        }*/
    },
    mutations: {
        $_setLogin (state, value) {
            state.isLogin = value
            localStorage.setItem(isLogin, value)
        },
        $_setStorage (state, value) {
            state.user = value
            localStorage.setItem(key, JSON.stringify(value))
        },
        $_removeStorage (state) {
            state.user = null
            localStorage.removeItem(key)
        },
       /* $_setContP(state, value) {
            state.showContT = value
            localStorage.setItem("showContT", JSON.stringify(value))
        },*/
        $_setContTwoNav(state, value) {
            state.currentTwoNav = value
            localStorage.setItem("currentTwoNav", JSON.stringify(value))
        },
        $_setCurrentTab(state, value) {
            state.currentTab = value
            localStorage.setItem("currentTab", value)
        },
    },
  actions: {

  }
})

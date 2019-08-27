import Vue from 'vue'
import Router from 'vue-router'
import welcome from './components/front/welcome'
import Verificate from './components/front/check/Verificate'
import Login from './components/front/Login'
import setting from './components/front/Setting'
import editPass from './components/front/editPass'
import user from './components/front/user/userMana'

/*密码器*/
import initMachine from './components/front/machine/initMachine'
import startMachine from './components/front/machine/startMachine'
import unlockMachine from './components/front/machine/unlockMachine'
import invalidateMachine from './components/front/machine/invalidateMachine'
import discontMachine from './components/front/machine/discontMachine'

/*账号*/
import addAcount from './components/front/account/addAcount'
import deleteAccount from './components/front/account/deleteAccount'
import deleteQianAccount from './components/front/account/deleteQianAccount'
import deleteHouAccount from './components/front/account/deleteHouAccount'
import setMainAccount from './components/front/account/setMainAccount'
import changeSecretKey from './components/front/account/changeSecretKey'
import addAccountToNext from './components/front/account/addAccountToNext'

/*综合查询*/
import machineZhQuery from './components/front/query/machineZhQuery'
import accountZhQuery from './components/front/query/accountZhQuery'

/*日志*/
import machineLog from './components/front/log/machineLog'
import machineAcoountLog from './components/front/log/machineAcoountLog'
import checkLog from './components/front/log/checkLog'

import store from '@/store';

Vue.use(Router)

const router = new Router({
 /* mode: 'history',*/
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: welcome,
        meta: {auth: true}, beforeEnter: (to, from, next) => {
            store.commit('$_setCurrentTab', "密码器")
            store.commit('$_setContTwoNav', -1)
            next();
        }
    },
      {
          path: '/editPass',
          name: 'editPass',
          component: editPass, beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "密码器")
              store.commit('$_setContTwoNav', -1)
              next();
          }
      },
      {
          path: '/login',
          name: 'login',
          component: Login, beforeEnter: (to, from, next) => {
              localStorage.clear()
              next();
          }
      },
      {
          path: '/setting',
          name: 'setting',
          component: setting,
          meta: {auth: true}, beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "密码器")
              store.commit('$_setContTwoNav', -1)
              next();
          }
      },
    {
      path: '/machine/initMachine',beforeEnter: (to, from, next) => {
            store.commit('$_setCurrentTab', "密码器")
            store.commit('$_setContTwoNav', 0)
            next();
        },
      name: 'initMachine',
        component:initMachine,
       /* meta: {auth: true}*/
    },
      {
          path: '/machine/startMachine',beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "密码器")
              store.commit('$_setContTwoNav', 1)
              next();
          },
          name: 'startMachine',
          component:startMachine
      },{
          path: '/machine/unlockMachine',beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "密码器")
              store.commit('$_setContTwoNav', 2)
              next();
          },
          name: 'unlockMachine',
          component:unlockMachine
      },{
          path: '/machine/invalidateMachine',beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "密码器")
              store.commit('$_setContTwoNav', 4)
              next();
          },
          name: 'invalidateMachine',
          component:invalidateMachine
      },{
          path: '/machine/discontMachine',beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "密码器")
              store.commit('$_setContTwoNav', 3)
              next();
          },
          name: 'discontMachine',
          component:discontMachine
      },{
          path: '/account/addAcount',beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "密码器账号")
              store.commit('$_setContTwoNav', 0)
              next();
          },
          name: 'addAcount',
          component:addAcount
      },{
          path: '/account/deleteAccount',beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "密码器账号")
              store.commit('$_setContTwoNav', 1)
              next();
          },
          name: 'deleteAccount',
          component:deleteAccount
      },{
          path: '/account/deleteQianAccount',beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "密码器账号")
              store.commit('$_setContTwoNav', 2)
              next();
          },
          name: 'deleteQianAccount',
          component:deleteQianAccount
      },{
          path: '/account/deleteHouAccount',beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "密码器账号")
              store.commit('$_setContTwoNav', 3)
              next();
          },
          name: 'deleteHouAccount',
          component:deleteHouAccount
      },{
          path: '/account/setMainAccount',beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "密码器账号")
              store.commit('$_setContTwoNav', 6)
              next();
          },
          name: 'setMainAccount',
          component:setMainAccount
      },{
          path: '/account/changeSecretKey',beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "密码器账号")
              store.commit('$_setContTwoNav', 5)
              next();
          },
          name: 'changeSecretKey',
          component:changeSecretKey
      },{
          path: '/account/addAccountToNext',beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "密码器账号")
              store.commit('$_setContTwoNav', 4)
              next();
          },
          name: 'addAccountToNext',
          component:addAccountToNext
      },{
          path: '/query/machineZhQuery',beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "查询")
              store.commit('$_setContTwoNav', 0)
              next();
          },
          name: 'machineZhQuery',
          component:machineZhQuery
      },{
          path: '/query/accountZhQuery', beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "查询")
              store.commit('$_setContTwoNav', 1)
              next();
          },
          name: 'accountZhQuery',
          component:accountZhQuery
      },{
          path: '/log/machineLog', beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "日志")
              store.commit('$_setContTwoNav', 0)
              next();
          },
          name: 'machineLog',
          component:machineLog
      },{
          path: '/log/machineAcoountLog', beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "日志")
              store.commit('$_setContTwoNav', 1)
              next();
          },
          name: 'machineAcoountLog',
          component:machineAcoountLog
      },{
          path: '/log/checkLog', beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "日志")
              store.commit('$_setContTwoNav', 2)
              next();
          },
          name: 'checkLog',
          component:checkLog
      },
      {
          path: '/Verificate',
          name: 'Verificate', beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "核验")
              store.commit('$_setContTwoNav', 0)
              next();
          },
          component:Verificate
      },
      {
          path: '/user',
          name: 'user', beforeEnter: (to, from, next) => {
              store.commit('$_setCurrentTab', "用户管理")
              store.commit('$_setContTwoNav', 0)
              next();
          },
          component:user
      },
      {path:"*",redirect:"/"}//上面的组件都没有匹配到就让他跳到主页
  ]
})

/*router.beforeEach((to, from, next) => {
    if (to.matched.some(m => m.meta.auth)) {
        if (window.localStorage.isLogin === '1') {
            next()
        } else if (to.path !== '/') {
          /!*  next({path: '/login'})
            alert('检测到您还未登录,请登录后操作！')*!/
           /!* Vue.prototype.$message.warning('检测到您还未登录,请登录后操作！')*!/
        }else{
            next({path: '/login'})
          /!*  alert('检测到您还未登录,请登录后操作！')*!/
        }
    } else {
        next()
    }
})*/

export default router

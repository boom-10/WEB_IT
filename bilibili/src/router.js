import Vue from 'vue'
import Router from 'vue-Router'

const Sign = () =>import('./views/Sign.vue')

Vue.use(Router)
export default new Router({
    mode:'history',
    base:"/",
    routes:[
     {
         path:'/Sign',
         name:'Sign',
         component: Sign,
     }
    ]
})
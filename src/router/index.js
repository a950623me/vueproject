import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/components/Index';
import News from '@/components/News';
Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {
            name:'index',
            path:'/',
            component:Index
        },{
            name:'news',
            path:'/news',
            component:News
        }
    ]
})
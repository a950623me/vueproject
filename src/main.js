import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
new Vue({
    el:"#app",
    data:{},
    router,
    store,
    components:{
        App
    },
    template:`<App/>`
})
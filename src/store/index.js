import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
//vuex3-声明store对象
export default new Vuex.Store({
    strict: false,   //严格模式：防止直接修改state
    state: {                                      //核心：数据
      a: 12, b: 5,
      users: []
    },
    mutations: {
      
    },
    actions: {
      
    },
    getters: {
     
    },
    modules: {
       
    }
  })

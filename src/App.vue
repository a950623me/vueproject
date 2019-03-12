<template lang='html'>
    <div class="app">
        <router-link :to='{name:"index",param:{}}'>首页</router-link>
        <router-link :to='{name:"news",param:{}}'>新闻</router-link>
        <router-view></router-view>
            {{$store.state}}
    </div>
</template>
<script>
export default {
    name:'App',
    data(){
        return{

        }
    }
}
</script>
<style scoped>

</style>



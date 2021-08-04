<template>
  <router-link to="/home"></router-link>
  <router-link :to="{path:'/home',query:{name:'coding'}}"></router-link>
  <!-- props
      1:props: href  跳转路径
      2.props.route: 跳转的路由对象
      3.props.navigte: 导航函数
      4.props.isActive: 当前是否处于活动状态-->
  <router-view to="home" v-slot="props">
    <button>{{props.href}}</button>
    <p>{{props.route}}</p>
    <button @click="props.navigte">首页</button>
  </router-view>
</template>

<script>
//router-link: router-view内置组件，带有插槽和作用域插槽，默认渲染为a标签
        // 属性：1.to----路由跳转地址，字符串或对象
              // 2.插槽：可为标签元素或组件对象
              // 2.custom:自定义渲染,使用后，router-link渲染的a标签会消失，导航也会失效(使用导航函数)

export default {

}
</script>

<style>

</style>
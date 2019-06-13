<template>
  <div class="hello">
    <h1>欢迎进入</h1>
    <router-link to="/index/hello">跳转</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
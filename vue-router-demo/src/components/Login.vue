<template>
  <div class="hello">
    <h1>登录界面</h1>
    <button @click=JumpPage>登录</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
      JumpPage(){
          this.$router.push('./index');  //跳转到指定组件
      }
  }
}
</script>
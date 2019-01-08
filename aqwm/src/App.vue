<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped="">
@import './styles/main.less';
#app {
	height: 100%;
	background-color: #f5f5f5;
	font-family: "Helvetica Neue", Helvetica, sans-serif;
	.fs(16);
	color: #212121;
}
</style>

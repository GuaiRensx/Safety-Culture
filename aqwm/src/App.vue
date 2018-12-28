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
	font-family: 'Avenir',Helvetica,Arial,sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing:grayscale;
	.fs(16);
	color: #2c3e50;
}
</style>

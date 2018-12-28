<template>
	<div class="safePro">
		<mu-container data-mu-loading-color="secondary" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2" class="demo-loading-wrap">
			<mu-button color="primary" @click="loading()">区域加载</mu-button>
			<mu-button color="secondary" v-loading="loading1" data-mu-loading-size="24" @click="loading1 = !loading1">按钮加载</mu-button>
			<mu-button color="teal" @click="fullscreen()">全屏加载</mu-button>
		</mu-container>
	</div>

</template>

<script>
	import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
	import Vue from 'vue';
	import Loading from 'muse-ui-loading';
	Vue.use(Loading);
	export default {
		name: 'SafetyProduction',
		data() {
			return {
				msg: '安全生产',
				loading1: false,
				loading2: false
			}
		},
		methods: {
			loading() {
				this.loading2 = true;
				setTimeout(() => {
					this.loading2 = false;
				}, 2000)
			},
			fullscreen() {
				const loading = this.$loading();
				setTimeout(() => {
					loading.close();
				}, 2000)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import '../../styles/main.less';
	.demo-loading-wrap {
		height: 300px;
		position: relative;
		.mu-button {
			margin: 6px 8px;
		}
	}
</style>
<template>
	<div class="home">
	<div class="header clearfix">
			<div class="header_left fl">
				<mu-button icon slot="left"	>
					<mu-icon size="36" value="chevron_left"></mu-icon>
				</mu-button>
			</div>
			<div class="header_right fl">
				安全文明
			</div>
		</div>
		<div class="list">
			<mu-paper :z-depth="1" class="demo-list-wrap">
				<mu-divider></mu-divider>
				<mu-list>
					<mu-container data-mu-loading-color="secondary" @click="fullscreen()" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2" class="demo-loading-wrap" >
						<mu-list-item button :ripple="true" @click="aqscNextdrop()">
							<mu-list-item-action>
								<mu-icon value="info" color="blue"></mu-icon>
							</mu-list-item-action>
							<mu-list-item-title style="color: deepskyblue;">安全生产</mu-list-item-title>
						</mu-list-item>
						<mu-divider></mu-divider>
					</mu-container>
					<mu-container data-mu-loading-color="secondary" @click="fullscreen()" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2" class="demo-loading-wrap">
						<mu-list-item button :ripple="true" @click="wmsgNextdrop()" >
							<mu-list-item-action>
								<mu-icon value="info" color="blue"></mu-icon>
							</mu-list-item-action>
							<mu-list-item-title style="color: deepskyblue;">文明施工</mu-list-item-title>
						</mu-list-item>
						<mu-divider></mu-divider>
					</mu-container>
					<mu-container data-mu-loading-color="secondary" @click="fullscreen()" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2" class="demo-loading-wrap">
						<mu-list-item button :ripple="true" @click="sgcfNextdrop()">
							<mu-list-item-action>
								<mu-icon value="info" color="blue"></mu-icon>
							</mu-list-item-action>
							<mu-list-item-title style="color: deepskyblue;">施工处罚</mu-list-item-title>
						</mu-list-item>
					</mu-container>
				</mu-list>
			</mu-paper>
		</div>
	</div>
</template>

<script>
	import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
	import Vue from 'vue';
	import Loading from 'muse-ui-loading';
	Vue.use(Loading);
	export default {
		name: 'Home',
		data() {
			return {
				msg: 'Welcome',
				loading1: false,
				loading2: false
				
			};
		},
		methods: {
			fullscreen() {
				const loading = this.$loading({
					 overlayColor: 'hsla(0,0%,100%,.9)',
				text:'正在跳转'	
				});
				setTimeout(() => {
					loading.close();
				}, 1000)		
			},
			aqscNextdrop(){
					setTimeout(() => {
						console.log(this.$router);
							this.$router.push({ name:"Aqsc"})
				}, 1000)	
			},
			wmsgNextdrop(){
					setTimeout(() => {
							this.$router.push({ name:"Wmsg"})
				}, 1000)	
			},
			sgcfNextdrop(){
					setTimeout(() => {
							this.$router.push({ name:"Sgcf"})
				}, 1000)	
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import '../styles/main.less';
	.header{
		top: 0;
		color:#fff;
		z-index: 999;
		.w(375);
		.h(45);
		background:#1B8EE9;
		.header_right{
			.lh(45);
			.fs(16);
			.padding-left(100);
			font-weight: bold;
		}
	}
	.list{
		width: 100%;
		.mu-list{
			padding: 0;
		}
	}
</style>
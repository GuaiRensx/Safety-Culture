<template>
	<div class="home">
		<div class="header">
			<mu-appbar style="width: 100%;" color="primary">
				<mu-button icon slot="left">
					<mu-icon size="36" value="chevron_left"></mu-icon>
				</mu-button>
				安全文明
			</mu-appbar>
		</div>
		<div class="list">
			<mu-paper :z-depth="1" class="demo-list-wrap">
				<mu-divider></mu-divider>
				<mu-list>
					<mu-container data-mu-loading-color="secondary" @click="fullscreen()" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2" class="demo-loading-wrap" >
						<mu-list-item button :ripple="true" @click="nextdrop()">
							<mu-list-item-action>
								<mu-icon value="info" color="blue"></mu-icon>
							</mu-list-item-action>
							<mu-list-item-title style="color: deepskyblue;">安全生产</mu-list-item-title>
						</mu-list-item>
						<mu-divider></mu-divider>
					</mu-container>
					<mu-container data-mu-loading-color="secondary" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2" class="demo-loading-wrap">
						<mu-list-item button :ripple="true" to="" @click="fullscreen()">
							<mu-list-item-action>
								<mu-icon value="info" color="blue"></mu-icon>
							</mu-list-item-action>
							<mu-list-item-title style="color: deepskyblue;">文明施工</mu-list-item-title>
						</mu-list-item>
						<mu-divider></mu-divider>
					</mu-container>
					<mu-container data-mu-loading-color="secondary" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2" class="demo-loading-wrap">
						<mu-list-item button :ripple="true" to="safetyProduction" @click="fullscreen()">
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
	import router from 'vue-router'
	import Loading from 'muse-ui-loading';
	Vue.use(Loading);
	Vue.use(router)
	export default {
		name: 'Home',
		data() {
			return {
				msg: 'Welcome',
				loading1: false,
				loading2: false,
				nextDrop:false,
				
			};
		},
		methods: {
			fullscreen() {
				const loading = this.$loading({
					 overlayColor: 'hsla(0,0,0,1)',
				text:'正在跳转'	
				});
				setTimeout(() => {
//					console.log(this.nextDrop)
					loading.close();
				}, 1000)		
			},
			nextdrop(){
				console.log(111)
					setTimeout(() => {
						console.log(2222)
							this.$router.push({ name:"SafetyProduction"})
				}, 1000)	
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import '../styles/main.less';
</style>
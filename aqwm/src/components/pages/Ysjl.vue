<template>
	<div class="Ysjl">
		<div class="header clearfix">
			<div class="header_left fl">
				<mu-button icon slot="left" @click="backHome()">
					<mu-icon size="36" value="chevron_left"></mu-icon>
				</mu-button>
			</div>
			<div class="header_center fl">
				验收记录
			</div>
		</div>

	</div>
</template>

<script>
	import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
	import 'muse-ui-message/dist/muse-ui-message.css';
	import Vue from 'vue';
	import Loading from 'muse-ui-loading';
	import Message from 'muse-ui-message';
	import Toast from 'muse-ui-toast';

	Vue.use(Toast);
	Vue.use(Message);
	Vue.use(Loading);
	export default {
		name: 'Aqsc',
		data() {
			return {
				msg: '检验记录',
				show1: false,
				citys: [
					'我是', '全部', 'American Samoa', 'Arizona',
					'Arkansas', 'California', 'Colorado', 'Connecticut',
					'Delaware', 'District of Columbia', 'Federated States of Micronesia',
					'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
					'Illinois'
				],
				filterable: {
					value1: '',
					value2: [],
					value3: []
				},
				form: {
					select_name: '',
					select_node: '',
					select_area: '',
					date: '',
					select_state: '全部'
				}
			}
		},
		methods: {
			//返回上一页
			backHome() {
				var self = this;
				const loading = self.$loading({
					overlayColor: 'hsla(0,0%,100%,.9)',
					text: '正在跳转'
				});
				setTimeout(() => {
					loading.close();
				}, 1000)
				this.$options.methods.backHomedrop.bind(this)();
			},
			backHomedrop() {
				setTimeout(() => {
					this.$router.push({
						name: "Addexamine"
					})
				}, 1000)
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import '../../styles/main.less';
	/*头部*/
	
	.header {
		position: fixed;
		top: 0;
		color: #fff;
		z-index: 999;
		.w(375);
		.h(48);
		background: #1B8EE9;
		.header_center {
			.lh(48);
			.fs(16);
			.padding-left(105);
			font-weight: bold;
		}
	}
	
</style>
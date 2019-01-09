<template>
	<div class="ysjl">
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
		<div class="acceptance_con">
			<div class="first_title">主控项目</div>
			<ul>
				<li v-for="(n,index) in 3" :key="index" @click="goDetail()">
					<span>
						<mu-icon size="16" class="fl" value="chevron_right"></mu-icon>&nbsp;石材强度等级
					</span>
					<font>未验收</font>
				</li>
			</ul>
			<div class="first_title">一般项目</div>
			<ul>
				<li v-for="(n,index) in 30" :key="index">
					<span>
						<mu-icon size="16" class="fl" value="chevron_right"></mu-icon>&nbsp;清水墙水平灰缝平直度：料石砌体：粗料石：墙
					</span>
					<font>未验收</font>
				</li>
			</ul>
		</div>
		<div class="querenyanshou">
			<button>确认验收</button>
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
			//前往详情页
			goDetail() {
				var self = this;
				const loading = self.$loading({
					overlayColor: 'hsla(0,0%,100%,.9)',
					text: '正在跳转'
				});
				setTimeout(() => {
					loading.close();
				}, 1000)
				this.$options.methods.goDetaildrop.bind(this)();
			},
			goDetaildrop() {
				setTimeout(() => {
					this.$router.push({
						name: "Detail"
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
		.h(45);
		background: #1B8EE9;
		.header_center {
			.lh(45);
			.fs(16);
			.padding-left(105);
			font-weight: bold;
		}
	}
	
	.acceptance_con {
		.margin-top(45);
		.padding(15, 0, 80, 0);
		.first_title {
			.h(40);
			.lh(40);
			.padding(0, 10, 0, 10);
			background: #52C1F5;
			color: #fff;
		}
		/*ul {
			background: #fff;
			li {
				position: relative;
				.lh(28);
				.padding(6, 15, 6, 20);
				.fs(14);
				border-bottom: 1px solid #e8e8e8;
				i {
					position: absolute;
					.top(11);
					font-weight: bold;
					color: #fff;
					background: #1B8EE9;
					border-radius: 50%;
				}
				.second_title {
					color: #1B8EE9;
					.padding-left(25);
					width: 70vw;
				}
				.states {
					color: #F04844;
				}
			}
		}*/
		ul {
			background: #fff;
			li {
				display: table;
				.fs(14);
				width: 100%;
				.mnh(40);
				background: #ffffff;
				.padding(6, 15, 6, 20);
				color: #1B8EE9;
				border-bottom: 1px solid #e8e8e8;
				span {
					display: table-cell;
					width: 70vw;
					vertical-align: middle;
					i {
						font-weight: bold;
						color: #fff;
						background: #1B8EE9;
						border-radius: 50%;
					}
				}
				font {
					color: #F04844;
					display: table-cell;
					vertical-align: middle;
					text-align: right;
				}
			}
		}
	}
	
	.querenyanshou {
		.h(50);
		.fs(16);
		font-weight: bold;
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		button {
			background: #1B8EE9;
			color: #fff;
			display: block;
			width: 100%;
			height: 100%;
		}
	}
</style>
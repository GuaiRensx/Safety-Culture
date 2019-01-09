<template>
	<div class="wmsg">
		<div class="header clearfix">
			<div class="header_left fl">
				<mu-button icon slot="left" @click="backHome()">
					<mu-icon size="36" value="chevron_left"></mu-icon>
				</mu-button>
			</div>
			<div class="header_center fl">
				施工处罚
			</div>
			<div class="header_right fr">
				<mu-button icon slot="left" @click="show1=!show1">
					<mu-icon size="30" value="search"></mu-icon>
				</mu-button>
			</div>
		</div>
		<div class="content">
			<mu-container style="padding: 0;">
				<div class="title">处罚记录列表</div>
				<ul>
					<li v-for="(n,index) in 10" :key="index">
						<div class="info_top">
							<dl>
								<dd>
									<span class="fs">项目名称：</span>
									<span>ZZ020018001_保现投资_总部</span>
								</dd>
								<dd>
									<span class="fs">施工节点：</span>
									<span>工程开工_别墅21#</span>
								</dd>
								<dd>
									<span class="fs">期 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区：</span>
									<span>别墅22#</span>
								</dd>
								<dd>
									<span class="fs unit">被处罚单位：</span>
									<span>XXX</span>
								</dd>
							</dl>
						</div>
						<mu-divider></mu-divider>
						<div class="info_bot clearfix">
							<span>处罚人：张晓天</span>
							<span class="time">处罚日期：2018-11-29</span>
							<span class="delete fr" @click="confirm">  
									<mu-button color="#ddd" small  icon>
    									<mu-icon size="20" value="delete"></mu-icon>
  									</mu-button>					
								</span>
						</div>

					</li>
				</ul>
			</mu-container>
		</div>

		<mu-slide-right-transition>
			<div class="searchBox" v-show="show1">
				<div class="searchContent">
					<mu-form ref="form" class="mu-demo-form" :model="form">
						<ul>
							<li class="punish_time clearfix">
								<span class="fl">处罚时间：</span>
								<!--<mu-date-input v-model="form.date" class="fr" type="dateTime" actions></mu-date-input>-->
								<input type="date" name="" id="" value="" v-model="form.date" />
							</li>
							<li class="clearfix punish_name">
								<span class="fl">项目名称：</span>
								<select v-model="form.select_name" prop="punish_name">
									<option v-for="(city,index) in citys" :key="index" :label="city" :value="city"></option>
								</select>
							</li>
							<li class="clearfix punish_node">
								<span class="fl">施工节点：</span>
								<select v-model="form.select_node" prop="punish_node">
									<option v-for="(city,index) in citys" :key="index" :label="city" :value="city"></option>
								</select>
							</li>
							<li class="clearfix punish_area">
								<span class="fl">期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区：</span>
								<select v-model="form.select_area" prop="punish_area">
									<option v-for="(city,index) in citys" :key="index" :label="city" :value="city"></option>
								</select>
							</li>
							<li class="clearfix punish_unit">
								<span class="fl">被处罚单位：</span>
								<select v-model="form.select_unit" prop="punish_unit">
									<option v-for="(city,index) in citys" :key="index" :label="city" :value="city"></option>
								</select>
							</li>
						</ul>
					</mu-form>
					<div class="searchBox_btn clearfix">
						<div class="btn-left fl">
							<mu-button full-width @click="clear" style="height:100%;font-size:16px;">重置</mu-button>
						</div>
						<div class="btn-right fr">
							<mu-button full-width textColor="#0062cc" style="height:100%;font-size:16px;">查询</mu-button>
						</div>
					</div>
				</div>
			</div>
		</mu-slide-right-transition>
		<div class="addExamine">
			<mu-container class="button-wrapper">
				<mu-flex justify-content="center" align-items="center">
					<mu-button round color="primary" @click="goadd">
						<mu-icon left value="add"></mu-icon>增加处罚记录
					</mu-button>
				</mu-flex>
			</mu-container>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import Helpers from 'muse-ui/lib/Helpers';
	Vue.use(Helpers);
	export default {
		name: 'Sgcf',
		data() {
			return {
				msg: '施工处罚',
				show1: false,
				citys: [
					'Alabama', 'Alaska', 'American Samoa', 'Arizona',
					'Arkansas', 'California', 'Colorado', 'Connecticut',
					'Delaware', 'District of Columbia', 'Federated States of Micronesia',
					'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
					'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
					'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
					'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
					'Missouri', 'Montana', 'Nebraska', 'Nevada',
					'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
					'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
					'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
					'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
					'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
					'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
				],
				form: {
					select_name: '',
					select_node: '',
					select_area: '',
					select_unit: '',
					date: '',
				}
			}
		},
		methods: {
			//头部返回按钮
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
						name: "Home"
					})
				}, 1000)
			},
			//清空搜索框
			clear() {
				this.$refs.form.clear();
				this.form = {
					select_name: '',
					select_node: '',
					select_area: '',
					select_unit: '',
					date: '',
				};
			},
			//删除提示
			confirm() {
				this.$confirm('删除此处罚单将连带删除相关处罚项纪录？', '提示', {
					type: 'warning',
					icon: '',
				}).then(({
					result
				}) => {
					if(result) {
						this.$toast.message('已删除');
					} else {
						this.$toast.message('已取消');
					}
				});
			},
			//跳转增加检查纪录
			goadd() {
				var self = this;
				const loading = self.$loading({
					overlayColor: 'hsla(0,0%,100%,.9)',
					text: '正在跳转'
				});
				setTimeout(() => {
					loading.close();
				}, 1000)
				this.$options.methods.drop.bind(this)();
			},
			drop() {
				setTimeout(() => {
					this.$router.push({
						name: "Addpunish"
					})
				}, 1000)
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import '../../styles/main.less';
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
			.padding-left(95);
			font-weight: bold;
		}
	}
	
	.content {
		.margin-top(45);
		.title {
			position: fixed;
			.top(45);
			z-index: 999;
			.w(375);
			.h(35);
			.lh(19);
			.padding(8, 15, 8, 15);
			background: #fff;
			color: #212121;
			border-bottom: 1px solid #fafafa;
			.fs(14);
		}
		ul {
			.margin-top(83);
			.padding(15, 10, 80, 10);
			width: 100%;
			background: #fafafa;
			li {
				.fs(14);
				.border-radius(10);
				background: #fff;
				.margin-bottom(10);
				.info_top {
					dl {
						.padding(5, 5, 5, 5);
						dd {
							 display: table;
							.padding(2,5,2,10);
							span{
								display: table-cell;
								.lh(24);
								color:#212121;
							}
							.fs {
								color: #666;
								.w(72);
							}
							.unit{
								.w(84);
							}
						}
					}
				}
				.info_bot {
					/*		.margin(5, 0, 5, 0);*/
					.lh(33);
					color: #666;
					.fs(12);
					.padding(0,0,0,10);
					border-bottom-right-radius: 5px;
					border-bottom-left-radius: 5px;
					.time {
						.padding-left(25);
					}
				}
				.delete {
					.padding-right(5);
					z-index: 999;
				}
			}
		}
	}
	
	.addExamine {
		.w(375);
		background: rgba(255, 255, 255, 0.7);
		position: fixed;
		.bottom(0);
		.button-wrapper {
			text-align: center;
			.mu-button {
				margin: 8px;
				vertical-align: middle;
			}
			a.mu-button {
				text-decoration: none;
			}
		}
	}
	
	.searchBox {
		position: fixed;
		z-index: 999;
		.top(45);
		right: 0;
		.w(375);
		.h(622);
		background: rgba(127, 127, 127, 0.7);
		border: 1px solid #ccc;
		.searchContent {
			.padding(0, 10, 12, 10);
			background: #fff;
			ul {
				width: 100%;
				li {
					.h(48);
					position: relative;
					span {
						position: absolute;
						.left(7);
						.top(17);
					}
					select {
						position: absolute;
						background: #fff;
						border-radius: 2px;
						border-color: #e9e9e9;
						.top(10);
						right: 0;
						.w(260);
						.h(38);
					}
				}
				.punish_time {
					input {
						position: absolute;
						border: 1px solid #e9e9e9;
						.top(10);
						right: 0;
						margin: 0;
						padding: 0;
						.w(260);
						.h(38);
						border-radius: 5px;
						border-color: #e9e9e9;
					}
				}
			}
			.searchBox_btn {
				.h(45);
				width: 100%;
				position: absolute;
				/*.bottom(0);*/
				/*bottom: 322px;*/
				.bottom(323);
				left: 0;
				.btn-left {
					height: 100%;
					width: 50%;
				}
				.btn-right {
					height: 100%;
					width: 50%;
				}
			}
		}
	}
</style>
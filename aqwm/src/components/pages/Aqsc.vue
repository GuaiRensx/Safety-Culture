<template>
	<div class="Aqsc">
		<div class="header headerFixed">
			<mu-appbar style="width: 100%;" color="primary">
				<mu-button icon slot="left" to="/">
					<mu-icon size="36" value="chevron_left"></mu-icon>
				</mu-button>
				安全生产
				<mu-button icon slot="right" @click="show1=!show1">
					<mu-icon size="30" value="search"></mu-icon>
				</mu-button>
			</mu-appbar>
		</div>
		<div class="content">
			<mu-container style="padding: 0;">
				<div class="title">检查记录列表</div>
				<ul>
					<li v-for="(n,index) in 10" :key="index">
						<div class="info_top">
							<dl>
								<dd>
									<span class="fs">检查项目：</span>
									<span>ZZ020018001_保现投资_总部</span>
								</dd>
								<dd>
									<span class="fs">施工节点：</span>
									<span>工程开工_别墅21#</span>
								</dd>
								<dd>
									<span class="fs">期 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区：</span>
									<span>别墅22#</span>
									<span class="fr state">已检查</span>
								</dd>
							</dl>
						</div>
						<mu-divider></mu-divider>
						<div class="info_bot clearfix">
							<span>检查人：张晓天</span>
							<span class="time">检查日期：2018-11-29</span>
							<span class="delete fr">  
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
					<mu-form ref="form" class="mu-demo-form" :model="filterable">
						<ul>
							<li class="punish_time clearfix">
								<span class="fl">检查时间：</span>
								<!--<mu-date-input v-model="form.date" class="fr" type="dateTime" actions></mu-date-input>-->
								<input type="date" name="" id="" value="" v-model="form.date" />
							</li>
							<li class="clearfix punish_state">
								<span class="fl">项目名称：</span>
								<select filterable v-model="form.select_naem" prop="punish_state">
									<option v-for="city,index in citys" :key="city" :label="city" :value="city"></option>
								</select>
							</li>
							<li class="clearfix punish_state">
								<span class="fl">施工节点：</span>
								<select filterable v-model="form.select_node" prop="punish_state">
									<option v-for="city,index in citys" :key="city" :label="city" :value="city"></option>
								</select>
							</li>
							<li class="clearfix punish_state">
								<span class="fl">期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区：</span>
								<select filterable v-model="form.select_area" prop="punish_state">
									<option v-for="city,index in citys" :key="city" :label="city" :value="city"></option>
								</select>
							</li>
							<li class="clearfix punish_state">
								<span class="fl">状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：</span>
								<select filterable v-model="form.select_state" prop="punish_state">
									<option v-for="city,index in citys" :key="city" :label="city" :value="city"></option>
								</select>
							</li>
						</ul>
					</mu-form>
					<div class="searchBox_btn clearfix">
						<div class="btn-left fl">
							<mu-button full-width @click="clear">重置</mu-button>
						</div>
						<div class="btn-right fr">
							<mu-button full-width textColor="primary">查询</mu-button>
						</div>
					</div>
				</div>
			</div>
		</mu-slide-right-transition>
		<div class="addExamine">
			<mu-container class="button-wrapper">
				<mu-flex justify-content="center" align-items="center">
					<mu-button round color="primary" to="aqsc/addexamine">
						<mu-icon left value="add"></mu-icon>新增检查记录</mu-button>
				</mu-flex>
			</mu-container>
		</div>
	</div>
</template>

<script>
	import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
	import Vue from 'vue';
	import Loading from 'muse-ui-loading';
	Vue.use(Loading);
	export default {
		name: 'Aqsc',
		data() {
			return {
				msg: '安全生产',
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
			fullscreen() {
				const loading = this.$loading({
					overlayColor: 'hsla(0,0,0,1)',
					text: '正在跳转'
				});
				setTimeout(() => {
					loading.close();
				}, 1000)
			},
			addExaminedrop() {
				setTimeout(() => {
					this.$router.push({
						name: "Aqsc"
					})
				}, 1000)
			},
			clear() {
				this.$refs.form.clear();
				this.form = {
					select_name: '',
					select_node: '',
					select_area: '',
					select_state: '全部',
					date: '',
				};
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import '../../styles/main.less';
	.headerFixed {
		.h(56);
		position: fixed;
		top: 0;
		z-index: 999;
		.w(375);
	}
	
	.content {
		.margin-top(56);
		.title {
			position: fixed;
			top: 56px;
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
			.margin-top(91);
			.padding(15, 10, 80, 10);
			width: 100%;
			background: #fafafa;
			li {
				.border-radius(10);
				background: #fff;
				.margin-bottom(10);
				.info_top {
					dl {
						.padding(5, 5, 5, 5);
						dd {
							.fs {
								color: #666;
							}
							.state {
								.fs(14);
								.lh(24);
								.w(60);
								.h(24);
								background: #fbdcda;
								.margin-right(5);
								text-align: center;
								color: #F04844;
								.border-radius(10);
							}
						}
					}
				}
				.info_bot {
					/*		.margin(5, 0, 5, 0);*/
					.lh(33);
					color: #666;
					.fs(14);
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
	
	.searchBox {
		position: fixed;
		z-index: 999;
		.top(56);
		right: 0;
		.w(375);
		.h(611);
		background: rgba(127,127,127,0.7);
		border: 1px solid #ccc;
		.searchContent {
			.padding(0, 10, 10, 10);
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
						border-radius: 2px;
						border-color: #E9E9E9;
						.top(10);
						right: 0;
						.w(260);
						.h(38);
					}
				}
				.punish_time {
					input {
						position: absolute;
						border: 1px solid #E9E9E9;
						.top(10);
						right: 0;
						margin: 0;
						padding: 0;
						.w(260);
						.h(38);
						border-radius: 5px;
						border-color: #E9E9E9;
					}
				}
			}
			.searchBox_btn {
				width: 100%;
				position: absolute;
				/*.bottom(0);*/
				/*bottom: 322px;*/
				.bottom(322);
				left: 0;
				.btn-left {
					width: 50%;
				}
				.btn-right {
					width: 50%;
				}
			}
		}
	}	
	.addExamine {
		.w(375);
		background: rgba(255,255,255,0.7);
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
</style>
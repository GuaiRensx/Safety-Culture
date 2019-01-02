<template>
	<div class="wmsg">
		<div class="header headerFixed">
			<mu-appbar style="width: 100%;" color="primary">
				<mu-button icon slot="left" to="/">
					<mu-icon size="36" value="chevron_left"></mu-icon>
				</mu-button>
				施工处罚
				<mu-button icon slot="right" @click="show1=!show1">
					<mu-icon size="30" value="search"></mu-icon>
				</mu-button>
			</mu-appbar>
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
									<span class="fs">被处罚单位：</span>
									<span>XXX</span>
								</dd>
							</dl>
						</div>
						<mu-divider></mu-divider>
						<div class="info_bot clearfix">
							<span>处罚人：张晓天</span>
							<span class="time">处罚日期：2018-11-29</span>
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
					<span class="condition">查询条件：</span>
					<mu-form ref="form" class="mu-demo-form" :model="filterable">
						<ul>
							<li class="punish_time clearfix">
								<span class="fl">处罚时间：</span>
								<mu-date-input v-model="form.date" class="fr" type="dateTime" actions></mu-date-input>
							</li>
							<!--<mu-divider></mu-divider>-->
							<li class="clearfix punish_name">
								<span class="fl">项目名称：</span>
								<mu-container class="fr selsct">
									<mu-row gutter>
										<mu-col span="12" lg="4" sm="6">
											<mu-select prop="punish_name" label="" filterable v-model="form.select_name" full-width>
												<mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
											</mu-select>
										</mu-col>
									</mu-row>
								</mu-container>
							</li>
							<li class="clearfix punish_node">
								<span class="fl">施工节点：</span>
								<mu-container class="fr selsct">
									<mu-row gutter>
										<mu-col span="12" lg="4" sm="6">
											<mu-select label="" filterable v-model="form.select_node" ref="punish_node" full-width>
												<mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
											</mu-select>
										</mu-col>
									</mu-row>
								</mu-container>
							</li>
							<li class="clearfix punish_area">
								<span class="fl">期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区：</span>
								<mu-container class="fr selsct">
									<mu-row gutter>
										<mu-col span="12" lg="4" sm="6">
											<mu-select label="" filterable v-model="form.select_area" prop="punish_area" full-width>
												<mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
											</mu-select>
										</mu-col>
									</mu-row>
								</mu-container>
							</li>
						</ul>
					</mu-form>
					<div class="searchBox_btn clearfix">
						<div class="btn-left fl">
							<mu-button color="primary">查询</mu-button>
						</div>
						<div class="btn-right fr">
							<mu-button color="primary" @click="clear">重置</mu-button>
						</div>
					</div>
				</div>
			</div>
		</mu-slide-right-transition>
		<div class="addExamine">
			<mu-container class="button-wrapper">
				<mu-flex justify-content="center" align-items="center">
					<mu-button round color="primary" to="sgcf/addpunish">
						<mu-icon left value="add"></mu-icon>添加处罚记录</mu-button>
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
				}
			}
		},
		methods: {
			clear() {
				this.$refs.form.clear();
				this.form = {
					select_name: '',
					select_node: '',
					select_area: '',
					date: '',
				};
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import '../../styles/main.less';
	.headerFixed {
		position: fixed;
		top: 0;
		z-index: 999;
		.w(375);
	}
	
	.content {
		.margin-top(56);
		.title {
			position: fixed;
			.top(56);
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
								.fs(16);
								color: #666;
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
	
	.addExamine {
		.w(375);
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
		.top(56);
		right: 0;
		.w(300);
		.h(611);
		background: #fff;
		border: 1px solid #ccc;
		.searchContent {
			.padding(10, 10, 10, 10);
			ul {
				width: 100%;
				.margin-top(10);
				li {
					.margin-bottom(10);
					border-bottom: 1px dashed rgba(0, 0, 0, .12);
					.h(64);
					position: relative;
					span {
						position: absolute;
						.left(7);
						.top(17);
					}
					.selsct {
						position: absolute;
						.top(6);
						right: 0;
						.w(195);
						.h(64);
					}
				}
				.punish_time {
					.mu-input {
						position: absolute;
						.top(15);
						.margin-right(10);
						right: 0;
						.w(170);
						border-bottom: 1px solid rgba(0, 0, 0, .12);
					}
				}
			}
			.searchBox_btn {
				width: 100%;
				position: absolute;
				.bottom(10);
				left: 0;
				.btn-left {
					.margin-left(30);
				}
				.btn-right {
					.margin-right(30);
				}
			}
		}
	}
</style>
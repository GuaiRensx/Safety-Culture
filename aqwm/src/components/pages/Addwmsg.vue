<template>
	<div class="addwmsg">
		<div class="header clearfix">
			<div class="header_left fl">
				<mu-button icon slot="left" @click="backWmsg()">
					<mu-icon size="36" value="chevron_left"></mu-icon>
				</mu-button>
			</div>
			<div class="header_right fl">
				新增检查
			</div>
		</div>
		<!--检查项-->
		<div class="check_item">
			<div class="form-check_item">
				<mu-form :model="form" class="mu-demo-form" label-position="left" label-width="100">
					<ul>
						<li>
							<div class="title">选择检查项目</div>
						</li>
						<li class="punish_time">
							<div class="inner clearfix">
								<span class="fl">检查时间</span>
								<input class="fl" type="date" name="" id="" value="" v-model="form.date" />
							</div>
						</li>
						<li class=" punish_num">
							<div class="inner clearfix">
								<span class="fl">项目编号</span>
								<select class="fl" v-model="form.select_num" prop="punish_state" style="appearance: none;
						-webkit-appearance: none;">
									<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
								</select>
							</div>
						</li>
						<li class=" punish_name">
							<div class="inner clearfix">
								<span class="fl">项目名称</span>
								<div id="" @click="isShow1=!isShow1">
									<input class="fl" id="currentXmmc" type="text" placeholder="输入项目编号或名称查询" readonly="readonly">
									<div class="dot clearfix">
										<i></i>
										<p></p>
										<i></i>
									</div>
								</div>
							</div>
						</li>
						<li class=" punish_node">
							<div class="inner clearfix">
								<span class="fl">施工节点</span>
								<select class="fl" v-model="form.select_node" prop="punish_state" style="appearance: none;
						-webkit-appearance: none;">
									<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
								</select>
							</div>
						</li>
						<li class="punish_area">
							<div class="inner clearfix">
								<span class="fl">期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区</span>
								<select class="fl" v-model="form.select_area" prop="punish_area" style="appearance: none;
						-webkit-appearance: none;">
									<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
								</select>
							</div>
						</li>
						<li>
							<div class="title">选择检查点</div>
						</li>
						<li>
							<div class="inner clearfix">
								<div id="" @click="isShow2=!isShow2">
									<span class="fl">检查分项</span>
									<input class="fl" id="currentXmmc" type="text" placeholder="请选择" readonly="readonly">
									<div class="dot clearfix">
										<i></i>
										<p></p>
										<i></i>
									</div>
								</div>
							</div>
						</li>
						<!--<li>
							<div class="title">检验批基础数据</div>
						</li>
						<li class="">
							<div class="inner clearfix">
								<span class="fl">检验批部位</span>
								<input class="fl" id="currentXmmc" type="text" placeholder="请输入">
							</div>
						</li>
						<li class=" ">
							<div class="inner clearfix">
								<span class="fl">工程常用词</span>
								<input class="fl" id="currentXmmc" type="text" placeholder="" readonly="readonly">
							</div>
						</li>
						<li class=" punish_jyprl">
							<div class="inner clearfix">
								<span class="fl">检验批容量</span>
								<input class="fl" id="currentXmmc" type="text" placeholder="请输入">
								<select class="fl" filterable v-model="form.select_jyprl" prop="punish_state">
									<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
								</select>
							</div>
						</li>-->
						<!--<li>
							<div class="title">工程施工图
								<div class="show_gallery">
									从图库选择
								</div>
							</div>
						</li>
						<li class=" punish_pic">
							<div class="pic clearfix">
								<div class="fl">
									<mu-icon value="clear" color="#fff"></mu-icon>
									<img src="../../assets/demo.jpg" />
								</div>
								<div class="fl">
									<mu-icon value="clear" color="#fff"></mu-icon>
									<img src="../../assets/demo.jpg" />
								</div>
								<div class="fl addPic">
									<mu-icon size="30" value="add" color="#999"></mu-icon>
									<p>本地上传</p>
								</div>
							</div>
						</li>-->
					</ul>
				</mu-form>
			</div>
		</div>
		<div class="showXMname" v-show="isShow1">
			<div class="set_project">
				<div class="set_title">
					<i class="material-icons" @click="isShow1=false">close</i>
					<span>选择检查项目</span>
				</div>
				<div class="searchbar">
					<div class="searchInput">
						<i class="material-icons findname">search</i>
						<input type="text" ref="input1" @keyup="showClearbtn" placeholder="输入项目编号或名称查询" id="search-input">
						<i class="material-icons clearInput" v-show="showClear" @click="clearInput">close</i>
					</div>
				</div>
				<ul class="project_list">
					<li v-for="(n,index) in 30" :key="index">
						<span>ZN010010001|总承包珠江温泉项目_广州</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="showFX" v-show="isShow2">
			<div class="set_project">
				<div class="set_title">
					<i class="material-icons" @click="isShow2=false">close</i>
					<span>选择检查分项</span>
				</div>
				<div class="tab_content">
					<ul class="tabs clearfix">
						<li v-for="(tab,index) in tabsName">
							<div class="tab-link" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">{{tab.name}}</div>
						</li>
					</ul>
					<div class="cards">
						<div class="tab-card" style="display: block;">
							<ul class="clearfix tab-card_content">
								<li>
									<div class="clearfix" @click="">
										<span>主体结构</span>
										<mu-icon value="done" color="blue" size="24"></mu-icon>
									</div>
								</li>
								<li>
									<div class="clearfix">
										<span>地基与基础</span>
										<mu-icon value="done" color="blue" size="24"></mu-icon>
									</div>
								</li>
							</ul>
						</div>
						<div class="tab-card">
							<ul class="clearfix tab-card_content">
								<li>
									<div class="clearfix">
										<span>砌体结构</span>
										<mu-icon value="done" color="blue" size="24"></mu-icon>
									</div>
								</li>
								<li>
									<div class="clearfix">
										<span>钢结构</span>
										<mu-icon value="done" color="blue" size="24"></mu-icon>
									</div>
								</li>
								<li>
									<div class="clearfix">
										<span>混泥土结构</span>
										<mu-icon value="done" color="blue" size="24"></mu-icon>
									</div>
								</li>
							</ul>
						</div>
						<div class="tab-card">
							<ul class="clearfix tab-card_content">
								<li>
									<div class="clearfix">
										<span>石砌体</span>
										<mu-icon value="done" color="blue" size="24"></mu-icon>
									</div>
								</li>
								<li>
									<div class="clearfix">
										<span>填充墙砌体</span>
										<mu-icon value="done" color="blue" size="24"></mu-icon>
									</div>
								</li>
								<li>
									<div class="clearfix">
										<span>混凝土小型空心砌块砌体</span>
										<mu-icon value="done" color="blue" size="24"></mu-icon>
									</div>
								</li>
								<li>
									<div class="clearfix">
										<span>配筋砌体</span>
										<mu-icon value="done" color="blue" size="24"></mu-icon>
									</div>
								</li>
								<li>
									<div class="clearfix">
										<span>砖砌体</span>
										<mu-icon value="done" color="blue" size="24"></mu-icon>
									</div>
								</li>
							</ul>
						</div>
						<div class="tab-card">
							<ul class="clearfix tab-card_content">
								<li>
									<div class="clearfix">
										<span>石砌体质量检验记录</span>
										<mu-icon value="done" color="blue" size="24"></mu-icon>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="submit_btn">
			<button>确认并开始检查</button>
		</div>
	</div>
</template>

<script>
	import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
	import Vue from 'vue';
	import Loading from 'muse-ui-loading';
	Vue.use(Loading);
	export default {
		name: 'Addexamine',
		data() {
			return {
				msg: '添加检查记录',
				tabsName: [{
						name: "分部工程",
						isActive: true
					}, {
						name: "子分部工程",
						isActive: false
					}, {
						name: "分项工程",
						isActive: false
					},
					{
						name: "检查记录",
						isActive: false
					}
				],
				active: false,
				isShow1: false,
				isShow2: false,
				showClear: false,
				istrue: 0,
				items: [{
						name: '分部工程'
					},
					{
						name: '子分部工程'
					},
					{
						name: '分项工程'
					},
					{
						name: '检查记录'
					}
				],
				options: [
					'请选择', '段', 'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Z111213213',
					'Option 5', 'Option 6', 'Option 7', 'Option 8',
					'Option 9', 'Option 10'
				],
				form: {
					select_num: 'Z111213213',
					select_name: '请选择',
					select_node: '',
					select_area: '',
					select_jyprl: '段',
					date: '',
				},
			}
		},
		methods: {
			//选项卡切换
			tabsSwitch: function(tabIndex) {

				var tabCardCollection = document.querySelectorAll(".tab-card"),
					len = tabCardCollection.length;

				for(var i = 0; i < len; i++) {
					tabCardCollection[i].style.display = "none";
					this.tabsName[i].isActive = false;
				}
				this.tabsName[tabIndex].isActive = true;
				tabCardCollection[tabIndex].style.display = "block";
			},
			tab(index) {
				this.curId = index;
				console.log(this.curId)
			},
			//返回上一页
			backWmsg() {
				var self = this;
				const loading = self.$loading({
					overlayColor: 'hsla(0,0%,100%,.9)',
					text: '正在跳转'
				});
				setTimeout(() => {
					loading.close();
				}, 1000)
				this.$options.methods.backAqscdrop.bind(this)();
			},
			backAqscdrop() {
				setTimeout(() => {
					this.$router.push({
						name: "Wmsg"
					})
				}, 1000)
			},
			showClearbtn() {
				console.log(this.$refs.input1.value)
				if(this.$refs.input1.value != '') {
					this.showClear = true;
				} else {
					this.showClear = false;
				}

			},
			clearInput() {
				this.$refs.input1.value = "";
			}
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
		background: #03a9f4;
		.header_right {
			.lh(45);
			.fs(16);
			.padding-left(95);
			font-weight: bold;
		}
	}
	
	.title {
		position: relative;
		color: #212121;
		font-weight: bold;
		background: #f5f5f5;
		border-bottom: 1px solid #e8e8e8;
		.fs(14);
		.padding(12, 15, 8, 15);
		.show_gallery {
			.w(94);
			.fs(14);
			.h(30);
			.lh(30);
			text-align: center;
			.padding(0, 6, 0, 6);
			color: #03a9f4;
			border: 1px solid #03a9f4;
			position: absolute;
			.top(7);
			.left(255);
		}
	}
	
	.check_item {
		.margin-top(45);
		.form-check_item {
			background: #fff;
			ul {
				.margin-bottom(50);
				width: 100%;
				li {
					.inner {
						.h(44);
						.padding-left(15);
						position: relative;
						.lh(44);
					}
					span {
						color: #666666;
						.margin-right(10);
					}
					select {
						border: none;
						.w(260);
						.h(44);
						.margin-left(5);
						.fs(16);
						color: #333333;
						background: #fff;
					}
					input {
						border: none;
						.top(10);
						right: 0;
						.w(260);
						.h(44);
						.margin-left(5);
						.fs(16);
						color: #333333;
					}
					.dot {
						position: absolute;
						.left(330);
						.top(20);
						text-align: right;
						i {
							display: block;
							background: #e4e4e4;
							width: 4px;
							height: 4px;
							border-radius: 6px;
							float: left;
							margin-top: 1px;
						}
						p {
							width: 6px;
							height: 6px;
							background: #AEAEAE;
							border-radius: 6px;
							margin: 0 2px;
							float: left;
						}
					}
				}
				.punish_time {
					input {
						margin: 0;
						padding: 0;
						.margin-left(5);
						.fs(16);
						color: #333333;
						background: #fff;
						.w(260);
						.h(44);
						border-radius: 5px;
						border-color: #E9E9E9;
					}
				}
				.punish_jyprl {
					position: relative;
					select {
						position: absolute;
						.w(100);
						top: 0;
						.left(260);
					}
				}
				.punish_pic {
					.padding(10, 10, 10, 10);
					.pic {
						.margin(0, -2.5, 0, -2.5);
						div {
							position: relative;
							.w(120);
							.h(86);
							.padding(2.5, 2.5, 2.5, 2.5);
							i {
								display: block;
								.w(30);
								.h(30);
								position: absolute;
								/*top: 0;
								right: 0;*/
								color: #fff;
								right: 0.125rem;
								top: 0.125rem;
								text-align: center;
								background: rgba(0, 0, 0, 0.4);
								border-bottom-left-radius: 1rem;
							}
							img {
								width: 100%;
								height: 100%;
							}
						}
						.addPic {
							border: 1px solid #ccc;
							position: relative;
							i {
								.w(30);
								.h(30);
								font-weight: bold;
								border-bottom-left-radius: 0;
								background: #fff;
								color: #9999;
								position: absolute;
								.top(8);
								.left(42);
							}
							p {
								position: absolute;
								.top(40);
								.left(24);
								color: #999;
							}
						}
					}
				}
			}
		}
	}
	
	.submit_btn {
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
	
	.showXMname {
		z-index: 1111;
		overflow: scroll;
		.w(375);
		position: fixed;
		.top(48);
		left: 0;
		.h(619);
		background: rgba(0, 0, 0, 0.5);
		.set_project {
			background: #fff;
			height: 70vh;
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			.set_title {
				.h(45);
				.lh(45);
				position: relative;
				border-bottom: 1px solid #e8e8e8;
				i {
					position: absolute;
					.top(9);
					.left(7);
					color: #999;
					.fs(26);
				}
				span {
					position: absolute;
					top: 0;
					.left(130);
				}
			}
			.searchbar {
				z-index: 9999;
				display: -webkit-box;
				-webkit-box-pack: center;
				-webkit-box-align: center;
				.h(44);
				overflow: hidden;
				width: 100%;
				background-color: #ebeced;
				color: #9e9e9e;
				-webkit-backface-visibility: hidden;
				backface-visibility: hidden;
				.searchInput {
					.margin(0, 10, 0, 10);
					.padding-left(10);
					.h(28);
					background-color: #ffffff;
					.border-radius(5);
					position: relative;
					display: -webkit-box;
					-webkit-box-flex: 1;
					position: relative;
					.findname {
						position: absolute;
						.top(3);
						.left(5);
					}
					input {
						.fs(14);
						position: absolute;
						.w(280);
						.top(5);
						.left(37);
					}
					.clearInput {
						position: absolute;
						.top(5);
						.right(5);
						border-radius: 50%;
						background: #999;
						color: #fff;
						.fs(18);
					}
				}
			}
			.project_list {
				.padding-left(15);
				.fs(14);
				overflow: scroll;
				position: absolute;
				.top(90);
				left: 0;
				right: 0;
				bottom: 0;
				.padding-bottom(4);
				li {
					.lh(24);
					border-bottom: 1px solid #e8e8e8;
					.padding(10, 0, 10, 0);
					align-items: center;
				}
			}
		}
	}
	
	.showFX {
		z-index: 1111;
		overflow: scroll;
		.w(375);
		position: fixed;
		.top(48);
		left: 0;
		.h(619);
		background: rgba(0, 0, 0, 0.5);
		.set_project {
			background: #fff;
			height: 70vh;
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			.set_title {
				.h(45);
				.lh(45);
				position: relative;
				border-bottom: 1px solid #e8e8e8;
				i {
					position: absolute;
					.top(9);
					.left(7);
					color: #999;
					.fs(26);
				}
				span {
					position: absolute;
					top: 0;
					.left(130);
				}
			}
			.tab_content {
				.active {
					.h(44);
					border-bottom: 2px solid #039be5;
				}
				ul {
					border-bottom: 1px solid #ccc;
					li {
						.h(44);
						.lh(44);
						color: rgb(222, 222, 222);
						width: 25%;
						text-align: center;
						float: left;
						.fs(14);
						.tab-link {
							display: block;
							width: 100%;
							height: 100%;
						}
					}
				}
				.cards {
					float: left;
					.w(375);
					.tab-card {
						width: 100%;
						height: 100%;
						display: none;
						.tab-card_content {
							width: 100%;
							border: none;
							li {
								width: 100%;
								div {
									.w(365);
									.margin-left(10);
									border-bottom: 1px solid #e8e8e8;
									position: relative;
									span {
										float: left;
										color: #212121;
										.fs(14);
									}
									i {
										position: absolute;
										.top(5);
										.right(20);
										font-weight: bold;
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
<template>
	<div class="addpunish">
		<div class="header clearfix">
			<div class="header_left fl">
				<mu-button icon slot="left" @click="backAqsc()">
					<mu-icon size="36" value="chevron_left"></mu-icon>
				</mu-button>
			</div>
			<div class="header_right fl">
				新增处罚
			</div>
		</div>
		<!--检查项-->
		<div class="check_item">
			<div class="form-check_item">
				<mu-form :model="form" class="mu-demo-form" label-position="left" label-width="100">
					<ul>
						<li>
							<div class="title">选择处罚项目</div>
						</li>
						<li class="punish_time">
							<div class="inner clearfix">
								<span class="fl">处罚时间</span>
								<input class="fl" type="date" name="" id="" value="" v-model="form.date" />
							</div>
						</li>
						<li class=" punish_num">
							<div class="inner clearfix">
								<span class="fl">项目编号</span>
								<select class="fl" v-model="form.select_num" prop="punish_num" style="appearance: none;
						-webkit-appearance: none;">
									<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
								</select>
							</div>
						</li>
						<li class=" punish_name">
							<div class="inner clearfix">
								<span class="fl">项目名称</span>
								<div class="clearfix" @click="isShow1=!isShow1">
									<input class="fl" id="currentXmmc" type="text" placeholder="输入项目编号或名称查询" readonly="readonly">
									<div class="dot clearfix"><i></i>
										<p></p><i></i></div>
								</div>
							</div>
						</li>
						<li class=" punish_node">
							<div class="inner clearfix">
								<span class="fl">施工节点</span>
								<select class="fl" v-model="form.select_node" prop="punish_node" style="appearance: none;
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
						<li class=" punish_item">
							<div class="inner clearfix">
								<span class="fl">处罚条款</span>
								<select class="fl" v-model="form.select_item" prop="punish_item" style="appearance: none;
						-webkit-appearance: none;">
									<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
								</select>
							</div>
						</li>
						<li class=" punish_unit">
							<div class="inner clearfix">
								<span class="fl">被处罚单位</span>
								<select class="fl" v-model="form.select_unit" prop="punish_unit" style="appearance: none;
						-webkit-appearance: none;">
									<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
								</select>
							</div>
						</li>
						<li class=" punish_pep">
							<div class="inner clearfix">
								<span class="fl">被处罚人</span>
								<select class="fl" v-model="form.select_pep" prop="punish_pep" style="appearance: none;
						-webkit-appearance: none;">
									<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
								</select>
							</div>
						</li>
						<li @click="showHistory=!showHistory">
							<div class="title">历史处罚回顾
								<mu-icon size="30" :value="!showHistory?'keyboard_arrow_down':'keyboard_arrow_up'" color="#212121"></mu-icon>
							</div>
						</li>
						<div class="lscf" v-show="showHistory">
							<ul>
								<li class=" punish_source">
									<div class="inner clearfix">
										<span class="fl">处罚来源</span>
										<select class="fl" v-model="form.oldselect_source" prop="punish_source" style="appearance: none;
						-webkit-appearance: none;">
											<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
										</select>
									</div>
								</li>
								<li class="oldPunish_time">
									<div class="inner clearfix">
										<span class="fl">处罚时间</span>
										<input class="fl" type="text" name="" id="" value="" v-model="form.oldDate" />
									</div>
								</li>
								<li class=" punish_nature">
									<div class="inner clearfix">
										<span class="fl">处罚性质</span>
										<select class="fl" v-model="form.oldselect_nature" prop="punish_nature" style="appearance: none;
						-webkit-appearance: none;">
											<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
										</select>
									</div>
								</li>
								<li class=" punish_sum">
									<div class="inner clearfix">
										<span class="fl">处罚金额</span>
										<select class="fl" v-model="form.oldselect_sum" prop="punish_sum" style="appearance: none;
						-webkit-appearance: none;">
											<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
										</select>
									</div>
								</li>
								<li class="mianze">
									<div class="inner clearfix">
										<span class="fl">是否免责</span>
										<div class="free fl">
											<mu-radio v-model="form.Radio" value="是" label="是"></mu-radio>
											<mu-radio v-model="form.Radio" value="否" label="否"></mu-radio>
										</div>
									</div>
								</li>
								<li class="">
									<div class="inner clearfix">
										<span class="fl">免责原因</span>
										<input class="fl" v-model="form.oldmzyy" id="currentXmmc" type="text">
									</div>
								</li>
								<li class="">
									<div class="inner clearfix">
										<span class="fl">照片依据</span>
										<input class="fl" v-model="form.oldzpyj" id="" type="text">
									</div>
								</li>
							</ul>
						</div>
						<li>
							<div class="title" @click="showNow=!showNow">本次处罚情况
								<mu-icon size="30" :value="!showNow?'keyboard_arrow_down':'keyboard_arrow_up'" color="#212121"></mu-icon>
							</div>
						</li>
						<div class="bccf" v-show="showNow">
							<ul>
								<li class=" punish_source">
									<div class="inner clearfix">
										<span class="fl">处罚来源</span>
										<select class="fl" v-model="form.nowSelect_source" prop="punish_source" style="appearance: none;
						-webkit-appearance: none;">
											<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
										</select>
									</div>
								</li>
								<li class=" punish_nature">
									<div class="inner clearfix">
										<span class="fl">处罚性质</span>
										<select class="fl" v-model="form.nowSelect_nature" prop="punish_nature" style="appearance: none;
						-webkit-appearance: none;">
											<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
										</select>
									</div>
								</li>
								<li class=" punish_sum">
									<div class="inner clearfix">
										<span class="fl">处罚金额</span>
										<select class="fl" v-model="form.nowSelect_sum" prop="punish_sum" style="appearance: none;
						-webkit-appearance: none;">
											<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
										</select>
									</div>
								</li>
								<li class="mianze">
									<div class="inner clearfix">
										<span class="fl">是否免责</span>
										<div class="free fl">
											<mu-radio v-model="form.nowRadio" value="是" label="是"></mu-radio>
											<mu-radio v-model="form.nowRadio" value="否" label="否"></mu-radio>
										</div>
									</div>
								</li>
								<li class="">
									<div class="inner clearfix">
										<span class="fl">免责原因</span>
										<input class="fl" v-model="form.nowmzyy" id="currentXmmc" type="text">
									</div>
								</li>
								<li class="zpyj">
									<div class="inner clearfix">
										<span class="fl">照片依据</span>
										<input class="fl" v-model="form.nowzpyj" id="" type="text">
										 <mu-button class="uploadBtn" textColor="#666666" color="#fff">上传</mu-button>
									</div>
								</li>
							</ul>
						</div>
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
		<div class="submit_btn">
			<!--<mu-button full-width style="height: 100%;" color="#1B8EE9">确认并开始验收</mu-button>-->
			<button>提交</button>
		</div>
	</div>
</template>

<script>
	import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
	import Vue from 'vue';
	import Loading from 'muse-ui-loading';
	Vue.use(Loading);
	export default {
		name: 'Addpunish',
		data() {
			return {
				msg: '添加检查记录',
				isShow1: false,
				showHistory: false,
				showNow:false,
				showClear:false,
				options: [
					'请选择', '段', 'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Z111213213',
					'Option 5', 'Option 6', 'Option 7', 'Option 8',
					'Option 9', 'Option 10', '施工检查', '教育', '2018/12/12', '1000'
				],
				form: {
					select_num: 'Z111213213',
					select_name: '请选择',
					select_node: '',
					select_area: '',
					select_jyprl: '段',
					select_item: '',
					select_pep: '',
					select_unit: '',
					oldselect_source: '施工检查',
					oldselect_nature: '教育',
					oldselect_sum: '1000',
					oldmzyy: '无',
					oldDate: '2018/12/12',
					oldzpyj: '照片依据.jpg',
					nowSelect_source: '施工检查',
					nowSelect_nature: '教育',
					nowSelect_sum: '1000',
					nowmzyy:'',
					nowRadio:'',
					date: '',
					Radio: '否',
				},
			}
		},
		methods: {
			//返回上一页
			backAqsc() {
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
						name: "Sgcf"
					})
				}, 1000)
			},
			showClearbtn(){
				console.log(this.$refs.input1.value)
				if(this.$refs.input1.value!=''){
					this.showClear=true;
				}else{
					this.showClear=false;
				}
				
			},
			clearInput(){
				this.$refs.input1.value="";
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
		i {
			position: absolute;
			.right(5);
			.top(5);
		}
	}
	
	.check_item {
		.margin-top(45);
		.form-check_item {
			background: #fff;
			.padding-bottom(150);
			ul {
				
				width: 100%;
				li {
					.inner {
						.h(44);
						.padding-left(15);
						position: relative;
						.lh(44);
					}
					span {
						.w(80);
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
						background:#fff;
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
				.mianze {
					position: relative;
					.free {
						position: absolute;
						.top(7);
						right: 0;
						.w(250);
						.h(24);
					}
				}
				.zpyj{
					position: relative;
					.uploadBtn{
						position: absolute;
						.top(6);
						.right(1);
						box-shadow: none;
						border-left: 1px dashed #ccc;
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
		}
	}
</style>
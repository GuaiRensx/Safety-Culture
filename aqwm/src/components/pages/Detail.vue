<template>
	<div class="detail">
		<div class="header clearfix">
			<div class="header_left fl">
				<mu-button icon slot="left" @click="back()">
					<mu-icon size="36" value="chevron_left"></mu-icon>
				</mu-button>
			</div>
			<div class="header_center fl">
				石材强度等级
			</div>
		</div>
		<div class="detail_content">

			<div class="first_content">
				<mu-form :model="form" class="mu-demo-form" label-position="left" label-width="100">
					<ul>
						<li>
							<div class="dt_inner clearfix">
								<div class="dt_title">
									<span>设计要求</span>
								</div>
								<div class="dt_input">
									<input type="text" placeholder="选填" id="" value="" :model="form.yaoqiu" />
								</div>
							</div>
						</li>
						<li>
							<div class="clearfix dt_inner">
								<div class="dt_title">
									<span>检查数量</span>
								</div>
								<div class="dt_input">
									<input type="number" placeholder="输入检查数量" id="" value="" :model="form.shuliang" />
								</div>
							</div>
						</li>
					</ul>
				</mu-form>
			</div>
			<div class="second_content">
				<mu-form :model="form" class="mu-demo-form" label-position="left" label-width="100">
					<ul>
						<li>
							<div class="dt_inner clearfix">
								<div class="dt_title fl">
									<span>设计要求</span>
								</div>
							</div>
						</li>
						<div :class="show1?'standardShow':'standard'">
							<h4><strong>允许偏差值或允许值</strong></h4>
							<p>设计要求</p>
							<br />
							<h4><strong>检查数量</strong></h4>
							<p>同一产地的同类石材抽检不应小于一组</p>
							<br />
							<h4><strong>检查方法</strong></h4>
							<p>料石检查产品质量证明书，石材试验报告</p>
							<img src="../../assets/1440x900_2a3430e9b341aaf.jpg" />
						</div>
						<div class="hidebtn" @click="show1=!show1">
							<span v-html="!show1?'展开':'收起'"></span>
							<mu-icon :value="show1?'arrow_drop_down':'arrow_drop_up'"></mu-icon>
						</div>
					</ul>
				</mu-form>
			</div>

			<div class="third_content">
				<mu-form :model="form" class="mu-demo-form" label-position="left" label-width="100">
					<ul>
						<li>
							<div class="dt_inner clearfix">
								<div class="dt_title">
									<span>是否合格</span>
								</div>
								<div class="radio">
									<mu-radio v-model="form.hege" value="是" label="是"></mu-radio>
									<mu-radio v-model="form.hege" value="否" label="否"></mu-radio>
								</div>
							</div>
						</li>
						<li>
							<div class="dt_inner clearfix">
								<div class="dt_title">
									<span>是否整改</span>
								</div>
								<div class="radio">
									<mu-radio v-model="form.zhenggai" value="是" label="是"></mu-radio>
									<mu-radio v-model="form.zhenggai" value="否" label="否"></mu-radio>
								</div>
							</div>
						</li>
						<li>
							<div class="dt_inner clearfix">
								<div class="dt_title">
									<span>整改人</span>
								</div>
								<div class="dt_select">
									<select class="fl" v-model="form.select_zgren" prop="punish_state" style="appearance: none;-webkit-appearance: none;">
										<option v-for="city,index in citys" :key="city" :label="city" :value="city"></option>
									</select>
								</div>
							</div>
						</li>
						<li>
							<div class="dt_inner clearfix">
								<div class="dt_title">
									<span>整改内容</span>
								</div>
								<div class="dt_text">
									<textarea v-model="text1" placeholder="输入整改内容" id="zhenggaineirong"></textarea>
								</div>
							</div>
						</li>
						<li>
							<div class="dt_inner clearfix">
								<div class="dt_longTitle">
									整改结束日期
								</div>
								<div class="dt_input">
									<input type="date" v-model="form.date" name="" id="" value="" />
								</div>
							</div>
						</li>
					</ul>
				</mu-form>
			</div>

			<div class="four_content">
				<mu-form :model="form" class="mu-demo-form" label-position="left" label-width="100">
					<ul>
						<li>
							<div class="dt_inner clearfix">
								<div class="dt_title">
									<span>处罚条款</span>
								</div>
								<div class="dt_select">
									<select class="fl" v-model="form.select_cftk" prop="punish_cftk" style="appearance: none;-webkit-appearance: none;">
										<option v-for="city,index in citys" :key="city" :label="city" :value="city"></option>
									</select>
								</div>
							</div>
						</li>
						<li>
							<div class="dt_inner clearfix">
								<div class="dt_title">
									<span>被处罚单位</span>
								</div>
								<div class="dt_select">
									<select class="fl" v-model="form.select_bcfdw" prop="punish_bcfdw" style="appearance: none;-webkit-appearance: none;">
										<option v-for="city,index in citys" :key="city" :label="city" :value="city"></option>
									</select>
								</div>
							</div>
						</li>
						<li>
							<div class="dt_inner clearfix">
								<div class="dt_title">
									<span>处罚性质</span>
								</div>
								<div class="dt_select">
									<select class="fl" v-model="form.select_cfxz" prop="punish_cfxz" style="appearance: none;-webkit-appearance: none;">
										<option v-for="city,index in citys" :key="city" :label="city" :value="city"></option>
									</select>
								</div>
							</div>
						</li>
						<li>
							<div class="dt_inner clearfix">
								<div class="dt_title">
									<span>处罚金额</span>
								</div>
								<div class="dt_select">
									<select class="fl" v-model="form.select_cfje" prop="punish_cfje" style="appearance: none;-webkit-appearance: none;">
										<option v-for="city,index in citys" :key="city" :label="city" :value="city"></option>
									</select>
								</div>
							</div>
						</li>
						<li>
							<div class="dt_inner clearfix">
								<div class="dt_title">
									<span>被处罚人</span>
								</div>
								<div class="dt_select">
									<select class="fl" v-model="form.select_bcfren" prop="punish_bcfren" style="appearance: none;-webkit-appearance: none;">
										<option v-for="city,index in citys" :key="city" :label="city" :value="city"></option>
									</select>
								</div>
							</div>
						</li>
					</ul>
				</mu-form>
			</div>
			<div class="five">
				<mu-form :model="form" class="mu-demo-form" label-position="left" label-width="100">
				<ul>
					<li>
						<div class="dt_inner clearfix">
							<div class="dt_longTitle">
								验收情况说明
							</div>
							<div class="dt_text">
								<textarea v-model="text2" placeholder="输入验收请款说明" id="zhenggaineirong"></textarea>
							</div>
						</div>
					</li>
				</ul>
				</mu-form>
			</div>
		</div>
		<div class="queren" style="display: none;">
			<button>确认</button>
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
				msg: '检查详情',
				show1: false,
				citys: [
					'我是', '请选择','全部', 'American Samoa', 'Arizona',
					'Arkansas', 'California', 'Colorado', 'Connecticut',
					'Delaware', 'District of Columbia', 'Federated States of Micronesia',
					'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
					'Illinois'
				],
				form: {
					date: '',
					hege: '',
					zhenggai: '',
					text1:'',
					select_cftk:'请选择',
					select_bcfdw:'请选择',
					select_cfxz:'请选择',
					select_cfje:'请选择',
					select_bcfren:'请选择',
					
				}
			}
		},
		methods: {
			//返回上一页
			back() {
				var self = this;
				const loading = self.$loading({
					overlayColor: 'hsla(0,0%,100%,.9)',
					text: '正在跳转'
				});
				setTimeout(() => {
					loading.close();
				}, 1000)
				this.$options.methods.backdrop.bind(this)();
			},
			backdrop() {
				setTimeout(() => {
					this.$router.push({
						name: "Ysjl"
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
			.padding-left(95);
			font-weight: bold;
		}
	}
	
	.detail_content {
		.margin-top(45);
		.padding-bottom(50);
		ul {
			background:#f5f5f5;
			.padding-top(10);
			li {
				background: #fff;
				.padding-left(15);
				.dt_inner {
					position: relative;
					.mnh(44);
					.lh(44);
					color: #212121;
					.dt_title {
						display: block;
						.lh(44);
						.mnw(75);
						float: left;
						.padding-right(10);
						color: #666;
						white-space: normal;
						word-break: break-all;
						word-wrap: break-word;
					}
					.dt_longTitle {
						float: left;
						.mxw(75);
						.lh(22);
						color: #666;
						white-space: normal;
						word-break: break-all;
						word-wrap: break-word;
					}
					.dt_input {
						float: right;
						width: 70%;
						.padding-right(15);
						.margin-left(5);
						input {
							width: 100%;
							background: #fff;
						}
					}
					.dt_select {
						float: right;
						width: 70%;
						.padding-right(15);
						.margin-left(5);
						select {
							border: none;
							background: #fff;
							width: 100%;
						}
					}
					.dt_text {
						float: right;
						.h(88);
						.lh(22);
						width: 70%;
						.padding-right(15);
						.margin-left(5);
						textarea {
							border: none;
							width: 100%;
							height: 100%;
						}
					}
					.radio {
						position: absolute;
						.top(7);
						.left(105);
						.h(24);
					}
				}
			}
		}
		.second_content {
			.standard {
				height: 190px;
				border-bottom: 1px solid #E8E8E8;
				overflow: scroll;
				.padding(10, 15, 10, 15);
				background: #fff;
				h4 {
					.fs(14);
				}
				p {
					.fs(14);
					color: #333;
				}
				img {
					max-width: 100%;
					margin: 10px auto;
				}
			}
			.standardShow {
				border-bottom: 1px solid #E8E8E8;
				.padding(10, 15, 10, 15);
				background: #fff;
				h4 {
					.fs(14);
				}
				p {
					.fs(14);
					color: #333;
				}
				img {
					max-width: 100%;
					margin: 10px auto;
				}
			}
			.hidebtn {
				background: #fff;
				.h(40);
				.lh(40);
				color: #1B8EE9;
				.fs(14);
				position: relative;
				text-align: center;
				i {
					position: absolute;
					.top(8);
					.left(198);
				}
			}
		}
		.five{
			ul {
				padding: none;
			}
		}
	}
	
	.queren {
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
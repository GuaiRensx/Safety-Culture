<template>
	<div class="addexamine">
		<div class="header headerFixed">
			<mu-appbar style="width: 100%;" color="primary">
				<mu-button icon slot="left" to="/home/aqsc">
					<mu-icon size="36" value="chevron_left"></mu-icon>
				</mu-button>
				添加检查记录
			</mu-appbar>
		</div>
		<!--检查项-->
		<div class="check_item">
			<div class="check_item_title">
				<span>新增检查记录</span>
			</div>
			<div class="form-check_item">
				<mu-form :model="form" class="mu-demo-form" label-position="left" label-width="100">
					<ul>
						<li class="punish_time clearfix">
							<span class="fl">检查时间：</span>
							<!--<mu-date-input v-model="form.date" class="fr" type="dateTime" actions></mu-date-input>-->
							<input type="date" name="" id="" value="" v-model="form.date" />
						</li>
						<li class="clearfix punish_num">
							<span class="fl">项目编号:</span>
							<select filterable v-model="form.select_num" prop="punish_state">
								<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
							</select>
						</li>
						<li class="clearfix punish_name">
							<span class="fl">项目名称：</span>
							<select filterable v-model="form.select_name" prop="punish_state" @change="showEntry">
								<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
							</select>
						</li>
						<li class="clearfix punish_node">
							<span class="fl">施工节点：</span>
							<select filterable v-model="form.select_node" prop="punish_state">
								<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
							</select>
						</li>
						<li class="clearfix punish_state">
							<span class="fl">期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区：</span>
							<select filterable v-model="form.select_area" prop="punish_state">
								<option v-for="option,index in options" :key="option" :label="option" :value="option"></option>
							</select>
						</li>
					</ul>
				</mu-form>
			</div>
		</div>
		<!--选择检查点-->
		<div class="check_entry" v-show="showEntrybox">
			<div class="check_entry_title">
				<span>选择检查点</span>
			</div>
			<div class="form-check_entry">
				<ul class="form-check_entry_first">
					<li v-for="(item,index) in titleList" :key="index">
						<label :for="item.id">
						<input :id="item.id" type="checkbox" @click.stop="checkAll($event,index)" />{{item.title}}
						</label>
						<mu-icon :value="isShow&&index===indexs? 'keyboard_arrow_up' :'keyboard_arrow_down'" size="30" color="blue" @click.stop="showSecond(index)"></mu-icon>
						<div class="form-check_entry_second" v-show="isShow&&index===indexs">
							<ul>
								<li>
									<label v-if="index==0" v-for="(item,indx1) in ajaxData1" :key="indx1">
										<mu-icon value="keyboard_arrow_right" size="30" color="#ccc"></mu-icon>
										<input class="checkItem" type="checkbox" :value="item.value" v-model="checkData1"/>{{item.name}}
									</label>
									<label v-if="index==1" v-for="(item,indx2) in ajaxData2" :key="indx2">
										<mu-icon value="keyboard_arrow_right" size="30" color="#ccc"></mu-icon>
										<input class="checkItem" type="checkbox" :value="item.value" v-model="checkData2"/>{{item.name}}
									</label>
									<label v-if="index==2" v-for="(item,indx3) in ajaxData3" :key="indx3">
										<mu-icon value="keyboard_arrow_right" size="30" color="#ccc"></mu-icon>
										<input class="checkItem" type="checkbox" :value="item.value" v-model="checkData3"/>{{item.name}}
									</label>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Addexamine',
		data() {
			return {
				msg: '添加检查记录',
				isShow: false,
				showEntrybox: false,
				options: [
					'请选择', 'Option 1', 'Option 2', 'Option 3', 'Option 4',
					'Option 5', 'Option 6', 'Option 7', 'Option 8',
					'Option 9', 'Option 10'
				],
				form: {
					select_num: '',
					select_name: '请选择',
					select_node: '',
					select_area: '',
					date: '',
				},
				titleList: [{
						id: 'quan1',
						title: '封闭管理'
					},
					{
						id: 'quan2',
						title: '地面道路及排水设置'
					},
					{
						id: 'quan3',
						title: '材料堆放'
					}
				],
				ajaxData1: [{ // 后台请求过来的数据
					name: '施工主路口临时大门',
					value: 'a'
				}, {
					name: '现场围挡',
					value: 'b'
				}, {
					name: '门卫室',
					value: 'c'
				}, {
					name: '安全生产指示牌',
					value: 'd'
				}],
				ajaxData2: [{ // 后台请求过来的数据
					name: 'pm2.5',
					value: 'a'
				}, {
					name: 'pm2.5',
					value: 'b'
				}, {
					name: 'pm2.5',
					value: 'c'
				}, {
					name: 'pm2.5',
					value: 'd'
				}],
				ajaxData3: [{ // 后台请求过来的数据
					name: 'pm88',
					value: 'a'
				}, {
					name: 'pm88',
					value: 'b'
				}, {
					name: 'pm88',
					value: 'c'
				}, {
					name: 'pm88',
					value: 'd'
				}],
				checkData1: [], // 双向数据绑定的数组
				checkData2: [], // 双向数据绑定的数组
				checkData3: [], // 双向数据绑定的数组
			}
		},
		watch: {
			checkData1: { // 监视双向绑定的数组变化
				handler() {
					if(this.checkData1.length == this.ajaxData1.length) {
						document.querySelector('#quan1').checked = true;
					} else {
						document.querySelector('#quan1').checked = false;
					}
				},
				deep: true
			},
			checkData2: { // 监视双向绑定的数组变化
				handler() {
					if(this.checkData2.length == this.ajaxData2.length) {
						document.querySelector('#quan2').checked = true;
					} else {
						document.querySelector('#quan2').checked = false;
					}
				},
				deep: true
			},
			checkData3: { // 监视双向绑定的数组变化
				handler() {
					if(this.checkData3.length == this.ajaxData3.length) {
						document.querySelector('#quan3').checked = true;
					} else {
						document.querySelector('#quan3').checked = false;
					}
				},
				deep: true
			}
		},
		methods: {
			showSecond(index) {
				//console.log(index);

				if(this.isShow == true && this.indexs != index) {
					this.isShow = false;
				}
				this.isShow = !this.isShow;
				this.indexs = index;
			},
			showEntry() {
				console.log(this.form.select_name)
				if(this.form.select_name != '请选择') {
					this.showEntrybox = true;
				} else {
					this.showEntrybox = false;
				}
			},
			checkAll(e, indx) { // 点击全选事件
				if(indx == 0) {
					if(e.target.checked) {
						this.ajaxData1.forEach((el, i) => {
							// 数组里没有这一个value才push，防止重复push
							if(this.checkData1.indexOf(el.value) == '-1') {
								this.checkData1.push(el.value);
							}
						});
					} else { // 全不选选则清空绑定的数组
						this.checkData1 = [];
					}
				}else if(indx == 1 ){
					if(e.target.checked) {
						this.ajaxData2.forEach((el, i) => {
							// 数组里没有这一个value才push，防止重复push
							if(this.checkData2.indexOf(el.value) == '-1') {
								this.checkData2.push(el.value);
							}
						});
					} else { // 全不选选则清空绑定的数组
						this.checkData2= [];
					}
				}else if(indx == 2){
					if(e.target.checked) {
						this.ajaxData3.forEach((el, i) => {
							// 数组里没有这一个value才push，防止重复push
							if(this.checkData3.indexOf(el.value) == '-1') {
								this.checkData3.push(el.value);
							}
						});
					} else { // 全不选选则清空绑定的数组
						this.checkData3= [];
					}
				}
			}

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
	
	.check_item {
		.margin-top(56);
		.padding(5, 0, 5, 0);
		.check_item_title {
			.h(30);
			.lh(30);
			text-align: center;
			.margin-bottom(5);
		}
		.form-check_item {
			background: #fff;
			.padding(0, 5, 5, 5);
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
						border-radius: 5px;
						border-color: #E9E9E9;
						.top(10);
						right: 0;
						.w(255);
						.h(38);
						.margin-right(5);
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
						.margin-right(5);
						.w(255);
						.h(38);
						border-radius: 5px;
						border-color: #E9E9E9;
					}
				}
			}
		}
	}
	
	.check_entry {
		.padding(5, 0, 5, 0);
		.check_entry_title {
			.h(30);
			.lh(30);
			text-align: center;
			.margin-bottom(5);
		}
		.form-check_entry {
			background: #fff;
			.padding(0, 5, 5, 5)
		}
		.form-check_entry_first {
			li {
				position: relative;
				.lh(30);
				.padding-left(15);
				input {
					display: inline-block;
					.w(15);
					.h(15);
				}
				span {
					display: inline-block;
					.h(30);
					.padding-left(10);
					.lh(30);
				}
				i {
					position: absolute;
					.right(5);
				}
			}
		}
		.form-check_entry_second {
			li {
				position: relative;
				.lh(30);
				.padding-left(25);
				label {
					display: inline-block;
					.w(330);
					input {
						display: inline-block;
						.margin-left(15);
						.margin-right(15);
						.w(15);
						.h(15);
					}
				}
				i {
					position: absolute;
					.left(5);
				}
			}
		}
	}
</style>
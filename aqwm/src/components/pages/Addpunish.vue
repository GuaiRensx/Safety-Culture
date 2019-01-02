<template>
	<div class="addpunish">
		<div class="header headerFixed">
			<mu-appbar style="width: 100%;" color="primary">
				<mu-button icon slot="left" to="/home/aqsc">
					<mu-icon size="36" value="chevron_left"></mu-icon>
				</mu-button>
				添加处罚记录
			</mu-appbar>
		</div>
		<!--处罚项-->
		<div class="check_item">
			<div class="check_item_title">
				<span>新增处罚记录</span>
			</div>
			<div class="form-check_item">
				<mu-form :model="form" class="mu-demo-form" label-position="left" label-width="100">
					<mu-form-item prop="date" label="处罚时间：">
						<mu-date-input v-model="form.date" type="dateTime" actions></mu-date-input>
					</mu-form-item>
					<mu-form-item prop="select_num" label="项目编号">
						<mu-select v-model="form.select_num">
							<mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
						</mu-select>
					</mu-form-item>
					<mu-form-item prop="select_name" label="项目名称">
						<mu-select v-model="form.select_name" @change="showEntry">
							<mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
						</mu-select>
					</mu-form-item>
					<mu-form-item prop="select_node" label="项目节点：">
						<mu-select v-model="form.select_node">
							<mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
						</mu-select>
					</mu-form-item>
					<mu-form-item prop="select_area" label="期       区：">
						<mu-select v-model="form.select_area">
							<mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
						</mu-select>
					</mu-form-item>
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
					<li v-for="(item,index) in titleList" :key="index" @click="showSecond(index)">
						<label for="quan">
						<input id="quan" type="checkbox" @click="checkAll($event)" />{{item.title}}
						</label>
						<mu-icon :value="isShow ? 'keyboard_arrow_up' :'keyboard_arrow_down'" size="30" color="blue"></mu-icon>
						<div class="form-check_entry_second" v-show="isShow&&index===indexs">
							<ul>
								<li>
									<label v-for="item in ajaxData">
										<mu-icon value="keyboard_arrow_right" size="30" color="#ccc"></mu-icon>
										<input class="checkItem" type="checkbox" :value="item.value" v-model="checkData" />{{item.name}}
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
		name: 'Addpunish',
		data() {
			return {
				isShow: false,
				showEntrybox: false,
				options: [
					'请选择', 'Option 1', 'Option 2', 'Option 3', 'Option 4',
					'Option 5', 'Option 6', 'Option 7', 'Option 8',
					'Option 9', 'Option 10'
				],
				form: {
					select_num: '',
					select_name: '',
					select_node: '',
					select_area: '',
					date: '',
				},
				titleList:[
					{
						id:1,
						title:'封闭管理'
					},
										{
						id:2,
						title:'地面道路及排水设置'
					},
					{
						id:3,
						title:'材料堆放'
					}
				],
				ajaxData: [{ // 后台请求过来的数据
					name: '施工主路口临时大门',
					value: 'a'
				}, {
					name: '现场围挡',
					value: 'b'
				}, {
					name: '门卫室',
					value: 'c'
				},{
					name: '安全生产指示牌',
					value: 'd'
				}],
				checkData: [] // 双向数据绑定的数组
			}
		},
		watch: {
			checkData: { // 监视双向绑定的数组变化
				handler() {
					if(this.checkData.length == this.ajaxData.length) {
						document.querySelector('#quan').checked = true;
					} else {
						document.querySelector('#quan').checked = false;
					}
				},
				deep: true
			}
		},
		methods: {
			showSecond:function (index) {
				console.log(index);
				this.isShow=!this.isShow;
			},
			showEntry() {
				console.log(this.form.select_name)
				if(this.form.select_name != '请选择') {
					this.showEntrybox = true;
				} else {
					this.showEntrybox = false;
				}
			},
			checkAll(e) { // 点击全选事件
				if(e.target.checked) {
					this.ajaxData.forEach((el, i) => {
						// 数组里没有这一个value才push，防止重复push
						if(this.checkData.indexOf(el.value) == '-1') {
							this.checkData.push(el.value);
						}
					});
				} else { // 全不选选则清空绑定的数组
					this.checkData = [];
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
			.padding(0, 5, 5, 5)
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
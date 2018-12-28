<template>
	<div class="wmsg">
		<div class="header headerFixed">
			<mu-appbar style="width: 100%;" color="primary">
				<mu-button icon slot="left" to="/">
					<mu-icon size="36" value="chevron_left"></mu-icon>
				</mu-button>
				文明施工
				<mu-button icon slot="right">
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
									<em>检查项目：</em>
									<span>ZZ020018001_保现投资_总部</span>
								</dd>
								<dd>
									<em>施工节点：</em>
									<span>工程开工_别墅21#</span>
								</dd>
								<dd>
									<em>期 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区：</em>
									<span>别墅22#</span>
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
		<div class="addExamine">
			<mu-container class="button-wrapper">
				<mu-flex justify-content="center" align-items="center">
					<mu-button round color="primary">
						<mu-icon left value="add"></mu-icon>添加检查记录</mu-button>
				</mu-flex>
			</mu-container>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Wmsg',
		data() {
			return {
				msg: '文明施工',
			}
		},
		methods: {

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
			border-bottom:1px solid #fafafa;
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
							em {
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
					border-bottom-right-radius:5px;
					border-bottom-left-radius: 5px;
					.time{
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
</style>
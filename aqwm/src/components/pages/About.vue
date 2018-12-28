<template>
<mu-container>
  <mu-flex justify-content="between" align-items="end" wrap="wrap">
    <mu-paper :z-depth="1" class="demo-date-picker">
      <mu-date-picker :date.sync="date"></mu-date-picker>
    </mu-paper>
  </mu-flex>
</mu-container>
</template>

<script>
	export default {
		name: 'About',
		data() {
			return {
				msg: '文明施工',
				date: undefined
			}
		},
		methods: {

		}
	}
</script>

<style>
.demo-date-picker {
  margin: 8px;
}
</style>
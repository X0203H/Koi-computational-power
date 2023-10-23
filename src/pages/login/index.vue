<template>
	<van-button type="primary" @click='register'>登入</van-button>
</template>

<script lang="ts" setup>
	const register = () => {
		uni.switchTab({
			url: '/pages/index/index'
		})
	}
</script>

<style>
</style>
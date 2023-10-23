<template>
	<div class="due">
		<div class="navBar">
			<van-nav-bar title="标题" left-text="待付款" left-arrow @click-left="onClickLeft" />
		</div>
		<div class="secureCase">
			12
		</div>
	</div>
</template>

<script setup lang="ts">
	const onClickLeft = () => history.back();
</script>

<style>
	.due {
		--van-nav-bar-text-color: red;
		--van-nav-bar-title-text-color: red;
		--van-nav-bar-title-font-size: 24pt;
		--van-nav-bar-height: 40pt;
	}
</style>
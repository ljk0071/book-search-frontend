<template>
	<main class="main">
		<div class="util-form error">
			<strong>Page Not Found</strong>
			<p>현재 검색엔진에 문제가 있습니다</p>
			<i class="img-error"></i>
			<div class="btn-area">
				<button @click="this.$router.push('/')">메인으로</button>
			</div>
		</div>
	</main>
</template>

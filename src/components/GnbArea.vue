<template>
	<div class="nav">
		<div class="inner">
			<h1 class="logo"><router-link to="/"></router-link></h1>
			<!-- <ul th:if="${session.authUser == null}" class="user"> -->
			<ul class="user">
				<li class="user-in"><router-link to="/signup">Join</router-link></li>
				<li class="user-in" v-if="!isLogin">
					<router-link to="/login">Login</router-link>
				</li>
				<li class="user-in" v-else><a @click="kakaoLogout">Logout</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		isLogin() {
			return this.$store.state.isLogin;
		},
	},

	methods: {
		actionLogout() {
			console.log('logout');
			console.log('hi');
		},

		kakaoLogout() {
			window.Kakao.Auth.logout(res => {
				if (res) {
					this.$store.dispatch('isLogout');
				} else {
					alert('다시 시도해주세요.');
				}
			});
		},
	},
};
</script>

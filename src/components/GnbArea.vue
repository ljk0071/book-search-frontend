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
				<li class="user-in" v-else><a @click="actionLogout">Logout</a></li>
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
		},
	},
};
</script>

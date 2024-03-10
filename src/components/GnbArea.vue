<template>
	<div class="nav">
		<div class="inner">
			<h1 class="logo"><router-link to="/"></router-link></h1>
			<ul>
				<li v-if="!isLogin">
					<router-link to="/signup">Join</router-link>
				</li>
				<li v-else class="user">
					<a>{{ userName }} 님</a>
				</li>
				<li v-if="!isLogin">
					<router-link to="/login">Login</router-link>
				</li>
				<li v-else>
					<a @click="actionLogout">Logout</a>
				</li>
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
		userName() {
			return this.$store.state.userName;
		},
		loginType() {
			return this.$store.state.loginType;
		},
	},

	methods: {
		actionLogout() {
			if (this.loginType === 'kakao') {
				this.kakaoLogout();
				return;
			}

			if (this.loginType === 'naver') {
				this.naverLogout();
				return;
			}

			if (this.loginType === 'google') {
				this.googleLogout();
				return;
			}
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

		naverLogout() {
			this.$store.dispatch('isLogout');
		},

		googleLogout() {
			console.log('google logut');
		},
	},
};
</script>

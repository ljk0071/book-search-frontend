<template>
	<div class="sub-page">
		<main class="main">
			<div class="util-form login">
				<h2>로그인</h2>
				<div class="input-wrap">
					<div class="input-form">
						<input
							type="text"
							name="id"
							title="아이디"
							placeholder="아이디를 입력해 주세요."
							v-model="userId"
						/>
						<input
							type="password"
							name="pw"
							title="비밀번호"
							placeholder="비밀번호를 입력해 주세요."
							v-model="password"
						/>
					</div>
					<p class="error" v-show="showErrorMsg">틀린 정보입니다.</p>
					<div class="btn-area login">
						<button @click="actionLogin">로그인</button>
					</div>
				</div>
				<div class="social-area">
					<button type="button" class="google">Continue with Google</button>
					<button type="button" class="naver">Continue with Naver</button>
					<button type="button" class="kakao" @click="kakaoLogin">
						Continue with Kakao
					</button>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userId: '',
			password: '',

			showErrorMsg: false,
		};
	},

	methods: {
		actionLogin() {
			console.log('login');
		},

		kakaoLogin() {
			console.log(window.Kakao);
			window.Kakao.Auth.login({
				scope: 'profile_nickname, profile_image',
				success: this.getKakaoAccount(),
			});
		},

		getKakaoAccount() {
			window.Kakao.API.request({
				url: '/v2/user/me',
				success: res => {
					const kakao_account = res.kakao_account;
					const ninkname = kakao_account.profile.nickname;
					this.$store.dispatch('userName', ninkname);
					this.$store.dispatch('isLogin', true);

					this.$router.push('/');
				},
				fail: error => {
					console.log(error);
					alert('다시 시도해주세요.');
				},
			});
		},
	},
};
</script>

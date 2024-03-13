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
					<button type="button" class="google" @click="googleLogin">
						Continue with Google
					</button>
					<button type="button" class="naver" @click="naverLogin">
						Continue with Naver
					</button>
					<button type="button" class="kakao" @click="kakaoLogin">
						Continue with Kakao
					</button>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			userId: '',
			password: '',

			showErrorMsg: false,
		};
	},

	computed: {
		loginType() {
			return this.$store.state.loginType;
		},
	},

	mounted() {
		if (this.loginType === 'naver') {
			this.naverCallback();
		} else if (this.loginType === 'google') {
			this.googleCallback();
		}
	},

	created() {
		window.onSignIn = this.googleLogin;
	},

	methods: {
		actionLogin() {
			console.log('login');
		},

		kakaoLogin() {
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
					this.$store.dispatch('loginType', 'kakao');
					this.$store.dispatch('isLogin', true);

					this.$router.push('/');
				},
				fail: error => {
					alert('다시 시도해주세요.');
					console.log(error);
				},
			});
		},

		naverLogin() {
			const url = `https://nid.naver.com/oauth2.0/authorize?
				response_type=code&client_id=${import.meta.env.VITE_NAVER_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_NAVER_REDIRECT_URL}&state=test`;

			window.location.href = url;

			this.$store.dispatch('loginType', 'naver');
		},

		async naverCallback() {
			const url = `/oauth2.0/token?grant_type=authorization_code&
				client_id=${import.meta.env.VITE_NAVER_CLIENT_ID}&
				client_secret=${import.meta.env.VITE_NAVER_CLIENT_SECRET}&
				code=${this.$route.query.code}&
				state=${this.$route.query.state}`;
			const { data } = await axios.get(url);

			this.getNaverUserInfo(data);
		},

		async getNaverUserInfo(info) {
			const url = `/v1/nid/me`;
			const headers = {
				Authorization: `${info.token_type} ${info.access_token}`,
			};
			const { data } = await axios.get(url, { headers });

			this.$store.dispatch('userName', data.response.nickname);
			this.$store.dispatch('isLogin', true);
			this.$router.push('/');
		},

		async googleLogin() {
			const url =
				'https://accounts.google.com/o/oauth2/v2/auth?client_id=' +
				import.meta.env.VITE_GOOGLE_OAUTH_CLIENT +
				'&redirect_uri=' +
				import.meta.env.VITE_GOOGLE_REDIRECT_URL +
				'&response_type=code' +
				'&scope=profile';
			window.location.href = url;
			this.$store.dispatch('loginType', 'google');
		},

		async googleCallback() {
			// TODO: CORS error
			console.log(this.$route.query);
			const url = ` https://oauth2.googleapis.com/token/token?
					code=${this.$route.query.code}&
					client_id=${import.meta.env.VITE_GOOGLE_OAUTH_CLIENT}&
					client_secret=${import.meta.env.VITE_GOOGLE_OAUTH_SECRET}&
					redirect_uri=${import.meta.env.VITE_GOOGLE_REDIRECT_URL}&
					grant_type=authorization_code
				`;
			const res = await axios.get(url);
			console.log(res);
		},
	},
};
</script>

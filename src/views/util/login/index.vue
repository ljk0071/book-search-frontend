<template>
	<main class="main">
		<div class="util-form login">
			<h2>Login</h2>
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
		</div>
	</main>
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
	},
};
</script>

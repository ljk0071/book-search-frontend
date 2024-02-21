<template>
	<main class="main">
		<div class="util-form join">
			<h2>Join</h2>
			<div class="input-wrap">
				<div class="input-form">
					<div style="position: relative">
						<input
							autocomplete="off"
							type="text"
							name="id"
							title="아이디"
							placeholder="아이디를 입력해 주세요."
							v-model="userId"
						/>
						<button type="button" class="id_check" @click="checkDuplicateId">
							중복확인
						</button>
					</div>
					<input
						autocomplete="off"
						type="password"
						name="pw"
						title="비밀번호"
						placeholder="비밀번호를 입력해 주세요."
						v-model="password"
					/>
					<input
						autocomplete="off"
						type="text"
						name="name"
						title="이름"
						placeholder="이름을 입력해 주세요."
						v-model="userName"
					/>
				</div>
				<div class="btn-area join">
					<button type="button" @click="actionSignup">회원가입</button>
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
			userName: '',
		};
	},

	methods: {
		checkDuplicateId() {
			console.log(this.userId);
		},

		validationInfo() {
			if (!this.userId || !this.password || !this.userName) {
				alert('빈칸을 채운 후 다시 시도해 주세요.');
				return false;
			}

			return true;
		},

		actionSignup() {
			if (!this.validationInfo()) return;
		},
	},
};
</script>

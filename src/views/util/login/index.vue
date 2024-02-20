<template>
	<main class="main">
		<div class="util-form login">
			<h2>Login</h2>
			<div class="input-wrap">
				<form action="loginOk" method="get">
					<div class="input-form">
						<input
							type="text"
							name="id"
							title="아이디"
							placeholder="아이디를 입력해 주세요."
						/>
						<input
							type="password"
							name="pw"
							title="비밀번호"
							placeholder="비밀번호를 입력해 주세요."
						/>
					</div>
					<p th:if="${param.result != null}" class="error">틀린 정보입니다.</p>
					<div class="btn-area login">
						<button type="submit">로그인</button>
					</div>
				</form>
			</div>
		</div>
	</main>
</template>

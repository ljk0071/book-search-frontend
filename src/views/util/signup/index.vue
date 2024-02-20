<template>
	<main class="main">
		<div class="util-form join">
			<h2>Join</h2>
			<div class="input-wrap">
				<form action="joinOk" method="get">
					<div class="input-form">
						<div style="position: relative">
							<input
								autocomplete="off"
								type="text"
								id="id"
								name="id"
								title="아이디"
								placeholder="아이디를 입력해 주세요."
							/>
							<input
								type="hidden"
								id="id_chk_status"
								value="1"
								class="hidden"
							/>
							<button type="button" id="id_check">중복확인</button>
						</div>

						<input
							autocomplete="off"
							type="password"
							id="pw"
							name="pw"
							title="비밀번호"
							placeholder="비밀번호를 입력해 주세요."
						/>
						<input
							autocomplete="off"
							type="text"
							id="name"
							name="name"
							title="이름"
							placeholder="이름을 입력해 주세요."
						/>
					</div>

					<div class="btn-area join">
						<button type="button" id="btn_submit">회원가입</button>
					</div>
				</form>
			</div>
		</div>
	</main>
</template>

<script>
const submit = document.getElementById('btn_submit');
const idChk = document.getElementById('id_check');
idChk.addEventListener('click', async function () {
	const id = document.getElementById('id').value;
	const result = await fetch('/idChk', {
		method: 'post',
		body: id,
	});
	if (result != null) {
		alert('이미 존재하는 id입니다.');
	} else {
		alert('사용 가능한 id입니다.');
		document.getElementById('id_chk_status').value = -1;
		document.getElementById('id').setAttribute('readonly', true);
		document
			.getElementById('id')
			.setAttribute('style', 'background-color:#bfbfbf');
	}
});
submit.addEventListener('click', function () {
	const id = document.getElementById('id').value;
	const pw = document.getElementById('pw').value;
	const name = document.getElementById('name').value;
	const idChk = document.getElementById('id_chk_status').value;
	if (idChk == 1) {
		alert('아이디 중복확인 후 다시 시도해 주세요.');
	}
	if (id == '' || pw == '' || name == '') {
		alert('빈칸을 채운 후 다시 시도해 주세요.');
	}
	if (idChk == -1 && id != '' && pw != '' && name != '') {
		submit.setAttribute('type', 'submit');
	}
});
</script>

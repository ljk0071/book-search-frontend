<template>
	<div class="aside" style="float: left">
		<ul th:each="search : ${searchList}">
			<li th:text="${search}"></li>
		</ul>
	</div>
	<article class="main search">
		<div class="util-form">
			<h2>어떤 책을 찾으시나요?</h2>

			<div class="search-option-wrap">
				<div class="search-input">
					<form action="/search" method="get">
						<input
							name="search"
							type="text"
							class="input"
							placeholder="검색어를 입력하세요"
						/>
						<input name="page" type="hidden" value="1" />
						<button type="submit" class="hidden">검색</button>
					</form>
				</div>
				<div class="search-keyword-wrap">
					<div class="search-keyword-cont">
						<div class="keyword-box">
							<p class="title-heading">최근 검색어</p>
							<ul>
								<li>
									<p class="title">자바스크립트</p>
									<span class="date">12. 14</span>
								</li>
								<li>
									<p class="title">자바스크립트</p>
									<span class="date">12. 14</span>
								</li>
								<li>
									<p class="title">자바스크립트</p>
									<span class="date">12. 14</span>
								</li>
								<li>
									<p class="title">자바스크립트</p>
									<span class="date">12. 14</span>
								</li>
								<li>
									<p class="title">자바스크립트</p>
									<span class="date">12. 14</span>
								</li>
								<li>
									<p class="title">자바스크립트</p>
									<span class="date">12. 14</span>
								</li>
							</ul>
						</div>
						<div class="keyword-box">
							<p class="title-heading">인기 검색어</p>
							<ul>
								<li>
									<div>
										<span class="num">01</span>
										<p class="title">자바스크립트</p>
									</div>
									<span class="date">12. 14</span>
								</li>
								<li>
									<div>
										<span class="num">02</span>
										<p class="title">자바스크립트</p>
									</div>
									<span class="date">12. 14</span>
								</li>
								<li>
									<div>
										<span class="num">03</span>
										<p class="title">자바스크립트</p>
									</div>
									<span class="date">12. 14</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
// var login = document.getElementById("login");
// var joinForm = document.getElementById("join-form");
//
// login.addEventListener("click", function() {
//
// })
// joinForm.addEventListener("click", function() {
//
// })

function getTargetParent(elem, targetClass) {
	var currElem = elem;
	while (currElem && !currElem.classList.contains(targetClass)) {
		currElem = currElem.parentNode;
	}
	return currElem;
}

/**
 * Add a focus event listener to an element to add "focus" class on the parent identified by targetClass
 **/
function addFocusListener(elem, targetClass) {
	var targetParent = getTargetParent(elem, targetClass);
	if (targetParent) {
		elem.addEventListener('focus', function () {
			targetParent.classList.add('focus');
		});
		elem.addEventListener('blur', function () {
			targetParent.classList.remove('focus');
		});
	}
}

var inputs = document.getElementsByClassName('input');
for (var i = 0; i < inputs.length; i++) {
	addFocusListener(inputs[i], 'search-option-wrap');
}
</script>

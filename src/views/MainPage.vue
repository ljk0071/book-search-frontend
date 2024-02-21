<template>
	<!-- <div class="aside" style="float: left">
		<ul th:each="search : ${searchList}">
			<li th:text="${search}"></li>
		</ul>
	</div> -->
	<article class="main search">
		<div class="util-form">
			<h2>어떤 책을 찾으시나요?</h2>

			<div class="search-option-wrap">
				<div class="search-input">
					<input
						name="search"
						type="text"
						class="input"
						placeholder="검색어를 입력하세요"
						v-model="searchKeyword"
						@focus="focusSearchBox"
						@blur="blurSearchBox"
					/>
					<input name="page" type="hidden" value="1" />
					<button class="hidden" @click="actionSearch">검색</button>
				</div>
				<div class="search-keyword-wrap" v-show="showSearchOption">
					<div class="search-keyword-cont">
						<div class="keyword-box">
							<p class="title-heading">최근 검색어</p>
							<ul>
								<li v-for="(item, index) in 5" :key="index">
									<p class="title">자바스크립트</p>
									<span class="date">12. 14</span>
								</li>
							</ul>
						</div>
						<div class="keyword-box">
							<p class="title-heading">인기 검색어</p>
							<ul>
								<li v-for="(item, index) in 3" :key="index">
									<div>
										<span class="num">{{ index + 1 }}</span>
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
export default {
	data() {
		return {
			searchKeyword: '',
			showSearchOption: false,
		};
	},

	methods: {
		actionSearch() {
			console.log(this.searchKeyword);
		},

		focusSearchBox() {
			this.showSearchOption = true;
		},

		blurSearchBox() {
			this.showSearchOption = false;
		},
	},
};
</script>

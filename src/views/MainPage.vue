<template>
	<!-- <div class="aside" style="float: left">
		<ul th:each="search : ${searchList}">
			<li th:text="${search}"></li>
		</ul>
	</div> -->
	<div class="sub-page">
		<main class="main search" @click.self="focusoutSearchBox">
			<div class="util-form">
				<h2>어떤 책을 찾으시나요?</h2>

				<div class="search-option-wrap">
					<div>
						<div class="search-input">
							<input
								name="search"
								type="text"
								class="input"
								placeholder="검색어를 입력하세요"
								v-model="searchKeyword"
								@focus="focusSearchBox"
								@keydown.enter="actionSearch"
							/>
							<button class="hidden" @click="actionSearch">검색</button>
						</div>
						<div class="search-keyword-wrap" v-show="showSearchOption">
							<div class="search-keyword-cont">
								<div class="keyword-box">
									<p class="title-heading">최근 검색어</p>
									<ul>
										<li
											v-for="(item, index) in 5"
											:key="index"
											@click="parshingKeyword('자바스크립트')"
										>
											<p class="title">자바스크립트</p>
											<span class="date">12. 14</span>
										</li>
									</ul>
								</div>
								<div class="keyword-box">
									<p class="title-heading">인기 검색어</p>
									<ul>
										<li
											v-for="(item, index) in 3"
											:key="index"
											@click="parshingKeyword('스프링')"
										>
											<div>
												<span class="num">{{ index + 1 }}</span>
												<p class="title">스프링</p>
											</div>
											<span class="date">12. 14</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchKeyword: '',
			showSearchOption: false,
		};
	},

	created() {
		console.log(this.$store.state);
	},

	methods: {
		actionSearch() {
			this.$router.push({
				path: '/search',
				query: {
					q: this.searchKeyword,
				},
			});
		},

		focusSearchBox() {
			this.showSearchOption = true;
		},

		focusoutSearchBox() {
			this.showSearchOption = false;
		},

		parshingKeyword(keyword) {
			this.searchKeyword = keyword;
		},
	},
};
</script>

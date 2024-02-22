<template>
	<div class="subPage">
		<div class="inner">
			<div class="search-result">
				<p>
					<span>'{{ searchTitle }}'</span>에 대한 65개의 검색 결과입니다.
				</p>
			</div>
			<div class="table list">
				<table>
					<colgroup>
						<col style="width: 10%" />
						<col style="width: auto" />
						<col style="width: 10%" />
					</colgroup>
					<tbody>
						<tr v-for="(item, index) in 10" :key="index">
							<td class="count">
								<span v-if="index < 9">0</span>{{ index + 1 }}
							</td>
							<td>
								<div class="item">
									<img src="" alt="책 섬네일" />
									<div>
										<p class="title">바닐라 자바스크립트</p>

										<p class="publising">모닝글로리</p>

										<p class="price-area">
											<span class="price">6,750원</span>
											<span class="val">7,500원</span>
										</p>
									</div>
								</div>
							</td>
							<td>
								<a class="more" @click="this.$router.push('/search/:1')"
									>상세보기</a
								>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- <div class="pagination">
				<div th:each="num : ${#numbers.sequence(1, infoList.totalPage)}">
					<a
						th:href="@{/search(search=${infoList.search}, page=${num})}"
						th:if="${infoList.page} == ${num}"
						th:text="${num}"
						style="font-weight: bold"
					></a>
					<a
						th:href="@{/search(search=${infoList.search}, page=${num})}"
						th:unless="${infoList.page} == ${num}"
						th:text="${num}"
					></a>
				</div>
			</div> -->

			<!--pagination-->
			<div class="pagination">
				<button type="button" class="btn-prev">
					<span class="hidden">이전</span>
				</button>
				<a href="/search" class="active"><span>1</span></a>
				<a href="/search" class=""><span>2</span></a>
				<a href="/search" class=""><span>3</span></a>
				<a href="/search" class=""><span>4</span></a>
				<a href="/search" class=""><span>5</span></a>
				<button type="button" class="btn-next">
					<span class="hidden">다음</span>
				</button>
			</div>
			<!--pagination-->
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchTitle: '',
		};
	},

	created() {
		if (!this.$route.query?.q) {
			this.$router.push('/');
			return;
		}
		this.searchTitle = this.$route.query?.q;
	},
};
</script>

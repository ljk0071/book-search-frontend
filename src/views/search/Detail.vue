<template>
	<div class="subPage">
		<div class="inner">
			<div class="table view">
				<table>
					<colgroup>
						<col style="width: 45%" />
						<col style="width: 55%" />
					</colgroup>
					<tbody>
						<tr>
							<td>
								<img :src="info.thumbnail" alt="책 섬네일" />
							</td>
							<td>
								<p class="tit">책 제목</p>
								<div class="table detail">
									<table>
										<colgroup>
											<col style="width: 100px" />
											<col style="width: auto" />
										</colgroup>
										<tbody>
											<tr>
												<th scope="col">정가</th>
												<td>
													<span class="val"
														>{{ this.$filters.comma(info.price) }}원</span
													>
												</td>
											</tr>
											<tr>
												<th scope="col">판매가</th>
												<td>
													<span class="price"
														>{{ this.$filters.comma(info.price) }}원</span
													>
												</td>
											</tr>
											<tr>
												<th scope="col">ISBN</th>
												<td>{{ info.isbn }}</td>
											</tr>
											<tr>
												<th scope="col">저자</th>
												<td>
													<div v-if="info.authors">{{ info.authors }}</div>
													<div v-else>저자미상</div>
												</td>
											</tr>
											<tr>
												<th scope="col">출판사</th>
												<td>{{ info.publisher }}</td>
											</tr>
											<tr>
												<th scope="col">출판일</th>
												<td>
													{{
														this.$filters.replaceDateString(
															info.publishDateTime,
														)
													}}
												</td>
											</tr>
											<tr>
												<th scope="col">소개</th>
												<td>
													{{ info.contents }}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</td>
						</tr>
						<!-- <tr>
              <td th:text="${info.no}"></td>
              <td><img th:src="${info.thumbnail}" /></td>
              <td th:text="${info.title}"></td>
              <td th:text="${info.contents}"></td>
              <td th:text="${info.isbn}"></td>
              <td th:text="${info.authors}"></td>
              <td th:text="${info.publisher}"></td>
              <td th:text="${info.datetime}"></td>
              <td th:text="${info.price}"></td>
              <td th:text="${info.salePrice}"></td>
            </tr> -->
					</tbody>
				</table>
			</div>
			<div class="btn-area">
				<button class="border" @click="newSearch">새로검색</button>
				<button class="border" @click="moveToLists">목록보기</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			info: {},
		};
	},

	created() {
		if (!history.state?.info) {
			this.$router.push({
				path: '/search',
				query: {
					q: this.$route.query?.q,
				},
			});
			return;
		}

		this.info = history.state.info;
	},

	methods: {
		newSearch() {
			this.$router.push('/');
		},

		moveToLists() {
			this.$router.push({
				path: '/search',
				query: {
					q: this.$route.query?.q,
				},
			});
		},
	},
};
</script>

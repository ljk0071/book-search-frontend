<template>
	<div class="subPage">
		<div class="inner">
			<div class="search-result">
				<p>
					<span>'{{ searchTitle }}'</span>에 대한 {{ totalElements }}개의 검색
					결과입니다.
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
						<tr v-for="(item, index) in searchList" :key="index">
							<td class="count">
								<span v-if="index < 9">0</span>{{ index + 1 }}
							</td>
							<td>
								<div class="item">
									<img :src="item.thumbnail" alt="책 섬네일" />
									<div>
										<div class="flex sb">
											<p class="title">{{ item.title }}</p>
											<p class="writer">
												{{ this.$filters.replaceSpacing(item.authors) }}
											</p>
										</div>

										<p class="publising">{{ item.puglisher }}</p>

										<p class="price-area">
											<span class="price"
												>{{ this.$filters.comma(item.price) }}원</span
											>
											<span class="val"
												>{{ this.$filters.comma(item.price) }}원</span
											>
										</p>
									</div>
								</div>
							</td>
							<td>
								<a class="more" @click="moveDetail(item)">상세보기</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Pagination
				:totalPage="totalPage"
				:page="page"
				:limitPage="limitPage"
				@paging="paging"
			/>
			<!--pagination-->
		</div>
	</div>
</template>

<script>
import api from '@/api/util/book';
import Pagination from '@/components/Pagination.vue';

export default {
	components: {
		Pagination,
	},

	data() {
		return {
			searchTitle: '',
			searchList: [],
			totalElements: 0,
			totalPage: 0,
			page: 1,

			limitPage: 10,
		};
	},

	created() {
		if (!this.$route.query?.q) {
			this.$router.push('/');
			return;
		}
		this.searchTitle = this.$route.query?.q;
		this.getBooksInfo();
	},

	methods: {
		async getBooksInfo() {
			const params = {
				searchKeyword: this.searchTitle,
				searchType: 'title',
				page: this.page,
				pageSize: 10,
			};

			const res = await api.searchBooks(params);

			if (!res.data?.data) {
				this.$router.push('/');
				return;
			}

			this.searchList = res.data.data?.bookResponseDtos ?? [];
			this.totalElements = res.data.data?.totalElements ?? 0;
			this.totalPage = res.data.data?.totalPage ?? 0;
		},

		moveDetail(item) {
			this.$router.push({
				path: '/search/detail',
				query: {
					q: this.searchTitle,
				},
				state: {
					info: { ...item },
				},
			});
		},

		paging(page) {
			this.page = page;
			this.getBooksInfo();
			window.scrollTo(0, 0);
		},
	},
};
</script>

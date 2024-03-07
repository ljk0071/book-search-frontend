<template>
	<div class="pagination">
		<button type="button" class="btn-prev" @click="prevPagination">
			<span class="hidden">이전</span>
		</button>
		<a
			v-for="(item, index) in listData"
			:key="index"
			:class="{ active: page === item }"
			@click="movePagination(item)"
		>
			<span>{{ item }}</span>
		</a>
		<button type="button" class="btn-next" @click="nextPagination">
			<span class="hidden">다음</span>
		</button>
	</div>
</template>

<script>
export default {
	props: {
		totalPage: {
			type: Number,
		},
		page: {
			type: Number,
		},
		limitPage: {
			type: Number,
		},
	},

	data() {
		return {
			listData: Array.from({ length: this.limitPage }, (_, index) => index + 1),
		};
	},

	methods: {
		movePagination(page) {
			this.$emit('paging', page);
		},

		prevPagination() {
			if (this.page === 1) return;

			if (this.page === this.listData[0]) {
				this.listData = Array.from({ length: this.limitPage }).reduce(
					(acc, _, i) => {
						acc[this.limitPage - i - 1] = this.page - i - 1;
						return acc;
					},
					[],
				);
			}
			this.$emit('paging', this.page - 1);
		},

		nextPagination() {
			if (this.page === this.totalPage) return;

			if (this.page === this.listData[this.listData.length - 1]) {
				this.listData = this.listData
					.map(item => {
						if (item + 10 <= this.totalPage) {
							return item + 10;
						}
					})
					.filter(v => v !== undefined);
			}
			this.$emit('paging', this.page + 1);
		},
	},
};
</script>

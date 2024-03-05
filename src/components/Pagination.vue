<template>
	<div class="pagination">
		<button type="button" class="btn-prev" @click="sendPage(this.page, 'prev')">
			<span class="hidden">이전</span>
		</button>
		<a
			v-for="(item, index) in listData"
			:key="index"
			:class="{ active: page === item }"
			@click="sendPage(item)"
		>
			<span>{{ item }}</span>
		</a>
		<button type="button" class="btn-next" @click="sendPage(this.page, 'next')">
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
		sendPage(page, type) {
			if (type === 'prev') {
				if (this.page === 1) return;
				if (this.page === this.listData[0]) {
					let arr = new Array(this.limitPage);
					for (let i = 1; i <= this.limitPage; i++) {
						arr[this.limitPage - i] = this.page - i;
					}
					this.listData = arr;
				}
				this.$emit('paging', page - 1);
				return;
			}

			if (type === 'next') {
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
				this.$emit('paging', page + 1);
				return;
			}

			this.$emit('paging', page);
		},
	},
};
</script>

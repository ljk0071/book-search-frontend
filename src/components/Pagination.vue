<template>
	<div class="pagination">
		<button type="button" class="btn-prev" @click="sendPage(this.page, 'prev')">
			<span class="hidden">이전</span>
		</button>
		<a
			v-for="(item, index) in totalPage"
			:key="index"
			:class="{ active: page === index + 1 }"
			@click="sendPage(index + 1)"
		>
			<span>{{ index + 1 }}</span>
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
			listData: new Array(this.limitPage),
		};
	},

	methods: {
		sendPage(page, type) {
			if (type === 'prev') {
				if (this.page === 1) return;
				this.$emit('paging', page - 1);
				return;
			}
			if (type === 'next') {
				if (this.page === this.totalPage) return;
				this.$emit('paging', page + 1);
				return;
			}

			this.$emit('paging', page);
		},
	},
};
</script>

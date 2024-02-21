<template>
	<GnbArea></GnbArea>
	<router-view />
</template>

<script>
import GnbArea from './components/GnbArea.vue';

export default {
	components: {
		GnbArea,
	},
};
</script>

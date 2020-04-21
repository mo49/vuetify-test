<template>
	<v-app-bar-nav-icon @click.stop="clickNav()" />
</template>

<script>
export default {
	methods: {
		clickNav() {
			this.$emit("clickNav");
		}
	}
};
</script>

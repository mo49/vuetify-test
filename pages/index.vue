<template>
	<v-content>
		<v-container>
			<h1>Index Page</h1>
			<v-list>
				<v-list-item link to='login'>LOGIN</v-list-item>
				<v-list-item link to='layout'>LAYOUT</v-list-item>
				<v-list-item link to='menu'>MENU</v-list-item>
				<v-list-item link to='modal'>MODAL</v-list-item>
				<v-list-item link to='color'>COLOR</v-list-item>
			</v-list>
		</v-container>
	</v-content>
</template>

<script>
export default {
	components: {},
	computed: {
		isFromTablet() {
			return this.$ua.isFromTablet() || this.$isFromIpad();
		}
	}
};
</script>

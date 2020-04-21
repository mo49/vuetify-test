<template>
	<v-navigation-drawer v-model="drawer" app>
		<v-list dense>
			<item-home />
			<item-contact />
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import ItemHome from "~/components/molecules/ItemHome";
import ItemContact from "~/components/molecules/ItemContact";
export default {
	components: {
		ItemHome,
		ItemContact
	},
	props: {
		source: String
	},
	data: () => ({
		drawer: null
	}),
	methods: {
		toggleNav() {
			this.drawer = !this.drawer;
		}
	}
};
</script>

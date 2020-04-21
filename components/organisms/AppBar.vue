<template>
	<v-app-bar app color="indigo" dark>
		<app-bar-nav-icon @clickNav="clickNav" />
		<toolbar-title />
	</v-app-bar>
</template>

<script>
import AppBarNavIcon from "~/components/atoms/AppBarNavIcon";
import ToolbarTitle from "~/components/atoms/ToolbarTitle";
export default {
	components: {
		AppBarNavIcon,
		ToolbarTitle
	},
	methods: {
		clickNav() {
			this.$emit("clickNav");
		}
	}
};
</script>

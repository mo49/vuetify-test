<template>
	<v-list-item link to="/">
		<v-list-item-action>
			<icon-home />
		</v-list-item-action>
		<v-list-item-content>
			<item-title-home />
		</v-list-item-content>
	</v-list-item>
</template>

<script>
import IconHome from "~/components/atoms/IconHome";
import ItemTitleHome from "~/components/atoms/ItemTitleHome";
export default {
	components: {
		IconHome,
		ItemTitleHome
	}
};
</script>

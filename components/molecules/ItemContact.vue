<template>
	<v-list-item link to='contact'>
		<v-list-item-action>
			<icon-contact />
		</v-list-item-action>
		<v-list-item-content>
			<item-title-contact />
		</v-list-item-content>
	</v-list-item>
</template>

<script>
import IconContact from "~/components/atoms/IconContact";
import ItemTitleContact from "~/components/atoms/ItemTitleContact";
export default {
	components: {
		IconContact,
		ItemTitleContact
	}
};
</script>

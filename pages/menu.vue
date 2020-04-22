<template>
	<v-content>
		<v-container>
			<h1>Menu Page</h1>
			<div>
				<a href="https://vuetifyjs.com/en/components/menus/" target="_blank" rel="noopener noreferrer">https://vuetifyjs.com/en/components/menus/</a>
			</div>
			<v-menu>
				<template v-slot:activator="{on}">
					<v-btn color="primary" v-on="on">Dropdown</v-btn>
				</template>
				<v-list>
					<v-list-item v-for="(item, index) in menuItems" :key="index" @click="selectItem(item)" :disabled="!item.isActive">
						<v-list-item-title>{{item.title}}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
			<div>
				<a href="https://vuetifyjs.com/en/components/selects/" target="_blank" rel="noopener noreferrer">https://vuetifyjs.com/en/components/selects/</a>
			</div>
			<v-select :items="inputItems" label="select item" outlined>
				<template v-slot:item="{item, on}">
					<v-list-item  @click="selectItem(item)" v-on="on" :disabled="!item.isActive">
						<v-list-item-title v-text="item.text"></v-list-item-title>
					</v-list-item>
				</template>
			</v-select>
		</v-container>
	</v-content>
</template>

<script>
export default {
	data: () => ({
		menuItems: [
			{title: 'item1', isActive: true},
			{title: 'item2', isActive: true},
			{title: 'item3', isActive: true},
			{title: 'item4', isActive: true},
			{title: 'item5', isActive: false},
			{title: 'item6', isActive: true},
			{title: 'item7', isActive: true},
			{title: 'item8', isActive: false},
			{title: 'item9', isActive: true},
			{title: 'item10', isActive: true},
		],
		inputItems: [
			{text: 'item1', isActive: true},
			{text: 'item2', isActive: true},
			{text: 'item3', isActive: true},
			{text: 'item4', isActive: true},
			{text: 'item5', isActive: false},
			{text: 'item6', isActive: true},
			{text: 'item7', isActive: true},
			{text: 'item8', isActive: false},
			{text: 'item9', isActive: true},
			{text: 'item10', isActive: true},
		]
	}),
	methods: {
		selectItem(item){
			console.log(item)
		}
	}
};
</script>

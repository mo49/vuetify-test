<template>
	<v-content>
		<v-container fluid>
			<h1>Layout Page</h1>
			<v-row>
				<v-col cols="12">
					<v-row :align="alignment" :justify="justify">
						<v-card v-for="n in 12" :key="n" class="pa-6" outlined tile>Column {{n}}</v-card>
					</v-row>
				</v-col>
			</v-row>
			<v-row no-gutters>
				<v-col v-for="n in 9" :key="n" cols="3">
					<v-card class="pa-6" outlined tile>{{n}}</v-card>
				</v-col>
			</v-row>
			<v-row no-gutters>
				<v-col class="flex-grow-0 flex-shrink-0">
					<v-card class="pa-2" outlined tile>flex-grow-0 flex-shrink-0</v-card>
				</v-col>
				<v-col class="flex-grow-1 flex-shrink-0">
					<v-card class="pa-2" outlined tile>flex-grow-1 flex-shrink-0</v-card>
				</v-col>
				<v-col class="flex-grow-0 flex-shrink-1">
					<v-card class="pa-2" outlined tile>flex-grow-0 flex-shrink-1</v-card>
				</v-col>
			</v-row>
			<v-row no-gutters>
				<v-col v-for="n in 5" :key="n" class="flex-glow-1">
					<v-card class="pa-2" outlined tile>{{n}}</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-content>
</template>

<script>
export default {
	data: () => ({
		alignment: 'center',
		justify: 'center',
	})
};
</script>

<template>
	<v-content>
		<v-container>
			<h1>Modal Page</h1>
			<v-row>
				<v-btn @click.stop="dialog = true">Open Dialog</v-btn>
				<v-dialog v-model="dialog">
					<v-card>
						<v-card-title>Confirm</v-card-title>
						<v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn @click="clickConfirm(false)" text>Disagree</v-btn>
							<v-btn @click="clickConfirm(true)" color="red" text>Agree</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-row>
			<v-row>
				<v-dialog v-model="isOpen" persistent max-width="600">
					<template v-slot:activator="{on}">
						<v-btn v-on="on">Open Form</v-btn>
					</template>
					<v-card class="pa-3">
						<v-card-title>Form</v-card-title>
						<v-card-text>
							<v-container>
								<v-row>
									<v-col cols="12">
										<p>radios</p>
										<v-radio-group :mandatory="true" :disabled="isLoadingForSubmit">
											<v-radio label="radio text 1" value="case1"></v-radio>
											<v-radio label="radio text 2" value="case2"></v-radio>
											<v-radio label="radio text 3" value="case3"></v-radio>
										</v-radio-group>
									</v-col>
									<v-col cols="12">
										<p>textarea</p>
										<v-textarea :disabled="isLoadingForSubmit">
										</v-textarea>
									</v-col>
								</v-row>
							</v-container>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn @click="isOpen = false" :disabled="isLoadingForSubmit">cancel</v-btn>
							<v-btn @click="submit()" color="primary" :loading="isLoadingForSubmit">submit</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-row>
		</v-container>
	</v-content>
</template>

<script>
export default {
	data: () => ({
		dialog: false,
		isOpen: false,
		isLoadingForSubmit: false,
	}),
	methods: {
		clickConfirm(ans){
			this.dialog = false
			console.log(ans)
		},
		submit(){
			this.isLoadingForSubmit = true
			// 擬似submit
			setTimeout(() => {
				this.isLoadingForSubmit = false
				this.isOpen = false
			}, 3000);
		}
	}
};
</script>

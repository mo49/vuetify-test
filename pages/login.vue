<template>
	<v-content>
		<v-container>
			<v-card width="400px" class="mx-auto mt-5">
				<v-card-title>
					<h1>ログイン</h1>
				</v-card-title>
				<v-card-text>
					<v-form>
						<v-text-field prepend-icon="mdi-account-circle" label="ユーザー名" />
						<v-text-field prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'" label="パスワード" @click:append="showPassword = !showPassword" />
						<v-card-actions>
							<v-btn>ログイン</v-btn>
						</v-card-actions>
					</v-form>
				</v-card-text>
			</v-card>
		</v-container>
	</v-content>
</template>

<script>
export default {
	data: () => ({
		showPassword: false,
	})
}
</script>

<style lang="scss" scoped>
</style>

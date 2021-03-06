import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: colors.orange.darken4,
				secondary: colors.orange.light1,
				accent: colors.indigo.base,
			},
		},
	},
})

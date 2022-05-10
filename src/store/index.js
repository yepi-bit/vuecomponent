import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		dialogVisible: false,
		user: {
			name: '',
			pass: ''
		}
	},
	getters: {
		getUser(state) {
			return state.user
		}
	},
	mutations: {
		updateUser(state, user) {
			state.user = user
		},
		showLFV(state) {
			state.dialogVisible = true
		},
	},
	actions: {
		asyncUpdateUser(content, user) {
			content.commit("updateUser", user)
		}
	}
})

// import vuex from 'vuex'

export const catalog = {
	state: () => ({
		catalogParams: {
			// page: 1,
		},
		catalogFilters: {},
		showContent: false,
	}),
	mutations: {
		setParams(state, params){
			state.catalogParams = params
		},
		setParam(state, paramObj){
			// console.log(paramObj)
			state.catalogParams[paramObj.name] = paramObj.val
		},
		deleteParam(state, param){
			delete state.catalogParams[param]
		},
		setShowContent(state, bool) {
			state.showContent = bool
		},
		setFilter(state, filterObj){
			state.catalogFilters[filterObj.name] = filterObj.val
		},
		setFilters(state, filters){
			state.catalogFilters = filters
		},
	},
	namespaced: true,
}
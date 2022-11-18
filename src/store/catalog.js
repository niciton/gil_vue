// import vuex from 'vuex'

export const catalog = {
	state: {
		catalogParams: {
			amount: 11,
			page: 1,
		},
		showContent: false,
	},
	mutations: {
		setParams(sore, params){
			sore.catalogParams = params
		},
		setParam(sore, paramObj){
			console.log(paramObj)
			sore.catalogParams[paramObj.name] = paramObj.val
		},
	},
	namespaced: true,
}
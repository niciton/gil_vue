export default function (name){
	const isContains = location.search.includes('?')
	const isContainsURL = location.search.includes(name)

	const URLParams = location.search.replace('?', '').split('&')



	console.log(isContains, isContainsURL)
}
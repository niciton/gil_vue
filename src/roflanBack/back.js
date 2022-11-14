export default new Promise((resolve, reject) =>{

// })
// export default function () {
	let data = 0
	const xhr = new XMLHttpRequest()
	// const data = import('./data.json')
	// console.log(data)
	xhr.open("GET", 'http://localhost:5173/src/roflanBack/data.json')
	xhr.responseType = 'json';
	xhr.send()
	xhr.onload = () => {
		console.log(xhr.response)
		// return []
		return xhr.response
		filterSort(xhr.response)
	}

	function filterSort(data){
		return data
	}
	resolve(() => {
		return data
	})
	// return data
})

// new Promise((resolve, reject) =>{})
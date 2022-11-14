export default function (str){
	const ru = {
			'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
			'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i',
			'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
			'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
			'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
			'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya', ' ': '-'
		},

		n_str = [],
		strArr = [...str],

		len = strArr.length;


	str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');

	for ( let i = 0; i < len; ++i ) {
		// n_str.push(
		// 	ru[ strArr[i] ]
		// 	|| ru[ strArr[i].toLowerCase() ] == undefined && strArr[i]
		// 	|| ru[ strArr[i].toLowerCase() ].replace(/^(.)/, function ( match ) { return match.toUpperCase() })
		// );
		n_str.push(ru[ strArr[i].toLowerCase() ])
	}

	return n_str.join('');
}
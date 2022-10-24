export function demo(){
	let days = [ //each one of the array is called elements? 
		'Sun',
		'Mon',
		'Tue',
		'Wed',
		'Thu',
		'Fri',
		'Sat'
	];

	let cal = `<table border="1"><tr>`;
	for (let idx = 0; idx < days.length; idx++) { //days.lenght is the lenght of array
		cal += `<th>${days[idx]}</th>`; //days[idx] displays the string days 
	}
	cal += `</tr></table>`;

	document.querySelector('.calendar').innerHTML = cal;

	let cal2 = `<table border="1"><tr>`;
	days.forEach((element)=> {
		cal2 += `<th>${element}</th>`;
	});
	cal2 += `</tr></table>`;

	document.querySelector('.calendar2').innerHTML = cal2;
}
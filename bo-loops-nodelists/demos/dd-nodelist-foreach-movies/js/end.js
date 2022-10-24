//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

function End(){

	let movieFilterForm = document.querySelector("#movie-filter-form")
	movieFilterForm.elements["filter-query"].focus()

	let allMovieItems = document.querySelectorAll(".top-movies-list li") // this select all list from ol
	//with class top-movies-list

	console.log(allMovieItems);

	movieFilterForm.addEventListener("submit", evt => {
		evt.preventDefault();
		let filter = movieFilterForm.elements["filter-query"].value; //value in this one is basically waht ever you type in the form
		console.log(filter);
		filterItems(filter);// this filters the list with what ever value you type in
	});

	const filterItems = filterValue => {
		allMovieItems.forEach(movieItem => { //this is a nested function starting from the filterItems function with filterValue parameter  
											// that makes a foreach loop function for allMovieItems with movieItem parameter
											// movieItem targets the inner text of the list, and to lowercase function converts any string to 
											//lowercase letters. include function determines whether an array includes 
											//a certain value among its entries, returning true or false as appropriate

			if (movieItem.innerText.toLowerCase().includes(filterValue.toLowerCase())) {
				movieItem.classList.remove("hidden-item");           
			} else {
				movieItem.classList.add("hidden-item");
			}
		});
	}



}

export default End;

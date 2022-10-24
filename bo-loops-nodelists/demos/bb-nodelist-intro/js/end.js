function End(){

let count;
let items;
let list = `<ul>`;

for (count = 0; count < 10; count++) {
	list += `<li>${count + 1}</li>`;
}

list += `</ul>`; // same as list = list + `</ul>`;

document.querySelector('.output').innerHTML = list; // this grabs the inner html of .output class div in html and make it = list. and list ads the UL

items = document.querySelectorAll('li');
console.log(items);

for (count = 0; count < items.length; count += 2) {
	items[count].classList.add('stripe'); //classlist targets the class of the element and willa add 'stripe' class depends on what count increment they have
											// in this case its count += 2 which is also count = count + 2. meaing starting from index 0 and every 2nd after index 0
											// will add a clas stripe to the li and color it red.
}

}

export default End;

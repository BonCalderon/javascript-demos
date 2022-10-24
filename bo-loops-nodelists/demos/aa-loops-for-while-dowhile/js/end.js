function End(){

let count;
let list = `<ul>`;

list += `<li>for loop</li>`;
for (count = 0; count < 5; count++) {
	list += `<li>${count + 1}</li>`;
}

list += `<li>while loop</li>`;
count = 0;
while (count < 5) {
	list += `<li>${count + 1}</li>`; // need count = 0 for while loop before the while statement starts and put count++ inside the while statement at the bottom
	count++;							// to count+1
}

list += `<li>do-while loop</li>`;
count = 0;
do {											
	list += `<li>${count + 1}</li>`;	// need count = 0 for do while loop before the do statement starts and put count++ inside the do statement at the bottom
	count++;								// to count+1
} while (count < 5);

list += `</ul>`;

document.querySelector('.output').innerHTML = list;

}

export default End;
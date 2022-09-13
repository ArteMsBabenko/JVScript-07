function fillListItems() {
	let elements = document.querySelectorAll("li");

	for (let i = 0; i < elements.length; i++) {
		elements[i].innerHTML = "Random text " + (i + 1);
	}

	let numberOfItems = elements.length;
	console.log("It was filled " + numberOfItems + " list items");
}
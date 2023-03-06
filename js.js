console.log('Oskar');

const inputValue = document.querySelector('.header-search');
let drinkList = document.querySelectorAll('li');
let newDrinkList = [];
let oldDrinkList = [];

const searchValue = (e) => {
	const text = e.target.value.toLowerCase();
	console.log(text);

	drinkList.forEach((el) => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block';
		} else {
			el.style.display = 'none';
		}
	});
};

inputValue.addEventListener('keyup', searchValue);

const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu__icon');
const menuLink = document.querySelectorAll('.menu__list-link');
const body = document.body;

function ready() {
	//if (menu && menuBtn) {
	menuBtn.addEventListener('click', function () {
		menu.classList.toggle('active');
		menuBtn.classList.toggle('active');
		body.classList.toggle('lock');
	});

	menu.addEventListener('click', function (event) {
		event.target.closest('.menu__body').classList.remove('active');
		body.classList.remove('lock');
		// console.log(event.target);
	});	
};


	//menuLink.forEach(link => {
		//link.addEventListener('click', () => {
			//menu.classList.remove('active');
			//menuBtn.classList.remove('active');
			//body.classList.remove('lock');
		//});
	//});
 //}



document.addEventListener('DOMContentLoaded', ready);

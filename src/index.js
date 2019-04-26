
import { loadPage } from './page_load.js';
import { loadMenuPage } from './menu.js';
import { loadContactPage } from './contact.js';

const renderPage = () => {
	loadPage();

	let menuTab = document.querySelector('#menuNav');
	let contactTab = document.querySelector('#contactNav');
	let home = document.querySelector('#home');
	let content = document.querySelector('#content');

	menuTab.addEventListener('click', function activatePage(){
		contactTab.classList.remove('active');
		contactTab.removeEventListener('click', activatePage);

		while (content.firstChild){
				content.removeChild(content.firstChild);
			}

		loadMenuPage();
		menuTab.classList.add('active');
	})

	contactTab.addEventListener('click', function activatePage(){
		menuTab.classList.remove('active');
		menuTab.removeEventListener('click', activatePage);

		while (content.firstChild){
				content.removeChild(content.firstChild);
			}

		loadContactPage();
		contactTab.classList.add('active');
	
	})

	home.addEventListener('click', () => {

		let header = document.querySelector('header');
		let footer = document.querySelector('footer');
		header.remove();
		footer.remove();

		while (content.firstChild){
				content.removeChild(content.firstChild);
			}

		renderPage();

	})


}

renderPage();

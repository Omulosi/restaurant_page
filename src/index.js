
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

const deleteContent = () => {
	// delete page content
    let content = document.querySelector('#content');
	while (content.firstChild){
		content.removeChild(content.firstChild);
	}
}

function loadPage(page){
    page();

    let menu = document.querySelector('.menu');
    let home = document.querySelector('.home');
    let contact = document.querySelector('.contact');

    // Event listeners
    menu.addEventListener('click', () => {
        deleteContent();
        loadPage(menuPage);

        let menu = document.querySelector('.menu');
        let home = document.querySelector('.home');
        let contact = document.querySelector('.contact');

        menu.classList.add('active');
        home.classList.remove('active');
        contact.classList.remove('active')
    });

    home.addEventListener('click', () => {
        deleteContent();
        loadPage(homePage);

        let menu = document.querySelector('.menu');
        let home = document.querySelector('.home');
        let contact = document.querySelector('.contact');

        home.classList.add('active');
        menu.classList.remove('active');
        contact.classList.remove('active')
    });

    contact.addEventListener('click', () => {
        deleteContent();
        loadPage(contactPage);

        let menu = document.querySelector('.menu');
        let home = document.querySelector('.home');
        let contact = document.querySelector('.contact');

        contact.classList.add('active');
        home.classList.remove('active');
        menu.classList.remove('active')
    });
};

loadPage(homePage);

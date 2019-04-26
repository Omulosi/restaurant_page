
const loadMenuPage = () => {

	let mainContainer = document.createElement('div');
	mainContainer.classList.add('container', 'menu-page');

	let h1 = document.createElement('h1');
	h1.textContent = 'Sample some of our popular Menus';

	let menuList = document.createElement('ul');
	let menuItem1 = document.createElement('li');
	menuItem1.textContent = 'This is a menu Item';
	let menuItem2 = document.createElement('li');
	menuItem2.textContent = 'This is a menu Item';
	let menuItem3 = document.createElement('li');
	menuItem3.textContent = 'This is a menu Item';
	menuList.appendChild(menuItem1);
	menuList.appendChild(menuItem2);
	menuList.appendChild(menuItem3);


	let menuWrapper = document.createElement('div');
	menuWrapper.classList.add('menu-wrapper');

	menuWrapper.appendChild(h1);
	menuWrapper.appendChild(menuList);

	mainContainer.appendChild(menuWrapper);

	content.appendChild(mainContainer);
}

export { loadMenuPage };
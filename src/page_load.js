

const loadPage = () => {

	// HEADER
	let header = document.createElement('header');
	header.classList.add('header');

	let headerContainer = document.createElement('div');
	headerContainer.classList.add('container');

	let nav = document.createElement('nav');
	nav.classList.add('main-nav');
	let navList = document.createElement('ul');
	let menuNav = document.createElement('li');
	menuNav.innerHTML = '<a href="#" id="menuNav">Menu</a>';
	let contactNav = document.createElement('li');
	contactNav.innerHTML = '<a href="#" id="contactNav">Contact</a>';
	navList.appendChild(menuNav);
	navList.appendChild(contactNav);
	nav.appendChild(navList);

	let h1Header = document.createElement('h1');
	let aHeader = document.createElement('a');
	aHeader.setAttribute('id', 'home')
	aHeader.textContent = "Restaurant-X";
	h1Header.appendChild(aHeader);

	headerContainer.appendChild(nav);
	headerContainer.appendChild(h1Header);
	header.appendChild(headerContainer);


	// HERO
	let hero = document.createElement('section');
	hero.classList.add('hero', 'bg-image');

	let heroImg = document.createElement('img');
	heroImg.setAttribute('src', 'img/bg.jpg');

	let heroBody = document.createElement('div');
	heroBody.classList.add('container', 'hero-body');
	let heroH1 = document.createElement('h1');
	heroH1.textContent = 'Restaurant-X';
	let heroP = document.createElement('p');
	heroP.textContent = `A place to indulge all your culinary fetishes`;
	heroBody.appendChild(heroH1);
	heroBody.appendChild(heroP);

	hero.appendChild(heroImg);
	hero.appendChild(heroBody);

	// MAIN CONTENT
	let main = document.createElement('section');
	main.classList.add('main', 'container');

	// card one
	let cardOne = document.createElement('div');
	cardOne.classList.add('restaurant-info', 'clear', 'space-card');

	let cardOneImg = document.createElement('div');
	cardOneImg.classList.add('half', 'pull-left');

	let img1 = document.createElement('img');
	img1.setAttribute('src', 'img/beans.jpg');

	cardOneImg.appendChild(img1);

	let cardInfo1 = document.createElement('div');
	cardInfo1.classList.add('half', 'pull-left', 'card-info');

	let h31 = document.createElement('h3');
	h31.textContent = 'Sample our Great Menus';

	let p1 = document.createElement('p');
	p1.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
	Ea dolorem sequi, quo tempore in eum obcaecati atque quibusdam officiis est 
	dolorum minima deleniti ratione molestias numquam. Voluptas voluptates quibusdam cum?`;

	cardInfo1.appendChild(h31);
	cardInfo1.appendChild(p1);


	cardOne.appendChild(cardOneImg);
	cardOne.appendChild(cardInfo1);

	// card two
	// card one
	let cardTwo = document.createElement('div');
	cardTwo.classList.add('restaurant-info', 'clear', 'space-card');

	let cardTwoImg = document.createElement('div');
	cardTwoImg.classList.add('half', 'pull-right');

	let img2 = document.createElement('img');
	img2.setAttribute('src', 'img/location.jpg');

	cardTwoImg.appendChild(img2);

	let cardInfo2 = document.createElement('div');
	cardInfo2.classList.add('half', 'pull-left', 'card-info');

	let h32 = document.createElement('h3');
	h32.textContent = 'Sample our Great Menus';

	let p2 = document.createElement('p');
	p2.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
	Ea dolorem sequi, quo tempore in eum obcaecati atque quibusdam officiis est 
	dolorum minima deleniti ratione molestias numquam. Voluptas voluptates quibusdam cum?`;

	cardInfo2.appendChild(h32);
	cardInfo2.appendChild(p2);


	cardTwo.appendChild(cardTwoImg);
	cardTwo.appendChild(cardInfo2);

	// add to main section
	main.appendChild(cardOne);
	main.appendChild(cardTwo);


	//FOOTER

	let footer = document.createElement('footer');
	footer.classList.add('footer');
	let pFooter = document.createElement('p');
	let aFooter = document.createElement('a');
	aFooter.innerHTML = '&copy; Restaurant-X';
	pFooter.appendChild(aFooter);

	footer.appendChild(pFooter);

	//

	let homePage = document.createElement('div');
	let content = document.querySelector('#content');
	document.body.insertBefore(header, content);
	// mainContent.appendChild(header);
	homePage.appendChild(hero);
	homePage.appendChild(main);
	document.body.appendChild(footer);

	content.appendChild(homePage);

}

export { loadPage };
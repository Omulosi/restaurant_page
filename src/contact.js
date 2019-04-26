
const loadContactPage = () => {

	let mainContainer = document.createElement('div');
	mainContainer.classList.add('container', 'contact-page');

	let h1 = document.createElement('h1');
	h1.textContent = 'Contact Us';

	let form = document.createElement('form');

	let label1 = document.createElement('p');
	label1.textContent = 'Email';

	let input1 = document.createElement('input');
	input1.setAttribute('type', 'email');

	let label2 = document.createElement('p');
	label2.textContent = 'Your Message';


	let input2 = document.createElement('textarea');

	let btn = document.createElement('input');
	btn.classList.add('btn');
	btn.setAttribute('type', 'submit');

	form.appendChild(label1);
	form.appendChild(input1);
	form.appendChild(label2);
	form.appendChild(input2);
	form.appendChild(btn);

	mainContainer.appendChild(h1);
	mainContainer.appendChild(form);

	let content = document.querySelector('#content');
	content.appendChild(mainContainer);
}

export { loadContactPage };
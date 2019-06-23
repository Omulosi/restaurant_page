import navMenu from './navMenu.js';

function contactPage() {

    const hero = document.createElement("div");
    const nav = document.createElement("nav");
    const main = document.createElement("div");

    // add classes to elements
    hero.classList.add("hero");
    main.classList.add("main", "container")

    // Navigation content
    let navElems = navMenu();

    nav.appendChild(navElems);

    // main content
    const createInput = (name, type, placeholder) => {
        let elem = document.createElement(name);
        if (type) elem.setAttribute('type', type);
        elem.setAttribute('placeholder', placeholder);
        return elem;
    }
    const createLabel = (labelName) => {
        let label = document.createElement('label');
        label.innerHTML = labelName;
        return label;
    }

    let tagLine = `We'd like to hear from you`;
    let tagLineElem = document.createElement('p');
    tagLineElem.classList.add('tag-line');
    tagLineElem.innerHTML = tagLine;
    let contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');

    let nameInput = createInput('input', 'text', 'Name');
    let nameLabel = createLabel('Name');
    let emailInput = createInput('input', 'email', 'Email');
    let emailLabel = createLabel('Email');
    let msgInput = createInput('textarea', '','Message');
    let msgLabel = createLabel('Message');

    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(msgLabel);
    contactForm.appendChild(msgInput);
    
    main.appendChild(tagLineElem);
    main.appendChild(contactForm);

    // wire everything up
    let content = document.querySelector('#content');
    content.appendChild(hero)
    content.appendChild(nav)
    content.appendChild(main)
}

export default contactPage

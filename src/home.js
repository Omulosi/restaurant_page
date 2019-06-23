import navMenu from './navMenu.js';

function homePage() {

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
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Delicious Restaurant';

    let p = document.createElement('p');
    p.innerHTML = `A restaurant that strives to delight its customers with declicious meals
				and an unrivalled committment to excellent and personalised service.
                Come and indulge with your family and friends. We have a wide range of menu
                for you to choose from. There's always something for everybody.
                Besides, our picturesques location offers a tranquil environment.`

    main.appendChild(h1);
    main.appendChild(p);

    // wire everything up
    let content = document.querySelector('#content');
    content.appendChild(hero)
    content.appendChild(nav)
    content.appendChild(main)
}

export default homePage

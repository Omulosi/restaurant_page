import navMenu from './navMenu.js';

function menuPage() {

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
    h1.innerHTML = 'Our Menu';

    let menuItems = [{'name': 'Cheese Pizza', 
                      'description': 'made with fresh cheese', 
                      'price': '$5.99', 
                      'course': 'Entree'}, 
                     {'name': 'Chocolate Cake', 
                      'description': 'made with Dutch Chocolate', 
                      'price': '$3.99', 
                      'course': 'Dessert'},
                     {'name': 'Caesar Salad', 
                      'description':'with fresh organic vegetables', 
                      'price': '$5.99', 
                      'course': 'Entree'}, 
                     {'name': 'Iced Tea', 
                      'description': 'with lemon', 
                      'price': '$.99', 
                      'course': 'Beverage'}, 
                     {'name': 'Spinach Dip', 
                      'description': 'creamy dip with fresh spinach', 
                      'price': '$1.99', 
                      'course': 'Appetizer'}
                    ]
    let menuList = document.createElement('div');
    menuList.classList.add('menu-list');
    menuItems.forEach((item) => {
        let menuItem = document.createElement('div');
        let entries = Object.entries(item);
        entries.forEach((entry) => {
            let [key, val] = entry;
            let pVal = document.createElement('p');
            pVal.innerHTML = val;
            pVal.classList.add(key);
            menuItem.appendChild(pVal);
        });

        menuList.appendChild(menuItem);
    });

    main.appendChild(h1);
    main.appendChild(menuList);

    // wire everything up
    let content = document.querySelector('#content');
    content.appendChild(hero)
    content.appendChild(nav)
    content.appendChild(main)
}

export default menuPage

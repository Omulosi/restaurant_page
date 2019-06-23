
const navMenu = () => {
    // Navigation content
    let navNames = ['home', 'menu', 'contact'];
    let ul = document.createElement('ul');
    ul.classList.add('nav-menu');
    navNames.forEach((name) => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', '#');
        a.innerHTML = name;
        a.classList.add(name);
        if (name == 'home') a.classList.add('active');
        li.appendChild(a);
        ul.appendChild(li);
    });

    return ul;
}


export default navMenu;

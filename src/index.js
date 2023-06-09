import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';
import './styles.css';

const Page = (() => {
    const container = document.getElementById("content");
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    //insert header DOM element before content html ele
    document.body.insertBefore(header, container);

    //create navbar element and append to header
    const navbar = document.createElement('nav');
    navbar.setAttribute('id', 'navbar');

    header.appendChild(navbar);

    //create array for tab objects
    const tabArray = [];

    return {
        navbar,
        container,
        tabArray,
    }
})();

//create objects for each of the tabs
//objects should include an isAppended boolean for reference on event listeners
const tabFactory = function(name, page) {
    //creating index to keep track of position in array
    let index = Page.tabArray.length;

    //create element
    const tab = document.createElement("button");
    tab.textContent = `${name}`;
    tab.classList.add('button');

    //isAppended boolean to be checked
    let isAppended = {value: false};

    //add to navbar
    Page.navbar.appendChild(tab);

    //functions for append and unappend
    const append = () => {
        Page.container.appendChild(page);
        Page.tabArray[index].toggleBool()
    }
    const unappend = () => {
        Page.container.removeChild(page);
    }

    const toggleBool = () => isAppended.value = !isAppended.value;
    
    //add event listeners that check isAppended
    tab.addEventListener("click", function() {
        if(Page.tabArray[index].isAppended.value === true) {
            return;
        } else {
            Page.tabArray.forEach((elem) => {
                if(elem.isAppended.value === true){
                    elem.unappend();
                    elem.toggleBool();
                }
            });
            append();
        }
    });

    return {isAppended, unappend, toggleBool, append};
}

const nav = (() => {
    const homeTab = tabFactory("Home", home);
    Page.tabArray.push(homeTab);

    const menuTab = tabFactory("Menu", menu);
    Page.tabArray.push(menuTab);

    const contactTab = tabFactory("Contact Us", contact);
    Page.tabArray.push(contactTab);

    return { homeTab }
})();


//initialize the page
nav.homeTab.append();
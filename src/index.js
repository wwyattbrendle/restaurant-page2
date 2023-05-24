import { home } from './home.js';
import { menu } from './menu.js';

const Page = (() => {
    const container = document.getElementById("content");
    const header = document.createElement('div');

    //insert header DOM element before content html ele
    document.body.insertBefore(header, container);

    //create navbar element and append to header
    const navbar = document.createElement('nav');
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
    const tab = document.createElement("button");
    tab.textContent = `${name}`;

    //isAppended boolean to be checked
    let isAppended = false;

    //add to navbar
    Page.navbar.appendChild(tab);

    //functions for append and unappend
    const append = () => {
        Page.container.appendChild(page);
    }
    const unappend = () => {
        Page.container.removeChild(page);
        isAppended = false;
    }
    
    //add event listeners that check isAppended
    tab.addEventListener("click", function() {
        if(isAppended === true) {
            return;
        } else {
            Page.tabArray.forEach((elem) => {
                if(elem.isAppended === true){
                    elem.unappend();
                }
            });
            append();
            isAppended = true;
        }
        console.log(Page.tabArray);
    });

    return {isAppended};
}

const nav = (() => {
    const homeTab = tabFactory("Home", home);
    const menuTab = tabFactory("Menu", menu);
    const contactTab = tabFactory("Contact Us", home);

    Page.tabArray.push(homeTab);
    Page.tabArray.push(menuTab);
    Page.tabArray.push(contactTab);

    return {homeTab, menuTab, contactTab};

})();

console.log("working");



///unappend not working because isAppended is not changing upon run of append
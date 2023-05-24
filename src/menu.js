import FriedRice from './fried rice.jpg';
import PotStickers from './pot stickers.jpg';
import SalmonRoll from './salmon roll.jpg';
import SexyShrimp from './sexy shrimp.jpg';
import YellowCurry from './yellow curry.jpg';

function component() {
    const element = document.createElement('div');
    element.setAttribute('id', 'menu-element');

    const title = document.createElement('h1');
    title.setAttribute('id', 'menu-title');
    title.textContent = "Menu";

    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    const item3 = document.createElement('div');
    const item4 = document.createElement('div');
    const item5 = document.createElement('div');

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');

    menuContainer.appendChild(item1);
    menuContainer.appendChild(item2);
    menuContainer.appendChild(item3);
    menuContainer.appendChild(item4);
    menuContainer.appendChild(item5);

    const pic1 = new Image();
    pic1.src = FriedRice;
    pic1.classList.add("menu-image");
    const pic2 = new Image();
    pic2.src = PotStickers;
    pic2.classList.add("menu-image");
    const pic3 = new Image();
    pic3.src = SalmonRoll;
    pic3.classList.add("menu-image");
    const pic4 = new Image();
    pic4.src = SexyShrimp;
    pic4.classList.add("menu-image");
    const pic5 = new Image();
    pic5.src = YellowCurry;
    pic5.classList.add("menu-image");

    const desc1 = document.createElement('p');
    desc1.textContent = "Fried Rice";
    const desc2 = document.createElement('p');
    desc2.textContent = "Pork Pot Stickers";
    const desc3 = document.createElement('p');
    desc3.textContent = "Salmon Roll Sushi";
    const desc4 = document.createElement('p');
    desc4.textContent = "Sexy Shrimp";
    const desc5 = document.createElement('p');
    desc5.textContent = "Yellow Curry";

    item1.appendChild(pic1);
    item1.appendChild(desc1);
    item1.classList.add('item');

    item2.appendChild(pic2);
    item2.appendChild(desc2);
    item2.classList.add('item');

    item3.appendChild(pic3);
    item3.appendChild(desc3);
    item3.classList.add('item');

    item4.appendChild(pic4);
    item4.appendChild(desc4);
    item4.classList.add('item');

    item5.appendChild(pic5);
    item5.appendChild(desc5);
    item5.classList.add('item');

    element.appendChild(title);
    element.appendChild(menuContainer);

    return element;
}

const menu = component();

export {menu};
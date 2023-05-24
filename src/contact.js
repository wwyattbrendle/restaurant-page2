import Pagoda from './pagoda.jpg';

function component() {
    const element = document.createElement('div');

    const img = new Image();
    img.src = Pagoda;

    const title = document.createElement('h1');
    title.textContent = "Contact Us";

    const info = document.createElement('p');
    info.innerHTML = "(123)456-7890<br><br>contactus@firenoodle.com";

    element.appendChild(img);
    element.appendChild(title);
    element.appendChild(info);

    return element;
}

const contact = component();

export {contact};
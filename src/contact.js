import Pagoda from './pagoda.jpg';

function component() {
    const element = document.createElement('div');
    element.setAttribute('id', 'contact-element');

    const img = new Image();
    img.src = Pagoda;
    img.classList.add("hero-image");

    const title = document.createElement('h1');
    title.textContent = "Contact Us";
    title.setAttribute('id', 'contact-title');

    const info = document.createElement('p');
    info.innerHTML = "(123)456-7890<br><br>contactus@firenoodle.com";
    info.setAttribute('id', 'subtext-contact');

    element.appendChild(img);
    element.appendChild(title);
    element.appendChild(info);

    return element;
}

const contact = component();

export {contact};
import Chef from './chef.jpg';

function component() {
    //create element to return with everything appended
    const element = document.createElement('div');
    element.setAttribute('id', 'home-element');

    //image for home page
    const img = new Image();
    img.src = Chef;
    img.classList.add("hero-image");

    //headline for page
    const title = document.createElement('h1');
    title.textContent = "Flame Noodle Asian Grill";
    title.setAttribute('id', 'home-title');

    //subtext for title
    const subtext = document.createElement('p');
    subtext.setAttribute('id', 'home-subtext');
    subtext.innerHTML = "Welcome to Flame Noodle, where taste meets excellence.  <br>Voted best Asian cuisine in the area, 6 years in a row."

    //append all to the element
    element.appendChild(img);
    element.appendChild(title);
    element.appendChild(subtext);

    return element;
}

const home = component();

export { home };
const menu = document.querySelector('.menu')
const nav = document.querySelector('.navigation')

menu.addEventListener('click', function(){
   nav.classList.toggle('open');
   menu.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
      templeName: "Logan Utah",
      location: "Logan, Utah, United States",
      dedicated: "1877, May 18",
      area: 119619,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-52349-thumb.jpg"
   },
   {
      templeName: "Columbia River Washington",
      location: "Richland, Washington, United States",
      dedicated: "2001, November 18",
      area: 16880,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/columbia-river-washington-temple/columbia-river-washington-temple-38512-thumb.jpg"
   },
   {
      templeName: "Portland Oregon",
      location: "Lake Oswego, Oregon, United States",
      dedicated: "1989, August 19-21",
      area: 80500,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/portland-oregon-temple/portland-oregon-temple-30180-thumb.jpg"
   }
];

createTemple(temples)

const home = document.querySelector(".home");
const oldTemples = document.querySelector(".old");
const newTemples = document.querySelector(".new");
const largeTemples = document.querySelector(".large");
const smallTemples = document.querySelector(".small");

function date(dedication){
    const temp = dedication.split(", ");
    return parseInt(temp[0]);
}

home.addEventListener("click", () => {
    createTemple(temples);
});

oldTemples.addEventListener("click", () => {
    createTemple(temples.filter(temple => date(temple.dedicated) < 1900));
});

newTemples.addEventListener("click", () => {
   createTemple(temples.filter(temple => date(temple.dedicated) > 2000));
});

largeTemples.addEventListener("click", () => {
    createTemple(temples.filter(temple => temple.area > 90000))
});

smallTemples.addEventListener("click", ()=>{
    createTemple(temples.filter(temple => temple.area < 10000))
});

function createTemple(filteredTemple) {
    const templeClass = document.querySelector(".temples")
    while (templeClass.firstChild){
        templeClass.firstChild.remove();
    }
    filteredTemple.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("card")
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size: </span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        templeClass.appendChild(card);
    });

}
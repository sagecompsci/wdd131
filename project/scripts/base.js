// Copyright and last modified
const year = new Date();

const copyright = document.querySelector("#copyright");
const modified = document.querySelector("#modified");

copyright.innerHTML = `${year.getFullYear()}`;
modified.innerHTML = `Last Modified: ${document.lastModified}`;

// Menu
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-bar');

menu.addEventListener('click', function(){
    nav.classList.toggle('open');
    menu.classList.toggle('open');
});

// Cats page
const cats = [
    {
        name: "Korra",
        age: "9 years",
        gender: "Female",
        description: "Korra makes you work for her attention, but once she accepts you as part of " +
            "her family, she will never leave you alone. She enjoys being in the same room as her favorite people.",
        image: "images/adopt/korra.webp",
    },
    {
        name: "Iroh",
        age: "9 years",
        gender: "Male",
        description: "Iroh is the sweetest cat you will ever meet. He loves snuggle time, and will follow you " +
            "around until you sit down and snuggle with him. He also enjoys riding around on your shoulder.",
        image: "images/adopt/iroh.webp",
    },
    {
        name: "Popcorn",
        age: "0 years",
        gender: "Male",
        description: "Popcorn is an old man who appreciates treats and snuggle time. He also enjoys the occasional " +
            "play time, although he is too lazy and old to run around. He loves taking naps on beds.",
        image: "images/adopt/popcorn.webp",
    },
    {
        name: "Appa",
        age: "3 years",
        gender: "Male",
        description: "Appa is a shy boy who is slow to warm up to people. He loves hanging out with his people and " +
            "will wait for you when you leave. When he decides to snuggle with you, it makes you feel very proud.",
        image: "images/adopt/appa.webp",
    },
    {
        name: "Momo",
        age: "3 years",
        gender: "Female",
        description: "Momo is a very snuggly cat. If you sit down for 2 seconds, she will run over and jump on you " +
            "to have snuggle time. She melts on you and stays for hours. She loves people so much.",
        image: "images/adopt/momo.webp",
    },
    {
        name: "Luna",
        age: "3 months",
        gender: "Female",
        description: "Luna is a soft-hearted sweetheart who loves peaceful naps in sunny windows and gentle head " +
            "scratches. She’s calm, affectionate, and gets along great with gentle kids or other mellow pets.",
        image: "images/adopt/cat1.webp",
    },
    {
        name: "Milo",
        age: "3 months",
        gender: "Male",
        description: "Milo is a bundle of energy and mischief! He’s always on the move, chasing toys, climbing cat " +
            "trees, and investigating every nook and cranny. He’s playful, outgoing, and full of personality.",
        image: "images/adopt/cat2.webp",
    },
    {
        name: "Cleo",
        age: "5 years",
        gender: "Female",
        description: "Cleo is a graceful, independent cat who enjoys her space but also appreciates quiet " +
            "companionship. She’ll curl up beside you once she feels safe and loves a calm, cozy home environment.",
        image: "images/adopt/cat3.webp",
    },
    {
        name: "Jasper",
        age: "6 years",
        gender: "Male",
        description: "Jasper is a silly, social guy who loves to entertain. He’s curious about everything and " +
            "follows people around like a little assistant. If you’re looking for a fun-loving buddy, Jasper’s " +
            "your guy.",
        image: "images/adopt/cat4.webp",
    },
    {
        name: "Oliver",
        age: "4 years",
        gender: "Female",
        description: "Oliver is a classic lap cat who just wants to love and be loved. He’s laid-back, " +
            "affectionate, and would happily spend all day snuggled up next to you, purring away.",
        image: "images/adopt/cat5.webp",
    },
    {
        name: "Willow",
        age: "4 years",
        gender: "Female",
        description: "Willow is a shy, soft-spoken kitty with a heart of gold. She takes a little time to trust, " +
            "but once she does, she’ll be your constant companion. She thrives in a quiet, patient home.",
        image: "images/adopt/cat6.webp",
    },
    {
        name: "Shadow",
        age: "6 years",
        gender: "Male",
        description: "Shadow is quiet and observant, often found lounging in cozy corners or watching the " +
            "world go by from a window perch. He’s a bit shy at first, but once he feels at home, he’s loyal " +
            "and loving.",
        image: "images/adopt/cat7.webp",
    },
    {
        name: "Nala",
        age: "2 months",
        gender: "Female",
        description: "Nala is confident, clever, and just a little sassy. She loves attention, plays like a pro, " +
            "and runs the show with charm. She’d do best in a home where she can be the queen she is.",
        image: "images/adopt/cat10.webp",
    },
    {
        name: "Theo",
        age: "3 months",
        gender: "Male",
        description: "Theo is a mellow, affectionate cat who enjoys snuggling, chatting softly, and making " +
            "new friends. He’s easygoing, friendly with other animals, and perfect for a relaxed household.",
        image: "images/adopt/cat8.webp",
    },
    {
        name: "Maple",
        age: "8 months",
        gender: "Female",
        description: "Maple is a bright, happy-go-lucky cat with a purr that doesn’t quit. She loves to play, " +
            "cuddle, and greet you at the door. She’s full of warmth and loves being the center of attention.",
        image: "images/adopt/cat9.webp",
    },
];

function displayCats(catList) {
    const catsClass = document.querySelector(".cats");
    catList.forEach(cat => {
        let card = document.createElement("section");
        card.classList.add("card");
        let text = document.createElement("section");
        text.classList.add("text");
        let name = document.createElement("h3");
        let info = document.createElement("p");
        let description = document.createElement("p");
        let image = document.createElement("img")

        name.textContent = cat.name;
        info.innerHTML = `${cat.gender}  -  ${cat.age} old`;
        description.textContent = cat.description;
        image.setAttribute("src", cat.image);
        image.setAttribute("alt", "cat image");
        image.setAttribute("loading", "lazy");

        text.appendChild(name);
        text.appendChild(info)
        text.appendChild(description);

        card.appendChild(image);
        card.appendChild(text);

        catsClass.appendChild(card);
    });
}


function displayCount(catList) {
    const count = document.querySelector(".count");
    let length = catList.length;
    let display = `${length}`;
    if (length >= 10) {
        display = "10+";
    }
    if (length >= 25) {
        display = "25+";
    }
    if (length >= 50) {
        display = "50+";
    }

    count.innerHTML = `${display}`
}

displayCats(cats);
displayCount(cats);

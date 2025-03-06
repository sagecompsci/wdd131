const year = new Date();

const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");

currentyear.innerHTML = `${year.getFullYear()}`;
lastmodified.innerHTML = `Last Modified: ${document.lastModified}`;
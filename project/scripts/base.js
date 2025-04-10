const year = new Date();

const copyright = document.querySelector("#copyright");
const modified = document.querySelector("#modified");

copyright.innerHTML = `${year.getFullYear()}`;
modified.innerHTML = `Last Modified: ${document.lastModified}`;

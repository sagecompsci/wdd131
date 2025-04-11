const saveForm = document.querySelector(".saveForm");

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let reason = document.querySelector("#reason");
let message = document.querySelector("#message");

let inputs = [name, email, reason, message];

function reset() {
    saveForm.value = "Save Form";
}

function save() {
    for (let i = 0; i < inputs.length; i++) {
        let item = inputs[i];
        localStorage.setItem(`${i}`, item.value);
    }
    saveForm.value = "Saved";
    setTimeout(reset, 5000);
}

function load() {
    for (let i = 0; i < inputs.length; i++) {
        let item = inputs[i];
        item.value = localStorage.getItem(`${i}`);
    }
}

window.onload = function () {
    load();
}

saveForm.addEventListener("click", function(){
    save();
});
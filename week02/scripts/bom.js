const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const li = document.createElement('li');
const delButton = document.createElement('button');

input.focus();
input.value = '';

button.addEventListener('click', function(){
    if (input.value.trim() !== ''){
        li.textContent = input.value;
        delButton.textContent = '❌';
        li.append(delButton);
        list.append(li);
    }
});

delButton.addEventListener('click', function(){
    list.removeChild(li);
    input.focus();
    input.value = '';
});

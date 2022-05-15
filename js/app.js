const app = {
    input: document.querySelector('input[type="text"]'),
    button: document.querySelector('button'),
    todoList: document.querySelector('.todo__list')
}

function submitHandler(e) {
    e.preventDefault();

    const task = app.input.value;

    if (!task) {
        alert('Please fill the field');
        return;
    }

    const renderList = document.createElement('li');

    renderList.innerHTML = `
        <span>${task}</span>
        <span class="completed"></span>
        <span class="delete"></span>
    `;

    let getLocalStorage = localStorage.getItem('New todo');

    if (getLocalStorage === null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage)
    }

    listArr.push(task);
    localStorage.setItem('New todo', JSON.stringify(listArr));

    app.todoList.appendChild(renderList);

}

showTodos();

function showTodos() {
    let getLocalStorage = localStorage.getItem('New todo');

    if (getLocalStorage === null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage)
    }

    console.log(listArr);

    let newElement = '';

    listArr.forEach((element, index) => {
        newElement += `<li data-id="${index}">${element} <span class="delete"><i class="fa-solid fa-trash-can"></i></span></li>`;
    });

    app.todoList.innerHTML = newElement;
}

function removeTodo() {
    
}


// Events
app.button.addEventListener('click', submitHandler);

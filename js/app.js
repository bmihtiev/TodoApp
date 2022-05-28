const app = {
    input: document.querySelector('input[type="text"]'),
    button: document.querySelector('button'),
    todoList: document.querySelector('.todo__list'),
    btnDelete: document.querySelector('.fa-trash-can'),
    total: document.querySelector('.todo__total')
}

showTodos();

function createTodo(e) {
    e.preventDefault();

    const task = app.input.value;

    if (!task) {
        alert('Please fill the field');
        return;
    }

    const renderList = document.createElement('li');

    renderList.innerHTML = `
        <span><input type="checkbox"> ${task}</span>
        <i class="fa-solid fa-trash-can"></i>
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
    app.input.value = '';

    showTodos();
}


function showTodos() {
    let getLocalStorage = localStorage.getItem('New todo');

    if (getLocalStorage === null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage)
    }

    let newElement = '';

    listArr.forEach((element, index) => {
        newElement += `<li><span><input type="checkbox"> ${element}</span> <i onclick="removeItem(${index})" class="fa-solid fa-trash-can"></i></li>`;
    });

    app.todoList.innerHTML = newElement;

    app.total.innerHTML = 'Total: ' + listArr.length

}

app.todoList.addEventListener('change', function (e) {
    if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox')
        itemComplete();
});

function removeItem(index) {
    let getLocalStorage = localStorage.getItem('New todo');

    if (getLocalStorage === null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage)
    }

    listArr.splice(index, 1);
    localStorage.setItem('New todo', JSON.stringify(listArr));
    showTodos();
}



// Events
app.button.addEventListener('click', createTodo);
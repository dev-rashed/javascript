console.log('JS works fine');

// Define UI
let form = document.querySelector('#todo_form');
let listInput = document.querySelector('#new_todo');
let filter = document.querySelector('#filter_todo');
let todoList = document.querySelector('#todo_list');
let clearBtn = document.querySelector('#clear_todo');

// Define Event Listner
form.addEventListener('submit', addList);
todoList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTodo);
filter.addEventListener('keyup', filterTodo);

// Define Function
// Add list
function addList(e) {
    e.preventDefault();
    if (listInput.value === '') {
        alert('Please add a value');
    } else {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(listInput.value + '  '));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link)
        todoList.appendChild(li);
        listInput.value = '';
    }
}

// Remove list
function removeTask(e) {
    e.preventDefault();
    if (e.target.hasAttribute('href')) {
        if (confirm('Are you sure you want to delete?')) {
            let el = e.target.parentElement;
            el.remove();
        }
    }
}

// Clear Todo
function clearTodo(e) {
    e.preventDefault();
    todoList.innerHTML = '';
}

// Filter Todo
function filterTodo(e) {
    e.preventDefault();
    let text = e.target.value.toLowerCase();

    document.querySelectorAll('li').forEach(todo => {
        let item = todo.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            todo.style.display = 'block';
        } else {
            todo.style.display = 'none';
        }
    })
}
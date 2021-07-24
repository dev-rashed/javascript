console.log('Happy JS :)');

// UI Define
let form = document.querySelector('#todo_form');
let addInput = document.querySelector('#new_todo');
let filter = document.querySelector('#filter_todo');
let fullList = document.querySelector('#todo_list');
let clear = document.querySelector('#clear_todo');

// Define Listener
form.addEventListener('submit', createList);
fullList.addEventListener('click', removeList);
clear.addEventListener('click', clearList);
filter.addEventListener('keyup', filterList);
document.addEventListener('DOMContentLoaded', getList);

// Functions
// Create New List
function createList(e) {
    e.preventDefault();
    if (addInput.value === '') {
        alert('No data, please add data :(');
    } else {
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'X';
        li.textContent = addInput.value + '  ';
        li.appendChild(link);
        fullList.appendChild(li);
        addIntoLocalStorage(addInput.value);
        addInput.value = '';
        console.log('Added new :)');
    }
}

// Remove single List
function removeList(e) {
    if (e.target.hasAttribute('href')) {
        let li = e.target.parentNode;
        if (confirm('Delete! Are you sure?')) {
            let item = li.firstChild.textContent;
            li.remove();
            console.log(`${item} removed :(`);
            removeFromLocal(item);
        }
    }
}

// Clear List
function clearList() {
    if (fullList.hasChildNodes()) {
        let li = document.querySelectorAll('li');
        if (confirm('Delete!, full list will be deleted')) {
            let count = li.length;
            li.forEach(item => {
                item.remove();
            });
            console.log(`${count} item removed :(`);
        }
    }
}

// Filter List
function filterList(e) {
    let searchValue = e.target.value.toLowerCase();
    // console.log(searchValue);
    let toDoListItem = document.querySelectorAll('li');
    if (searchValue !== null) {
        toDoListItem.forEach(item => {
            // console.log(item);
            let li = item.textContent.toLowerCase();
            if (li.indexOf(searchValue) != -1) {
                console.log(`${searchValue} Match to : ${li}`);
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
                // console.log('Not Matched');
            }
        })
    }
}

// Add to local storage
function addIntoLocalStorage(item) {
    let lists;
    if (localStorage.getItem('lists') === null) {
        lists = [];
    } else {
        lists = JSON.parse(localStorage.getItem('lists'));
    }
    console.log(lists);

    lists.push(item);
    localStorage.setItem('lists', JSON.stringify(lists));
}

function getList() {
    let lists;
    if (localStorage.getItem('lists') === null) {
        lists = [];
    } else {
        lists = JSON.parse(localStorage.getItem('lists'));
    }

    lists.forEach(item => {
        // console.log(item);
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'X';
        li.textContent = item + '  ';
        li.appendChild(link);
        fullList.appendChild(li);
    });
}

// Remove From localStorage
function removeFromLocal(item) {
    let lists;
    if (localStorage.getItem('lists') === null) {
        lists = [];
    } else {
        lists = JSON.parse(localStorage.getItem('lists'));
    }
    lists.forEach(li => {
        console.log(li);
    });
}
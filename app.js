const input = document.querySelector('.new-input');
const addBtn = document.querySelector('.add-item');
const taskList = document.querySelector('.task-list');
const clearBtn = document.querySelector('.clear-btn');
todos = JSON.parse(localStorage.getItem('todos')) || [];

input.addEventListener('keyup', () => {
    if (input.value.trim() != 0) {
        addBtn.classList.add('active');
    } else {
        addBtn.classList.remove('active');
    }
})
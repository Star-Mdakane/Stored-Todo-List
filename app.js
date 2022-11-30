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
});

addBtn.addEventListener('click', () => {

    todos.push(input.value);

    localStorage.setItem('todos', JSON.stringify(todos));
    showItems();
});

function showItems() {
    // let taskIn = '';

    taskList.innerHTML = '';

    todos.forEach(todo => {
        // taskIn += `
        // <div class="task">
        //     <input type="text" class="task-input" value="${todo}">
        //     <span class="action edit"><i class="fa-sharp fa-solid fa-file-pen"></i></i></span>
        //     <span class="action delete"><i class="fa-solid fa-trash-can"></i></i></i></span>
        // </div>
        // `
        let task = document.createElement('div');
        task.classList.add('task');


        let inp = document.createElement('input');
        let edit = document.createElement('span');
        let del = document.createElement('span');

        inp.classList.add('task-input');
        edit.classList.add('edit');
        del.classList.add('delete');

        inp.value = `${todo}`
        edit.innerHTML = `<i class="fa-sharp fa-solid fa-file-pen"></i></i>`
        del.innerHTML = `<i class="fa-solid fa-trash-can"></i></i></i>`

        task.append(inp);
        task.append(edit);
        task.append(del);

        taskList.append(task);
    })

    input.value = '';

    // taskList.innerHTML = taskIn;
}

showItems();
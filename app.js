const input = document.querySelector('.new-input');
const addBtn = document.querySelector('.add-item');
const taskList = document.querySelector('.task-list');
const clearBtn = document.querySelector('.clear-btn');
todos = JSON.parse(localStorage.getItem('todos')) || [];
// const taskItem = document.querySelector('task-input');

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
    addBtn.classList.remove('active');
});

function showItems() {
    // let taskIn = '';

    taskList.innerHTML = '';

    todos.forEach((todo, ind) => {
        // taskIn += `
        // <div class="task">
        //     <input type="text" class="task-input" value="${todo}">
        //     <span class="edit"><i class="fa-sharp fa-solid fa-file-pen"></i></i></span>
        //     <span class="delete"><i class="fa-solid fa-trash-can"></i></i></i></span>
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

        del.addEventListener('click', (e) => {
            todos = todos.filter(el => el != todo);

            localStorage.setItem('todos', JSON.stringify(todos));
            showItems();
        });

        edit.addEventListener('click', (e) => {
            let inp = document.querySelector('.task-input');
            inp.focus();
            inp.addEventListener('blur', (e) => {
                todos.splice(ind, 1, e.target.value);
                // todo = input.value;
                localStorage.setItem('todos', JSON.stringify(todos));
                showItems();
            })

        })


        clearBtn.addEventListener('click', (e) => {
            todos = [];
            localStorage.setItem('todos', JSON.stringify(todos));
            showItems();
        })
    })

    input.value = '';

    // taskList.innerHTML = taskIn;
}

showItems();



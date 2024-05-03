import { patchTask, getAllTodos, deleteTask } from "./todoAPI.js";

export function displayTodos(todos){
    const todoContainer = document.querySelector('#todoContainer');
    todoContainer.innerHTML = '';

    for( const key in todos){
        console.log(key);
        console.log(todos[key].task, todos[key].done);

        const taskContainer = document.createElement('div');
        const taskEl = document.createElement('span');
        taskEl.id = key;
        taskEl.innerText = todos[key].task;
        if(todos[key].done) {
            taskEl.classList.add('done');
            const delBtn = document.createElement('button');
            delBtn.innerText = 'X';
            taskContainer.append(delBtn);

            delBtn.addEventListener('click', ()=>{
                deleteTask(key)
                    .then(getAllTodos)
                    .then(displayTodos);
            })
        }

        taskEl.addEventListener('click', event =>{
            console.log(key, todos[key].done);
            // Skicka med firebaseID:t och false om done är true / true om done är false
            patchTask(key, !todos[key].done)
                .then(getAllTodos)
                .then(displayTodos)
        })
        taskContainer.prepend(taskEl);
        todoContainer.prepend(taskContainer)
        ;
    }
}
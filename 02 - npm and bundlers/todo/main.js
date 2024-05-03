import { getAllTodos, addNewTask } from "./modules/todoAPI.js";
import { displayTodos } from "./modules/display.js";

const formEl = document.querySelector('form');
// const todoContainer = document.querySelector('#todoContainer');

getAllTodos().then( displayTodos );

formEl.addEventListener('submit', event =>{
    event.preventDefault();

    const newTask = formEl.querySelector('input').value;
    addNewTask(newTask)
        .then(getAllTodos)
        .then(displayTodos);
    
    formEl.reset();
})

// todoContainer.addEventListener('click', event => {
//     console.log(event.target.id)
// })
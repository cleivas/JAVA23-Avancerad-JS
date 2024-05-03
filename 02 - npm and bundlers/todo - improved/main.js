import { getAllTodos, addNewTask, patchTask, deleteTask } from "./modules/todoAPI.js";
import { displayTodos } from "./modules/display.js";

const formEl = document.querySelector('form');
const todoContainer = document.querySelector('#todoContainer');

getAllTodos().then( displayTodos );

formEl.addEventListener('submit', event =>{
    event.preventDefault();

    const newTask = formEl.querySelector('input').value;
    addNewTask(newTask)
        .then(getAllTodos)
        .then(displayTodos);
    
    formEl.reset();
})

todoContainer.addEventListener('click', event => {
    // Elementet som användaren klickade på
    const clickedElement = event.target;
    let firebaseID;

    // Om användaren har klickat på en knapp
    if(clickedElement.tagName === 'BUTTON'){
        // Hämta ID:t från det närmaste parent-elementet som har css-klassen taskItem
        firebaseID = clickedElement.closest('.taskItem').id;
        
        deleteTask(firebaseID)
            .then(getAllTodos)
            .then(displayTodos);
    }
    // OM användaren har klickat på ett annat element som inte är av typen MAIN
    else if (clickedElement.tagName != 'MAIN'){
        // Om clickedElement.id existerar klickade användaren på diven och id:t sparas  ner i firebaseID
        // Om det istället är en tom string klickade andändaren på ett element inuti diven, i det fallet hämtar vi id:t från närmaste parentelementet med klassen taskItem

        firebaseID = clickedElement.id ? clickedElement.id : clickedElement.closest('.taskItem').id;

        // Samma görs med informationen för done
        let done = clickedElement.dataset.done ? clickedElement.dataset.done : clickedElement.closest('.taskItem').dataset.done;

        // done innehåller nu en string eftersom vi hämtade det från ett html-attribut. Vi behöver type-casta det till en boolean.
        // Vi gör det genom att kolla om done är like med 'true'
        done = done == 'true';

        patchTask(firebaseID, !done)
            .then(getAllTodos)
            .then(displayTodos);
    }
})
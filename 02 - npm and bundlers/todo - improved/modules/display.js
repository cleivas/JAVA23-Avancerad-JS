
export function displayTodos(todos){
    const todoContainer = document.querySelector('#todoContainer');
    todoContainer.innerHTML = '';

    for( const key in todos){
        const taskContainer = document.createElement('div');
        const taskEl = document.createElement('p');

        // Destructar task-objektet
        const {task, done} = todos[key];

        taskContainer.id = key;
        taskContainer.classList.add('taskItem')

        // Lägger till attributet data-done 
        taskContainer.dataset.done = done;
        taskEl.innerText = task;

        taskContainer.append(taskEl);

        if(done) {
            taskContainer.classList.add('done');
            const delBtn = document.createElement('button');
            delBtn.innerText = 'X';
            taskContainer.append(delBtn);
        }

        todoContainer.prepend(taskContainer);
    }
}
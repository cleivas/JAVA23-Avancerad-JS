const baseUrl = "https://webb23-1babd-default-rtdb.europe-west1.firebasedatabase.app/todo-list";

export async function getAllTodos(){
    const url = baseUrl + '.json';

    const response = await fetch(url);
    const todos = await response.json();

    return todos;
}

export async function addNewTask(task){
    const newTask = {
        task,
        done: false
    }
    const url = baseUrl + '.json';
    const options = {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    const response = await fetch(url, options);
    const firebaseID = await response.json();
}

export async function patchTask(firebaseID, done){
    const url = baseUrl + `/${firebaseID}.json`;
    const options = {
        method: 'PATCH',
        body: JSON.stringify({done}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    const response = await fetch(url, options);
    const data = await response.json();
}

export async function deleteTask(firebaseID){
    const url = baseUrl + `/${firebaseID}.json`;
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options);
    const data = await response.json();
}
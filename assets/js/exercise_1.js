let listTask = [];

function Task(name) {
    this.name = name;
}


function addTask(name) {
    var objetoTask = new Task(name);
    listTask.push(objetoTask);
    alert('Tarea agregada con exito');
    showTasks(objetoTask);
}

const buttonTask = document.getElementById("button-task");

buttonTask.addEventListener('click', function () {

    const name = document.getElementsByClassName("input-task")[0].value;
    addTask(name);

})


function showTasks(objetoTask) {
    let table = document.getElementById("table-tasks");
    let body = document.createElement("tbody");

    let row = document.createElement("tr");
    let celda;
    let textoCelda;

    debugger
    let checkBox = `-`;
    celda = document.createElement("td");
    textoCelda = document.createTextNode(checkBox);
    celda.appendChild(textoCelda);
    row.appendChild(celda);

    celda = document.createElement("td");
    textoCelda = document.createTextNode(objetoTask.name);
    celda.appendChild(textoCelda);
    row.appendChild(celda);

    body.appendChild(row);

    table.appendChild(body);
}


function post(title, body) {
    this.title = title;
    this.body = body;
    this.userId = 1;
}

const buttonCreate = document.getElementById("button-create");

buttonCreate.addEventListener('click', function () {
    const title = document.getElementsByClassName("input-title")[0].value;
    const body = document.getElementsByClassName("input-body")[0].value;
    var objetoPost = new post(title, body);
    createPost(objetoPost);
})

function createPost(objetoPost) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(objetoPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => alert('Post agregado con éxito'));
    consultPost();
}

function consultPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => showTable(json));
}

function showTable(object) {
    let table = document.getElementById("table-Post");
    let body = document.createElement("tbody");

    let row;
    let celda;
    let textoCelda;

    object.slice(1, 5).forEach(element => {
        debugger
        row =document.createElement("tr");
        celda = document.createElement("td");
        textoCelda = document.createTextNode(element.id);
        celda.appendChild(textoCelda);
        row.appendChild(celda);

        celda = document.createElement("td");
        textoCelda = document.createTextNode(element.title);
        celda.appendChild(textoCelda);
        row.appendChild(celda);

        celda = document.createElement("td");
        textoCelda = document.createTextNode("");
        celda.appendChild(textoCelda);
        row.appendChild(celda);

    });

    body.appendChild(row);

    table.appendChild(body);
}

function deletePost(idPost) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((json) => alert('Post eliminado con éxito'));
}

function updatePost(objetoUser) {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify(objetoUser),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => alert('Post modificado con éxito'));
}





var todoArray = [];
function addTodo() {
    let myTodo = document.getElementById('todoinp').value
    if (myTodo != ""){
        let todoItem = {name: myTodo, done:false}
        todoArray.push(todoItem)
        todoinp.value = ""
        todoinp.focus()
        showTodo()
        document.getElementById('remark').innerHTML = 'Your Have (' + todoArray.length + ') task(s) on your list'
        console.log(todoArray);
    }
}

function showTodo() {
    let todoContent = ""
    let i = 0;
    for (i = 0; i < todoArray.length; i++) {
        if (todoArray[i].done){
            todoContent += `<div class="shadow m-2 p-2 mb-1 text-success">${todoArray[i].name}</div>`
        } else {
            todoContent += `<div class="shadow m-2 p-2 mb-1 text-danger">${todoArray[i].name} <button class="btn-danger btn-sm float-right" onclick="markAsDone">Mark as done</button></div>`
        }
           
        document.getElementById('todoArea').innerHTML = todoContent
    }   
}
function clearTodo() {
    todoArray.length = 0;
    showTodo()
}

function markAsDone() {
    
}

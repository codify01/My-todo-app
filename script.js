var todoArray = [];
function addTodo() {
    let myTodo = document.getElementById('todoinp').value
    if (myTodo != ""){
        todoArray.push(myTodo)
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
        todoContent += `<div class="shadow m-2 p-2 mb-1">${todoArray[i]}</div>`
           
        document.getElementById('todoArea').innerHTML = todoContent
    }   
}
function clearTodo() {
    todoArray.length = 0;
}

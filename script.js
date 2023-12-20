var todoArray = [];
function addTodo() {
    let myTodo = document.getElementById('todoinp').value
    if (myTodo != ""){
        let todoItem = {name: myTodo, done:false}
        todoArray.push(todoItem)
        todoinp.value = ""
        todoinp.focus()
        showTodo()
        remark()
        markAsDone()
        console.log(todoArray);
    }
}

function showTodo() {
    let todoContent = ""
    let i = 0;
    for (i = 0; i < todoArray.length; i++) {
        if (todoArray[i].done){
            todoContent += `<div class="shadow m-2 p-2 mb-1 text-success">${todoArray[i].name} <button class="btn btn-success btn-sm float-end">Done</button></div>`
        } else {
            todoContent += `<div class="shadow m-2 p-2 mb-1 text-danger">${todoArray[i].name} <button class="btn btn-danger btn-sm float-end" onclick="markAsDone(${i})">Mark as done</button></div>`
        }
        
        document.getElementById('todoArea').innerHTML = todoContent
    }   
}
function remark(){
    // let pending = todoArray.filter(a => !a.done);
    let pending = 0;
    let i;
    for (i = 0; i < todoArray.length; i++ ){
        if(!todoArray[i].done){
            pending += 1
        }
    }
    if (pending != 0) {
            document.getElementById('remark').innerHTML = 'Your Have (' + pending + ') task(s) on your list'
        } else {
        document.getElementById('remark').innerHTML = "You don't have any task on your list"
    }

}
function clearTodo() {
    todoArray.length = 0;
    // showTodo()
}

function markAsDone(index) {
    todoArray[index].done = true;
    // console.log(todoArray[index]);
    showTodo()
    remark()
}

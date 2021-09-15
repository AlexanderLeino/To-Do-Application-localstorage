// select DOM Elements
var newTodoForm = document.getElementById('new-todo-form')
var newTodoInput = document.getElementById('new-todo')
var todoList = document.getElementById('todos-list')

var todos = JSON.parse(localStorage.getItem('todos')) || []
function removeTodo (event) {
    if(event.target.tagName === 'BUTTON'){
        var idx = event.target.parentElement.getAttribute('data-index')
        todos.splice(idx, 1)
        localStorage.setItem('todos', JSON.stringify(todos))
        renderTodos()
        

    }
}
newTodoForm.addEventListener('submit', addToDo)
todoList.addEventListener('click', removeTodo)
function renderTodos (){
    todoList.innerHTML = ''
    for (var i = 0; i < todos.length; i++){
        var li = document.createElement('li')
        li.innerText = todos[i]
        todoList.appendChild(li)
        var button = document.createElement('button')
        button.innerHTML =  '&#10004'
        li.appendChild(button)
        // add data-id atribute to lis
        li.setAttribute('data-index', i)
        
        // create button el
        // add checkmark to button &#10004;
        //append button into li
    }
}

function addToDo(event){
    event.preventDefault()
    var newTodoText = newTodoInput.value
    todos.push(newTodoText)
    localStorage.setItem('todos', JSON.stringify(todos))
    newTodoInput.value = ''
    renderTodos()
}
newTodoForm.addEventListener('submit', addToDo)


localStorage.setItem('myName', 'Alexander')
var myName = localStorage.getItem('myName')
console.log(myName)
renderTodos()
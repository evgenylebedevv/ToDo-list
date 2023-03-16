const list = document.getElementById('todos')
document.querySelector('button').addEventListener('click', addElement)


function addElement() {
    const newTodo = this.previousElementSibling.value.trim()
    if(newTodo) {
        createTodo(newTodo)
        this.previousElementSibling.value = ''
    } else {
        alert('Enter please text')
    }
}

function createTodo(newTodo) {
    const li = document.createElement('li')
    li.innerText = newTodo
    li.className = 'todo-item'
    list.append(li)
    li.addEventListener('click', removeTodo)
}

function removeTodo() {
    this.remove()
    // this.removeEventListener('click', removeTodo())
}
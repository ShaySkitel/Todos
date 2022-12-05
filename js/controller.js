
function onInit() {
    renderTodos()
}

function renderTodos() {

    const todos = getTodosForDisplay()
    const strHTMLs = todos.map(todo => `
    <li class="${(todo.isDone) ? "done" : ""}"
         onclick="onToggleTodo('${todo.id}')">
         ${todo.txt}
        <button onclick="onRemoveTodo(event,'${todo.id}')">x</button> 
    </li>` )

    document.querySelector('.todo-list').innerHTML = strHTMLs.join('')

    document.querySelector('.total-todos').innerText = getTotalTodos() ? getTotalTodos() : 'No todos'
    document.querySelector('.active-todos').innerText = getActiveTodos() ? getActiveTodos() : 'No active todos'
}

function onAddTodo(ev) {
    ev.preventDefault()
    const elTxt = document.querySelector('input[name="todo-txt"]')
    const elImportance = document.querySelector('input[type="number"]')
    const txt = elTxt.value
    if (!txt) return
    const importance = +(elImportance.value ? elImportance.value : 1)

    addTodo(txt, importance)
    elTxt.value = ''
    renderTodos()
}

function onRemoveTodo(ev, todoId) {
    ev.stopPropagation()
    const isSureToDelete = confirm('Are you sure you want to delete this todo?')
    if(!isSureToDelete) return
    removeTodo(todoId)
    renderTodos()
}

function onToggleTodo(todoId) {
    // console.log('Toggling', todoId)
    toggleTodo(todoId)
    renderTodos()
}

function onSetFilter(filterBy) {
    // console.log('filterBy', filterBy)
    setFilter(filterBy)
    renderTodos()
}

function onSetSort(sortBy) {
    setSort(sortBy)
    renderTodos()
}
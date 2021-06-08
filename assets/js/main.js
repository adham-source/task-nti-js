// Copy paste
const taskHeads = ["id", "title", "content", "taskType", "dueDate", "status", "important"]

const getAllData = () => JSON.parse(localStorage.getItem('tasks')) || []

const setAllData = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks))

const createCustomElement = (parent, element, classes, attributes, text) => {
    const myElement = document.createElement(element)
    parent.appendChild(myElement)
    if (classes != '') myElement.className = classes
    if (text != '') myElement.textContent = text
    if (attributes.length != 0) {
        attributes.forEach(attribute => {
            myElement.setAttribute(attribute.attrName, attribute.attValue)
        })
    }
    return myElement
}

// const drawTask = (task) =>{


//     console.log(task.id)
// }
const addTask = (task) => {
    tasks = getAllData()
    tasks.push(task)
    setAllData(tasks)
}

let tasks = getAllData()
allTasks = document.querySelector('#allTasks')
rowContainer = createCustomElement(allTasks, 'div', 'row my-3', [], '')
tasks.forEach((task, i) => {
    // drawTask(task)
    taskDiv = createCustomElement(rowContainer, 'div', 'col-lg-4 col-md-6 rounded', [], '')
    innerDiv = createCustomElement(taskDiv, 'div', 'm-1 bg-primary p-1 rounded', [], '')
    taskHeads.forEach(h => {
        h6 = createCustomElement(innerDiv, "h6", "text-white", [], task[h])
    })
    delBtn = createCustomElement(innerDiv, 'button', 'btn btn-danger my-1', [], 'Delete')
    delBtn.addEventListener('click', function(e) {
        tasks = getAllData()
        tasks.splice(i, 1)
        this.parentElement.parentElement.remove()
        setAllData(tasks)
    })

    editBtn = createCustomElement(innerDiv, 'button', 'btn btn-secondary m-1', [], 'Update')
    editBtn.addEventListener('click', function(e) {
        // tasks = getAllData()
        console.log(task)
        for (t in task) {
            if (t != 'id' && t != 'status') task[t] = prompt(`Enter new ${t}`)
        }
        console.log(task)
    })
})

document.querySelector('#addTask').addEventListener('submit', function(e) {

    e.preventDefault()
    console.log(`test`)
    if (tasks.length == 0) task = { id: 1 }
    else { task = { id: (tasks[tasks.length - 1].id + 1) } }
    taskHeads.forEach((h, i) => {
        if (i != 0 && h != "status") task[h] = e.target.elements[h].value
        else if (h == "status") task[h] = e.target.elements[h].checked
    })
    addTask(task)
    this.reset()
})